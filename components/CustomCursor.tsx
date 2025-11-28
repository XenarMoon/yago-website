'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const mousePosition = useRef({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    size: number;
  }>>([]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };

      // Add particles on mouse move
      if (Math.random() > 0.7) {
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
          size: Math.random() * 3 + 1
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Canvas particle system
  useEffect(() => {
    if (!isMounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let animationFrame: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Direct cursor position (no lag)
      setCursorPos({ x: mousePosition.current.x, y: mousePosition.current.y });

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.01;
        particle.vy += 0.05; // gravity

        if (particle.life > 0) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 107, 90, ${particle.life * 0.6})`;
          ctx.fill();

          // Glow effect
          ctx.shadowBlur = 20;
          ctx.shadowColor = 'rgba(255, 107, 90, 0.8)';
          ctx.shadowBlur = 0;

          return true;
        }
        return false;
      });

      // Draw cursor trail gradient
      const gradient = ctx.createRadialGradient(
        mousePosition.current.x, mousePosition.current.y, 0,
        mousePosition.current.x, mousePosition.current.y, 150
      );
      gradient.addColorStop(0, 'rgba(255, 107, 90, 0.15)');
      gradient.addColorStop(0.5, 'rgba(255, 107, 90, 0.05)');
      gradient.addColorStop(1, 'rgba(255, 107, 90, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <>
      {/* Canvas Particle System - Only on desktop */}
      <canvas
        ref={canvasRef}
        className="hidden md:block fixed inset-0 pointer-events-none z-50"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Magnetic Cursor - Only on desktop */}
      <div
        className="hidden md:block fixed w-5 h-5 pointer-events-none z-[60]"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="relative w-full h-full">
          {/* Inner dot */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-white rounded-full shadow-lg shadow-white/50"
          />
          {/* Outer ring */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0.2, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -inset-2 border-2 border-[#FF6B5A] rounded-full"
          />
          {/* Pulse ring */}
          <motion.div
            animate={{ scale: [0.5, 2], opacity: [0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
            className="absolute -inset-3 border border-[#FF6B5A]/50 rounded-full"
          />
        </div>
      </div>

      {/* Global cursor style */}
      <style jsx global>{`
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
