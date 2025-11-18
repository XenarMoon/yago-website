'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Mail, CheckCircle2, ChevronDown } from 'lucide-react';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send to your email service
      console.log('Email submitted:', email);
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 60px,
            rgba(197, 157, 95, 0.1) 60px,
            rgba(197, 157, 95, 0.1) 120px
          )`
        }} />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black" />

      {/* Golden glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C59D5F] rounded-full filter blur-[120px] opacity-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37] rounded-full filter blur-[120px] opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Logo/Brand mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-12"
          >
            <div className="inline-block">
              <h1 className="font-playfair text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-[#D4AF37] via-[#F4E5C3] to-[#C59D5F] mb-2">
                YAGO
              </h1>
              <div className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            </div>
          </motion.div>

          {/* Coming Soon Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-wide">
              Coming Soon
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C59D5F] to-transparent mx-auto mb-8" />
            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
              Experience the epitome of luxury and sophistication.
              <br className="hidden sm:block" />
              An exclusive journey awaits.
            </p>
          </motion.div>

          {/* Email subscription form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 mb-16"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37] to-[#C59D5F] rounded-none opacity-30 group-hover:opacity-50 blur transition duration-500" />
                  <div className="relative flex">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 bg-black/80 backdrop-blur-sm text-white px-6 py-4 sm:py-5
                               border border-[#C59D5F]/30 focus:border-[#D4AF37] outline-none
                               placeholder-gray-600 text-sm sm:text-base tracking-wider
                               transition-all duration-300"
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-[#D4AF37] to-[#C59D5F] text-black px-8 sm:px-12 py-4 sm:py-5
                               font-semibold tracking-widest text-sm sm:text-base
                               hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]
                               transition-all duration-300 uppercase"
                    >
                      Notify Me
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm mt-4 tracking-wide">
                  Be the first to experience luxury redefined
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 text-[#D4AF37]"
              >
                <CheckCircle2 className="w-6 h-6" />
                <span className="text-lg tracking-wide">Thank you for your interest</span>
              </motion.div>
            )}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex items-center justify-center gap-8 mb-8"
          >
            <a
              href="#"
              className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 transform hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>

          {/* Footer text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-gray-700 text-xs sm:text-sm tracking-[0.2em] uppercase"
          >
            Crafted with Excellence
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          onClick={scrollToContent}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 hover:text-[#D4AF37] transition-colors duration-300 group cursor-pointer"
          aria-label="Scroll to explore"
        >
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 group-hover:text-[#D4AF37]" />
          </motion.div>
        </motion.button>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#C59D5F]/20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#C59D5F]/20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#C59D5F]/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#C59D5F]/20" />
    </div>
  );
}
