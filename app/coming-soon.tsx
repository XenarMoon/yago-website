'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, Check, Star, Award, Brain,
  Clock, Shield, Zap, Globe, MessageCircle, Calendar, HeadphonesIcon,
  Plane, Utensils, ShoppingBag, Home, Car, Gift, Briefcase, Heart,
  Music, ShieldAlert, GraduationCap, Stethoscope, Languages, Rocket, Sparkles
} from 'lucide-react';
import SuccessModal from '@/components/SuccessModal';
import DemoAccessModal from '@/components/DemoAccessModal';
import { BenefitCard } from '@/components/BenefitCard';
import { FeatureCard } from '@/components/FeatureCard';
import { FAQItem } from '@/components/FAQItem';

type Language = 'en' | 'ru';

const translations = {
  en: {
    badge: {
      text: "The World's First AI Concierge",
      chip: "ANY TASK"
    },
    hero: {
      line1: "THE AI",
      line2: "LIFE STYLE",
      line3: "ASSISTANT",
      tagline: "World-class service inspired by Dubai and London standards",
      subtitle: "24/7 AI-powered concierge at your fingertips",
      emailPlaceholder: "Enter your email",
      joinButton: "JOIN",
      waitlist: "Join the waitlist • Be first to experience premium AI concierge"
    },
    marquee: "24/7 AVAILABLE • AI POWERED • PREMIUM SERVICE",
    problem: {
      title: "THE PROBLEM",
      items: [
        "Hours wasted on phone calls",
        "Missing exclusive experiences",
        "Juggling multiple apps",
        "No time for important moments",
        "Expensive traditional services",
        "Limited availability"
      ]
    },
    solution: {
      title: "THE SOLUTION",
      items: [
        "Instant 24/7 availability",
        "Exclusive venue access",
        "One AI for everything",
        "Time for what matters",
        "Affordable token pricing",
        "AI-powered efficiency"
      ]
    },
    howItWorks: {
      title: "HOW IT WORKS",
      steps: [
        { title: "ASK ANYTHING", desc: "Message YAGO with your request in natural language" },
        { title: "AI PROCESSES", desc: "Advanced AI coordinates all the details instantly" },
        { title: "DONE", desc: "Get confirmations and enjoy your time saved" }
      ]
    },
    benefits: {
      title: "PREMIUM BENEFITS",
      subtitle: "Experience concierge service that exceeds expectations",
      items: [
        { title: "24/7 Availability", description: "Your personal assistant never sleeps" },
        { title: "Instant Responses", description: "Lightning-fast AI processing" },
        { title: "Enterprise Security", description: "Bank-level encryption" },
        { title: "Global Reach", description: "150+ countries supported" },
        { title: "Natural Conversations", description: "No commands to learn" },
        { title: "White-Glove Service", description: "Premium concierge experience" }
      ]
    },
    features: {
      title: "EVERYTHING YOU NEED",
      items: [
        { title: "Travel Planning", description: "Flights, hotels, itineraries" },
        { title: "Restaurant Reservations", description: "Best tables worldwide" },
        { title: "Personal Shopping", description: "Find anything you need" },
        { title: "Home Services", description: "Maintenance on demand" },
        { title: "Transportation", description: "Rideshare, rentals, chauffeur" },
        { title: "Gift Recommendations", description: "Thoughtful for any occasion" },
        { title: "Business Support", description: "Research, scheduling, admin" },
        { title: "Wellness & Health", description: "Spa, fitness, appointments" },
        { title: "Entertainment", description: "Tickets, events, VIP" },
        { title: "Safety", description: "Emergency support 24/7" },
        { title: "Learning", description: "Courses and tutoring" },
        { title: "Medical Appointments", description: "Clinic & hospital bookings" }
      ]
    },
    premium: {
      title1: "LIFETIME",
      title2: "UNLIMITED",
      title3: "ACCESS",
      subtitle: "Join an exclusive community of Premium members with unlimited YAGO access, forever.",
      button: "ASK FOR DEMO",
      benefits: [
        "Unlimited requests forever",
        "VIP priority support",
        "Exclusive features first",
        "Premium member badge",
        "Access to premium partners",
        "Dedicated account manager",
        "Transferable NFT ownership",
        "Members-only events"
      ]
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "What is YAGO Concierge?",
          answer: "YAGO is an AI-powered lifestyle assistant available 24/7 on Telegram, iOS, and Android. It helps you with everything from travel planning and reservations to shopping, scheduling, and personal tasks."
        },
        {
          question: "How does the token system work?",
          answer: "Each request costs 1 token. You can purchase token packages (10, 25, 50, or 100 tokens) based on your needs. Tokens never expire and can be used anytime."
        },
        {
          question: "What is the Premium NFT membership?",
          answer: "The Premium NFT is a lifetime membership that grants unlimited access to YAGO with no per-request tokens needed. It also includes priority support and exclusive features."
        },
        {
          question: "Is my data secure?",
          answer: "Absolutely. We use bank-level encryption and enterprise security standards. Your conversations and personal information are completely private and never shared."
        },
        {
          question: "What kind of requests can YAGO handle?",
          answer: "YAGO can help with travel bookings, restaurant reservations, shopping, gift recommendations, home services, event planning, research, scheduling, and much more."
        },
        {
          question: "How quickly does YAGO respond?",
          answer: "YAGO typically responds within seconds. Complex requests that require booking confirmations may take a couple minutes."
        }
      ]
    },
    footer: {
      tagline: "Your 24/7 AI Lifestyle Assistant",
      copyright: "© 2025 YAGO Concierge • Powered by Natex Labs × AI",
      contact: "Contact us on LinkedIn"
    }
  },
  ru: {
    badge: {
      text: "Первый в мире ИИ-консьерж",
      chip: "ЛЮБАЯ ЗАДАЧА"
    },
    hero: {
      line1: "ИСКУССТВЕННЫЙ",
      line2: "ИНТЕЛЛЕКТ",
      line3: "АССИСТЕНТ",
      tagline: "Сервис мирового уровня — как в Дубае и Лондоне",
      subtitle: "Консьерж с ИИ 24/7 у вас под рукой",
      emailPlaceholder: "Введите ваш email",
      joinButton: "ПРИСОЕДИНИТЬСЯ",
      waitlist: "Присоединяйтесь к списку ожидания • Будьте первыми"
    },
    marquee: "ДОСТУПНО 24/7 • РАБОТАЕТ НА ИИ • ПРЕМИУМ СЕРВИС",
    problem: {
      title: "ПРОБЛЕМА",
      items: [
        "Часы потрачены на звонки",
        "Упущенные возможности",
        "Множество приложений",
        "Нет времени на важное",
        "Дорогие традиционные услуги",
        "Ограниченная доступность"
      ]
    },
    solution: {
      title: "РЕШЕНИЕ",
      items: [
        "Мгновенная доступность 24/7",
        "Доступ к эксклюзивным местам",
        "Один ИИ для всего",
        "Время для важного",
        "Доступные токены",
        "Эффективность ИИ"
      ]
    },
    howItWorks: {
      title: "КАК ЭТО РАБОТАЕТ",
      steps: [
        { title: "СПРОСИТЕ", desc: "Отправьте запрос YAGO на естественном языке" },
        { title: "ИИ ОБРАБАТЫВАЕТ", desc: "Продвинутый ИИ мгновенно координирует все детали" },
        { title: "ГОТОВО", desc: "Получайте подтверждения и наслаждайтесь" }
      ]
    },
    benefits: {
      title: "ПРЕМИУМ ПРЕИМУЩЕСТВА",
      subtitle: "Испытайте консьерж-сервис, который превосходит ожидания",
      items: [
        { title: "Доступность 24/7", description: "Ваш помощник никогда не спит" },
        { title: "Мгновенные ответы", description: "Молниеносная обработка ИИ" },
        { title: "Корпоративная безопасность", description: "Шифрование банковского уровня" },
        { title: "Глобальный охват", description: "Поддержка 150+ стран" },
        { title: "Естественные диалоги", description: "Не нужно учить команды" },
        { title: "Белые перчатки", description: "Премиальный сервис" }
      ]
    },
    features: {
      title: "ВСЁ ЧТО ВАМ НУЖНО",
      items: [
        { title: "Планирование путешествий", description: "Авиабилеты, отели, маршруты" },
        { title: "Бронирование ресторанов", description: "Лучшие столики по всему миру" },
        { title: "Персональный шопинг", description: "Найдем всё что нужно" },
        { title: "Домашние услуги", description: "Обслуживание по запросу" },
        { title: "Транспорт", description: "Такси, аренда, шофёр" },
        { title: "Подарки", description: "Идеи для любого случая" },
        { title: "Бизнес поддержка", description: "Исследования, планирование" },
        { title: "Здоровье и wellness", description: "Спа, фитнес, записи" },
        { title: "Развлечения", description: "Билеты, события, VIP" },
        { title: "Безопасность", description: "Экстренная поддержка 24/7" },
        { title: "Обучение", description: "Курсы и репетиторство" },
        { title: "Медицинские записи", description: "Запись в клиники и больницы" }
      ]
    },
    premium: {
      title1: "ПОЖИЗНЕННЫЙ",
      title2: "БЕЗЛИМИТНЫЙ",
      title3: "ДОСТУП",
      subtitle: "Присоединяйтесь к эксклюзивному сообществу Premium членов с безлимитным доступом к YAGO, навсегда.",
      button: "ЗАПРОСИТЬ ДЕМО",
      benefits: [
        "Безлимитные запросы навсегда",
        "VIP приоритетная поддержка",
        "Эксклюзивные функции первыми",
        "Значок премиум члена",
        "Доступ к премиум партнёрам",
        "Выделенный менеджер",
        "Передаваемый NFT",
        "Закрытые мероприятия"
      ]
    },
    faq: {
      title: "ВОПРОСЫ",
      items: [
        {
          question: "Что такое YAGO Concierge?",
          answer: "YAGO — это ИИ-ассистент для образа жизни, доступный 24/7 в Telegram, iOS и Android. Он помогает со всем: от планирования путешествий до покупок и личных задач."
        },
        {
          question: "Как работает система токенов?",
          answer: "Каждый запрос стоит 1 токен. Вы можете купить пакеты токенов (10, 25, 50 или 100) в зависимости от потребностей. Токены не истекают."
        },
        {
          question: "Что такое Premium NFT членство?",
          answer: "Premium NFT — это пожизненное членство, дающее безлимитный доступ к YAGO без токенов за запрос. Включает приоритетную поддержку и эксклюзивные функции."
        },
        {
          question: "Безопасны ли мои данные?",
          answer: "Абсолютно. Мы используем шифрование банковского уровня и корпоративные стандарты безопасности. Ваши разговоры полностью конфиденциальны."
        },
        {
          question: "Какие запросы может обработать YAGO?",
          answer: "YAGO помогает с бронированием путешествий, резервациями ресторанов, покупками, подарками, домашними услугами, планированием мероприятий и многим другим."
        },
        {
          question: "Как быстро отвечает YAGO?",
          answer: "YAGO обычно отвечает за секунды. Сложные запросы с подтверждениями бронирования могут занять пару минут."
        }
      ]
    },
    footer: {
      tagline: "Ваш ИИ-ассистент образа жизни 24/7",
      copyright: "© 2025 YAGO Concierge • Работает на Natex Labs × AI",
      contact: "Свяжитесь с нами в LinkedIn"
    }
  }
};

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [language, setLanguage] = useState<Language>('en');
  const [pageLoaded, setPageLoaded] = useState(false);

  const t = translations[language];

  // Smooth page load animation
  useEffect(() => {
    setPageLoaded(true);
  }, []);

  // Scroll animations for badge
  const { scrollY } = useScroll();
  const badgeY = useTransform(scrollY, [0, 300], [0, -20]);
  const badgeOpacity = useTransform(scrollY, [0, 200, 400], [1, 0.8, 0]);
  const badgeScale = useTransform(scrollY, [0, 300], [1, 0.85]);

  // Mouse movement tracking with smooth interpolation
  const mousePosition = useRef({ x: 0, y: 0 });
  const smoothMouse = useRef({ x: 0, y: 0 });
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

      // Smooth cursor interpolation
      smoothMouse.current.x += (mousePosition.current.x - smoothMouse.current.x) * 0.15;
      smoothMouse.current.y += (mousePosition.current.y - smoothMouse.current.y) * 0.15;

      // Update cursor position for the visual cursor
      setCursorPos({ x: smoothMouse.current.x, y: smoothMouse.current.y });

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
        smoothMouse.current.x, smoothMouse.current.y, 0,
        smoothMouse.current.x, smoothMouse.current.y, 150
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setShowModal(true);
        setEmail('');
      } else {
        setErrorMessage(data.error || 'Something went wrong');
      }
    } catch (error) {
      setErrorMessage('Connection error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ru' : 'en');
  };

  const benefitIcons = [Clock, Zap, Shield, Globe, MessageCircle, HeadphonesIcon];
  const featureIcons = [Plane, Utensils, ShoppingBag, Home, Car, Gift, Briefcase, Heart, Music, ShieldAlert, GraduationCap, Stethoscope];

  return (
    <>
      <div className="min-h-screen relative text-white overflow-x-hidden md:cursor-none">
        {/* Canvas Particle System - Only on desktop and after mount */}
        {isMounted && typeof window !== 'undefined' && (
          <>
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
                transition: 'none'
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
          </>
        )}

        {/* Luxury Animated Background */}
        <div className="fixed inset-0 -z-10">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0015] to-black" />

          {/* Animated mesh gradient */}
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(255,107,90,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,107,90,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(255,107,90,0.15) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(255,107,90,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(255,107,90,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,107,90,0.1) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          />

          {/* Floating orbs - Smooth Animation */}
          <motion.div
            animate={{
              x: [0, 150, 0],
              y: [0, -120, 0],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FF6B5A]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -120, 0],
              y: [0, 150, 0],
              scale: [1, 1.4, 1],
              opacity: [0.15, 0.35, 0.15]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#FF6B5A]/8 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, 80, -80, 0],
              y: [0, -80, 80, 0],
              scale: [1, 1.2, 1.1, 1],
              opacity: [0.1, 0.25, 0.15, 0.1]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 10 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FF6B5A]/6 rounded-full blur-3xl"
          />

          {/* Subtle grid overlay */}
          <div className="absolute inset-0 opacity-[0.02]"
               style={{
                 backgroundImage: 'linear-gradient(rgba(255,107,90,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,90,0.3) 1px, transparent 1px)',
                 backgroundSize: '100px 100px'
               }}
          />

          {/* Vignette effect */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50" />
        </div>
        {/* Premium Tech Badge - Floating at Top with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          style={{
            y: badgeY,
            opacity: badgeOpacity,
            scale: badgeScale
          }}
          transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
          className="fixed top-4 md:top-6 left-4 lg:left-1/2 lg:-translate-x-1/2 z-40 max-w-[calc(100vw-2rem)] px-2"
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Outer glow layer */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 30px rgba(255,107,90,0.3), 0 0 60px rgba(255,107,90,0.1)',
                  '0 0 50px rgba(255,107,90,0.5), 0 0 80px rgba(255,107,90,0.2)',
                  '0 0 30px rgba(255,107,90,0.3), 0 0 60px rgba(255,107,90,0.1)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-full"
            />

            {/* Main badge container with gradient border */}
            <div className="relative px-4 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-black/60 via-black/50 to-black/60 backdrop-blur-xl border-2 border-transparent"
                 style={{
                   backgroundImage: 'linear-gradient(black, black), linear-gradient(90deg, transparent, #FF6B5A, transparent)',
                   backgroundOrigin: 'border-box',
                   backgroundClip: 'padding-box, border-box'
                 }}>

              {/* Sparkle particles */}
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: -20,
                  y: -20
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                className="absolute -top-1 left-8"
              >
                <Sparkles className="w-3 h-3 text-[#FF6B5A]" />
              </motion.div>

              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: 20,
                  y: -20
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.5 }}
                className="absolute -top-1 right-8"
              >
                <Sparkles className="w-3 h-3 text-[#FF6B5A]" />
              </motion.div>

              {/* Circuit-style corner decorations */}
              <div className="absolute top-2 left-3 w-2 h-2 border-t-2 border-l-2 border-[#FF6B5A]/40" />
              <div className="absolute top-2 right-3 w-2 h-2 border-t-2 border-r-2 border-[#FF6B5A]/40" />
              <div className="absolute bottom-2 left-3 w-2 h-2 border-b-2 border-l-2 border-[#FF6B5A]/40" />
              <div className="absolute bottom-2 right-3 w-2 h-2 border-b-2 border-r-2 border-[#FF6B5A]/40" />

              <div className="flex items-center gap-1 md:gap-2 whitespace-nowrap">
                {/* Animated rocket icon */}
                <motion.div
                  animate={{
                    y: [0, -3, 0],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="relative flex-shrink-0"
                >
                  <motion.div
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute inset-0 bg-[#FF6B5A]/30 rounded-full blur-md"
                  />
                  <Rocket className="w-3 h-3 md:w-5 md:h-5 text-[#FF6B5A] relative z-10" />
                </motion.div>

                {/* Vertical divider with animation */}
                <motion.div
                  animate={{ scaleY: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-px h-4 md:h-6 bg-gradient-to-b from-transparent via-[#FF6B5A]/50 to-transparent flex-shrink-0"
                />

                {/* Text with gradient */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400 text-[8px] sm:text-[10px] md:text-sm font-semibold tracking-wide whitespace-nowrap">
                  {t.badge.text}
                </span>

                {/* Vertical divider */}
                <motion.div
                  animate={{ scaleY: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="w-px h-4 md:h-6 bg-gradient-to-b from-transparent via-[#FF6B5A]/50 to-transparent flex-shrink-0"
                />

                {/* Premium badge chip */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative px-1.5 md:px-3 py-0.5 md:py-1 bg-gradient-to-r from-[#FF6B5A] to-[#FF8A7A] rounded-full flex-shrink-0"
                >
                  <motion.div
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-white/20 rounded-full"
                  />
                  <span className="relative z-10 text-black text-[8px] sm:text-[9px] md:text-xs font-black tracking-wider whitespace-nowrap">
                    {t.badge.chip}
                  </span>
                </motion.div>
              </div>

              {/* Bottom glow line */}
              <motion.div
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#FF6B5A] to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Language Switcher - Top Right */}
        <div className="fixed top-20 md:top-8 right-4 md:right-8 z-50">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="px-4 md:px-6 py-2 md:py-3 bg-white/5 border border-white/10 hover:border-[#FF6B5A] backdrop-blur-xl transition-all duration-300 flex items-center gap-2 group rounded-full"
          >
            <Languages className="w-4 h-4 text-[#FF6B5A]" />
            <span className="font-medium text-sm md:text-base">{language.toUpperCase()}</span>
          </motion.button>
        </div>

        {/* Hero Section - Boulder Style */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(#FF6B5A 1px, transparent 1px), linear-gradient(90deg, #FF6B5A 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full">
            {/* Larger logo/brand */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <span className="text-[#FF6B5A] font-bold text-3xl tracking-[0.3em] uppercase">YAGO</span>
            </motion.div>

            {/* Massive headline with glitch effect and proper spacing */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[clamp(2.5rem,8vw,8rem)] font-black leading-[0.9] mb-12 tracking-tight"
            >
              <span className="block glitch-text" data-text={t.hero.line1}>{t.hero.line1}</span>
              <span className="block glitch-text" data-text={t.hero.line2}>{t.hero.line2}</span>
              <span className="block text-[#FF6B5A] glitch-text" data-text={`${t.hero.line3} →`}>{t.hero.line3} <ArrowUpRight className="inline-block w-[0.8em] h-[0.8em]" /></span>
            </motion.h1>

            {/* Subtitle with tagline */}
            <div className="mb-12 md:mb-16 space-y-6 md:space-y-8 overflow-visible">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base md:text-xl lg:text-2xl text-gray-400 font-light md:whitespace-nowrap"
              >
                {t.hero.tagline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-[#FF6B5A] bg-clip-text text-transparent leading-[1.3] tracking-tight pb-4 overflow-visible"
              >
                {t.hero.subtitle}
              </motion.p>
            </div>

            {/* Email Form - Boulder style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-2xl w-full"
            >
              <form onSubmit={handleSubmit} className="relative">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.hero.emailPlaceholder}
                    disabled={isLoading}
                    className="flex-1 px-6 sm:px-8 py-4 sm:py-6 bg-white/5 border-2 border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B5A] transition-all duration-300 text-base sm:text-lg font-light rounded-sm"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !email}
                    className="px-8 sm:px-12 py-4 sm:py-6 bg-[#FF6B5A] hover:bg-[#FF8A7A] text-black font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 group whitespace-nowrap rounded-sm"
                  >
                    {isLoading ? (
                      <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    ) : (
                      <>
                        {t.hero.joinButton}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                {errorMessage && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-sm mt-4"
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </form>

              <p className="text-gray-600 text-sm mt-6">
                {t.hero.waitlist}
              </p>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="w-px h-24 bg-gradient-to-b from-[#FF6B5A] to-transparent" />
          </motion.div>
        </section>

        {/* Marquee Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="py-12 border-y border-white/10 overflow-hidden"
          style={{ willChange: 'opacity' }}
        >
          <div className="marquee-container">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex gap-12 items-center whitespace-nowrap"
            >
              {[...Array(10)].map((_, i) => (
                <span key={i} className="text-4xl font-bold text-white/10">
                  {t.marquee}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Problem → Solution - Boulder Style */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="py-32 px-6"
          style={{ willChange: 'opacity, transform' }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-24">
              <h2 className="text-6xl md:text-8xl font-black mb-8">
                {t.problem.title.split(' ')[0]} <span className="text-[#FF6B5A]">{t.problem.title.split(' ').slice(1).join(' ')}</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-12 text-xl text-gray-400 font-light">
                <div className="space-y-4">
                  {t.problem.items.slice(0, 3).map((item, i) => (
                    <p key={i}>→ {item}</p>
                  ))}
                </div>
                <div className="space-y-4">
                  {t.problem.items.slice(3).map((item, i) => (
                    <p key={i}>→ {item}</p>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-6xl md:text-8xl font-black mb-8">
                {t.solution.title.split(' ')[0]} <span className="text-[#FF6B5A]">{t.solution.title.split(' ').slice(1).join(' ')}</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-12 text-xl font-light">
                <div className="space-y-4">
                  {t.solution.items.slice(0, 3).map((item, i) => (
                    <p key={i}><Check className="inline-block w-6 h-6 text-[#FF6B5A] mr-3" />{item}</p>
                  ))}
                </div>
                <div className="space-y-4">
                  {t.solution.items.slice(3).map((item, i) => (
                    <p key={i}><Check className="inline-block w-6 h-6 text-[#FF6B5A] mr-3" />{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How It Works - Luxury Numbers */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="py-32 px-6 bg-[#FF6B5A]"
          style={{ willChange: 'opacity, transform' }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-black mb-24 text-black">
              {t.howItWorks.title}
            </h2>

            <div className="grid md:grid-cols-3 gap-16">
              {t.howItWorks.steps.map((step, i) => (
                <div key={i}>
                  <div className="luxury-number text-[12rem] font-black leading-none mb-4 relative">
                    <span className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/5 bg-clip-text text-transparent blur-sm">
                      0{i + 1}
                    </span>
                    <span className="relative bg-gradient-to-br from-black/30 to-black/10 bg-clip-text text-transparent">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-black">{step.title}</h3>
                  <p className="text-xl text-black/70 font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Benefits Grid */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="py-32 px-6"
          style={{ willChange: 'opacity, transform' }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-6xl md:text-8xl font-black mb-6">
                {t.benefits.title.split(' ')[0]} <span className="text-[#FF6B5A]">{t.benefits.title.split(' ').slice(1).join(' ')}</span>
              </h2>
              <p className="text-2xl text-gray-400 font-light">
                {t.benefits.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {t.benefits.items.map((benefit, i) => {
                const Icon = benefitIcons[i];
                return (
                  <div
                    key={i}
                    className="group"
                  >
                    <div className="p-8 border border-white/10 hover:border-[#FF6B5A] transition-all duration-300">
                      <Icon className="w-12 h-12 text-[#FF6B5A] mb-6" />
                      <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                      <p className="text-gray-400 font-light">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Features Grid - Minimal Cards */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="py-32 px-6 bg-white/5"
          style={{ willChange: 'opacity, transform' }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-6xl md:text-8xl font-black mb-6">
                {t.features.title.split(' ').slice(0, -2).join(' ')} <span className="text-[#FF6B5A]">{t.features.title.split(' ').slice(-2).join(' ')}</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {t.features.items.map((feature, i) => {
                const Icon = featureIcons[i];
                return (
                  <div
                    key={i}
                    className="p-6 border border-white/10 hover:border-[#FF6B5A] transition-all duration-300 group"
                  >
                    <Icon className="w-8 h-8 text-[#FF6B5A] mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <h4 className="font-bold mb-2 text-sm">{feature.title}</h4>
                    <p className="text-gray-500 text-xs font-light">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Premium NFT - Bold CTA */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="py-32 px-6"
          style={{ willChange: 'opacity, transform' }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <Award className="w-24 h-24 text-[#FF6B5A] mx-auto mb-12" />

              <h2 className="text-6xl md:text-9xl font-black mb-8 leading-none">
                {t.premium.title1}<br />
                <span className="text-[#FF6B5A]">{t.premium.title2}</span><br />
                {t.premium.title3}
              </h2>

              <p className="text-2xl text-gray-400 font-light max-w-3xl mx-auto mb-16">
                {t.premium.subtitle}
              </p>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                {[t.premium.benefits.slice(0, 4), t.premium.benefits.slice(4)].map((col, i) => (
                  <div key={i} className="text-left space-y-4">
                    {col.map((item, j) => (
                      <p key={j} className="flex items-center gap-3 text-lg">
                        <Star className="w-5 h-5 text-[#FF6B5A] flex-shrink-0" />
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Demo button clicked, opening modal...');
                  setShowDemoModal(true);
                }}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Demo button touched (mobile), opening modal...');
                  setShowDemoModal(true);
                }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,107,90,0.6)" }}
                className="relative px-12 md:px-16 py-5 md:py-6 bg-gradient-to-r from-[#FF6B5A] to-[#FF8A7A] hover:from-[#FF8A7A] hover:to-[#FF6B5A] text-black text-lg md:text-xl font-bold transition-all duration-500 inline-flex items-center gap-3 md:gap-4 overflow-hidden group cursor-pointer touch-manipulation"
                type="button"
              >
                {/* Animated background shimmer */}
                <motion.div
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />

                {/* Animated glow particles */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute top-0 left-1/4 w-20 h-20 bg-white/20 rounded-full blur-xl"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 0.5
                  }}
                  className="absolute bottom-0 right-1/4 w-16 h-16 bg-white/15 rounded-full blur-xl"
                />

                <span className="relative z-10">{t.premium.button}</span>
                <ArrowUpRight className="relative z-10 w-5 h-5 md:w-6 md:h-6 group-hover:rotate-45 transition-transform duration-300" />
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* FAQ - Clean List */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="py-32 px-6 border-t border-white/10"
          style={{ willChange: 'opacity, transform' }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-black mb-20">
              {t.faq.title}
            </h2>

            <div className="space-y-px">
              {t.faq.items.map((faq, i) => (
                <FAQItem key={i} {...faq} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">YAGO</div>
                <p className="text-gray-600 text-sm">{t.footer.tagline}</p>
              </div>

              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/company/yagoconcierge"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-[#FF6B5A] text-white hover:text-[#FF6B5A] transition-all duration-300 group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="font-medium">LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="text-gray-600 text-sm text-center md:text-right">
                {t.footer.copyright}
              </div>
            </div>
          </div>
        </footer>
      </div>

      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <DemoAccessModal isOpen={showDemoModal} onClose={() => setShowDemoModal(false)} />

      <style jsx global>{`
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }

        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 80px;
        }

        @media (prefers-reduced-motion: no-preference) {
          html {
            scroll-behavior: smooth;
          }
        }

        body {
          overflow-x: hidden;
          overscroll-behavior-y: none;
        }

        /* GPU acceleration for smoother animations */
        section {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }

        /* Custom scrollbar for luxury feel */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #FF6B5A, #FF8A7A);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #FF8A7A, #FF6B5A);
        }

        .glitch-text {
          position: relative;
          display: inline-block;
        }

        .glitch-text:hover::before,
        .glitch-text:hover::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-text:hover::before {
          animation: glitch 0.3s infinite;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
          transform: translate(-2px, -2px);
          opacity: 0.8;
        }

        .glitch-text:hover::after {
          animation: glitch 0.3s infinite reverse;
          clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
          transform: translate(2px, 2px);
          opacity: 0.8;
          color: #FF6B5A;
        }

        .luxury-number {
          filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3));
        }

        .marquee-container {
          width: 100%;
        }
      `}</style>
    </>
  );
}
