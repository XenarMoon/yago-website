'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, Check, Star, Award, Brain,
  Clock, Shield, Zap, Globe, MessageCircle, Calendar, HeadphonesIcon,
  Plane, Utensils, ShoppingBag, Home, Car, Gift, Briefcase, Heart,
  Music, ShieldAlert, GraduationCap, Stethoscope, Languages, Rocket, Sparkles,
  Users, Map, Menu, X
} from 'lucide-react';
import Link from 'next/link';
import SuccessModal from '@/components/SuccessModal';
import { BenefitCard } from '@/components/BenefitCard';
import { FeatureCard } from '@/components/FeatureCard';
import { FAQItem } from '@/components/FAQItem';
import ProblemSolution from '@/components/sections/ProblemSolution';
import TechApproach from '@/components/sections/TechApproach';
import Partners from '@/components/sections/Partners';

type Language = 'en' | 'uz';

const translations = {
  en: {
    nav: {
      problem: "Problem & Solution",
      tech: "Technology",
      team: "Team",
      roadmap: "Roadmap"
    },
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
    whatIsYago: {
      title: "WHAT IS",
      titleHighlight: "YAGO?",
      subtitle: "Your personal AI assistant that handles life's tasks so you don't have to",
      items: [
        "One message to get anything done",
        "Works 24/7, never sleeps, never forgets",
        "Speaks your language — Uzbek, Russian, English",
        "Remembers your preferences forever",
        "Trusted by professionals & families",
        "Dubai-level service at local prices"
      ]
    },
    yagoCanDo: {
      title: "YAGO",
      titleHighlight: "CAN DO",
      subtitle: "Tell YAGO what you need. Watch it happen.",
      items: [
        "Order groceries & deliver to your door",
        "Find trusted plumbers & electricians",
        "Book the best table at top restaurants",
        "Schedule doctor appointments instantly",
        "Plan your entire birthday party or event",
        "Call services for you & negotiate prices"
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
  uz: {
    nav: {
      problem: "Muammo va Yechim",
      tech: "Texnologiya",
      team: "Jamoa",
      roadmap: "Roadmap"
    },
    badge: {
      text: "Dunyodagi birinchi AI konsyerj",
      chip: "HAR QANDAY VAZIFA"
    },
    hero: {
      line1: "AI",
      line2: "HAYOT TARZI",
      line3: "YORDAMCHISI",
      tagline: "Dubay va London standartlaridan ilhomlangan jahon darajasidagi xizmat",
      subtitle: "24/7 AI konsyerj qo'lingizda",
      emailPlaceholder: "Emailingizni kiriting",
      joinButton: "QO'SHILING",
      waitlist: "Kutish ro'yxatiga qo'shiling • Birinchilardan bo'ling"
    },
    marquee: "24/7 MAVJUD • AI QUVVATIDA • PREMIUM XIZMAT",
    whatIsYago: {
      title: "YAGO",
      titleHighlight: "NIMA?",
      subtitle: "Hayotdagi vazifalarni siz uchun bajaradigan shaxsiy AI yordamchi",
      items: [
        "Bitta xabar bilan hamma narsani bajaring",
        "24/7 ishlaydi, hech qachon uxlamaydi",
        "Tilingizni tushunadi — O'zbek, Rus, Ingliz",
        "Afzalliklaringizni abadiy eslab qoladi",
        "Mutaxassislar va oilalar ishonadi",
        "Dubay darajasidagi xizmat, mahalliy narxda"
      ]
    },
    yagoCanDo: {
      title: "YAGO",
      titleHighlight: "QILA OLADI",
      subtitle: "YAGO ga nima kerakligini ayting. Natijani kuzating.",
      items: [
        "Oziq-ovqat mahsulotlarini buyurtma qiling va eshigingizgacha yetkazib beradi",
        "Ishonchli santexnik va elektriklarni toping",
        "Eng yaxshi restoranlarda stol band qiling",
        "Shifokor qabuliga bir zumda yoziling",
        "Tug'ilgan kun yoki tadbiringizni to'liq rejalashtiring",
        "Xizmatlarni chaqiring va narxlarni kelishing"
      ]
    },
    howItWorks: {
      title: "QANDAY ISHLAYDI",
      steps: [
        { title: "SO'RANG", desc: "YAGO ga so'rovingizni tabiiy tilda yuboring" },
        { title: "AI QAYTA ISHLAYDI", desc: "Ilg'or AI barcha tafsilotlarni bir zumda muvofiqlashtiradi" },
        { title: "TAYYOR", desc: "Tasdiqlashlarni oling va vaqtingizdan zavqlaning" }
      ]
    },
    benefits: {
      title: "PREMIUM AFZALLIKLAR",
      subtitle: "Kutilganlardan oshib ketadigan konsyerj xizmatini his qiling",
      items: [
        { title: "24/7 Mavjudlik", description: "Shaxsiy yordamchingiz hech qachon uxlamaydi" },
        { title: "Bir zumda javoblar", description: "Tezkor AI qayta ishlash" },
        { title: "Korxona xavfsizligi", description: "Bank darajasidagi shifrlash" },
        { title: "Global qamrov", description: "150+ davlatni qo'llab-quvvatlash" },
        { title: "Tabiiy suhbatlar", description: "O'rganish kerak bo'lmagan buyruqlar" },
        { title: "Yuqori sifat", description: "Premium konsyerj tajribasi" }
      ]
    },
    features: {
      title: "Sizga kerakli hamma narsa",
      items: [
        { title: "Sayohat rejalashtirish", description: "Parvozlar, mehmonxonalar, marshrutlar" },
        { title: "Restoran bron qilish", description: "Butun dunyo bo'ylab eng yaxshi stollar" },
        { title: "Shaxsiy xaridlar", description: "Kerakli narsani toping" },
        { title: "Uy xizmatlari", description: "Talab bo'yicha texnik xizmat" },
        { title: "Transport", description: "Taksi, ijara, shofyor" },
        { title: "Sovg'a tavsiyalari", description: "Har qanday holat uchun" },
        { title: "Biznesni qo'llab-quvvatlash", description: "Tadqiqot, rejalashtirish, ma'muriy" },
        { title: "Salomatlik", description: "Spa, fitnes, uchrashuvlar" },
        { title: "Ko'ngil ochar", description: "Chiptalar, tadbirlar, VIP" },
        { title: "Xavfsizlik", description: "24/7 favqulodda yordam" },
        { title: "Ta'lim", description: "Kurslar va repetitorlik" },
        { title: "Tibbiy uchrashuvlar", description: "Klinika va kasalxonaga yozilish" }
      ]
    },
    premium: {
      title1: "UMRBOD",
      title2: "CHEKSIZ",
      title3: "KIRISH",
      subtitle: "Cheksiz YAGO kirishiga ega Premium a'zolarning ekskluziv jamoasiga qo'shiling, abadiy.",
      button: "DEMO SO'RASH",
      benefits: [
        "Abadiy cheksiz so'rovlar",
        "VIP ustuvor qo'llab-quvvatlash",
        "Birinchi bo'lib ekskluziv funksiyalar",
        "Premium a'zo nishoni",
        "Premium hamkorlarga kirish",
        "Maxsus akkaunt menejeri",
        "Ko'chiriladigan NFT egaligi",
        "Faqat a'zolar uchun tadbirlar"
      ]
    },
    faq: {
      title: "SAVOL-JAVOB",
      items: [
        {
          question: "YAGO Concierge nima?",
          answer: "YAGO — Telegram, iOS va Android da 24/7 mavjud AI quvvatidagi hayot tarzi yordamchisi. Sayohat rejalashtirish va bronlashdan tortib xarid va shaxsiy vazifalargacha hamma narsada yordam beradi."
        },
        {
          question: "Token tizimi qanday ishlaydi?",
          answer: "Har bir so'rov 1 token turadi. Ehtiyojlaringizga qarab token paketlarini (10, 25, 50 yoki 100) sotib olishingiz mumkin. Tokenlar hech qachon eskirmasdi."
        },
        {
          question: "Premium NFT a'zolik nima?",
          answer: "Premium NFT — so'rov uchun token kerak bo'lmasdan YAGO ga cheksiz kirish imkonini beradigan umrbod a'zolik. Ustuvor qo'llab-quvvatlash va ekskluziv funksiyalarni ham o'z ichiga oladi."
        },
        {
          question: "Ma'lumotlarim xavfsizmi?",
          answer: "Albatta. Biz bank darajasidagi shifrlash va korxona xavfsizligi standartlaridan foydalanamiz. Sizning suhbatlaringiz va shaxsiy ma'lumotlaringiz butunlay maxfiy va hech qachon ulashilmaydi."
        },
        {
          question: "YAGO qanday so'rovlarni bajarishi mumkin?",
          answer: "YAGO sayohat bronlari, restoran rezervlari, xaridlar, sovg'a tavsiyalari, uy xizmatlari, tadbir rejalashtirish, tadqiqot, rejalashtirish va boshqa ko'p narsalarda yordam berishi mumkin."
        },
        {
          question: "YAGO qanchalik tez javob beradi?",
          answer: "YAGO odatda soniyalar ichida javob beradi. Bron tasdiqlashlarini talab qiladigan murakkab so'rovlar bir necha daqiqa olishi mumkin."
        }
      ]
    },
    footer: {
      tagline: "Sizning 24/7 AI hayot tarzi yordamchingiz",
      copyright: "© 2025 YAGO Concierge • Natex Labs × AI tomonidan quvvatlanadi",
      contact: "LinkedIn orqali bog'laning"
    }
  }
};

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [language, setLanguage] = useState<Language>('en');
  const [pageLoaded, setPageLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setLanguage(prev => prev === 'en' ? 'uz' : 'en');
  };

  const benefitIcons = [Clock, Zap, Shield, Globe, MessageCircle, HeadphonesIcon];
  const featureIcons = [Plane, Utensils, ShoppingBag, Home, Car, Gift, Briefcase, Heart, Music, ShieldAlert, GraduationCap, Stethoscope];

  return (
    <>
      <div className="min-h-screen relative text-white overflow-x-hidden">
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
          className="fixed top-14 md:top-6 left-3 md:left-12 z-40"
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
            <div className="relative px-2.5 md:px-8 py-2 md:py-4 rounded-full bg-gradient-to-r from-black/60 via-black/50 to-black/60 backdrop-blur-xl border-2 border-transparent"
                 style={{
                   backgroundImage: 'linear-gradient(black, black), linear-gradient(90deg, transparent, #FF6B5A, transparent)',
                   backgroundOrigin: 'border-box',
                   backgroundClip: 'padding-box, border-box'
                 }}>

              {/* Sparkle particles - hidden on mobile */}
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: -20,
                  y: -20
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                className="hidden md:block absolute -top-1 left-8"
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
                className="hidden md:block absolute -top-1 right-8"
              >
                <Sparkles className="w-3 h-3 text-[#FF6B5A]" />
              </motion.div>

              {/* Circuit-style corner decorations - hidden on mobile */}
              <div className="hidden md:block absolute top-2 left-3 w-2 h-2 border-t-2 border-l-2 border-[#FF6B5A]/40" />
              <div className="hidden md:block absolute top-2 right-3 w-2 h-2 border-t-2 border-r-2 border-[#FF6B5A]/40" />
              <div className="hidden md:block absolute bottom-2 left-3 w-2 h-2 border-b-2 border-l-2 border-[#FF6B5A]/40" />
              <div className="hidden md:block absolute bottom-2 right-3 w-2 h-2 border-b-2 border-r-2 border-[#FF6B5A]/40" />

              <div className="flex items-center gap-1 md:gap-2">
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
                  className="w-px h-3 md:h-6 bg-gradient-to-b from-transparent via-[#FF6B5A]/50 to-transparent flex-shrink-0"
                />

                {/* Text with gradient */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400 text-[7px] sm:text-[9px] md:text-sm font-semibold tracking-wide">
                  {t.badge.text}
                </span>

                {/* Vertical divider */}
                <motion.div
                  animate={{ scaleY: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="w-px h-3 md:h-6 bg-gradient-to-b from-transparent via-[#FF6B5A]/50 to-transparent flex-shrink-0"
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
                  <span className="relative z-10 text-black text-[7px] sm:text-[9px] md:text-xs font-black tracking-wider">
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

        {/* Navigation Bar - Fixed at top */}
        <nav className="fixed top-3 md:top-6 right-3 md:right-8 z-50 flex items-center gap-1.5 md:gap-3">
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 px-2 py-1 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full">
            <Link href="/problem-solution" className="px-4 py-2 text-sm text-white/70 hover:text-[#FF6B5A] transition-colors">
              {t.nav.problem}
            </Link>
            <Link href="/team" className="px-4 py-2 text-sm text-white/70 hover:text-[#FF6B5A] transition-colors flex items-center gap-1">
              <Users className="w-4 h-4" />
              {t.nav.team}
            </Link>
            <Link href="/roadmap" className="px-4 py-2 text-sm text-white/70 hover:text-[#FF6B5A] transition-colors flex items-center gap-1">
              <Map className="w-4 h-4" />
              {t.nav.roadmap}
            </Link>
          </div>

          {/* Language Switcher */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="px-2.5 md:px-6 py-1.5 md:py-3 bg-white/5 border border-white/10 hover:border-[#FF6B5A] backdrop-blur-xl transition-all duration-300 flex items-center gap-1 md:gap-2 group rounded-full"
          >
            <Languages className="w-3 h-3 md:w-4 md:h-4 text-[#FF6B5A]" />
            <span className="font-medium text-xs md:text-base">{language.toUpperCase()}</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-12 right-3 z-50 md:hidden"
          >
            <div className="bg-black/90 border border-white/10 backdrop-blur-xl rounded-2xl p-4 min-w-[200px]">
              <Link
                href="/problem-solution"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-white/70 hover:text-[#FF6B5A] transition-colors border-b border-white/10"
              >
                {t.nav.problem}
              </Link>
              <Link
                href="/team"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-3 text-white/70 hover:text-[#FF6B5A] transition-colors border-b border-white/10"
              >
                <Users className="w-4 h-4" />
                {t.nav.team}
              </Link>
              <Link
                href="/roadmap"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-3 text-white/70 hover:text-[#FF6B5A] transition-colors"
              >
                <Map className="w-4 h-4" />
                {t.nav.roadmap}
              </Link>
            </div>
          </motion.div>
        )}

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

        {/* What is YAGO + What YAGO Can Do - Creative Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="py-16 md:py-32 px-4 md:px-6"
          style={{ willChange: 'opacity, transform' }}
        >
          <div className="max-w-7xl mx-auto">
            {/* What is YAGO Section */}
            <div className="mb-16 md:mb-32">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-4xl sm:text-5xl md:text-8xl font-black mb-4 md:mb-6">
                  {t.whatIsYago.title} <span className="text-[#FF6B5A]">{t.whatIsYago.titleHighlight}</span>
                </h2>
                <p className="text-lg md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
                  {t.whatIsYago.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                {t.whatIsYago.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group"
                  >
                    <div className="p-4 md:p-6 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl hover:border-[#FF6B5A]/50 active:border-[#FF6B5A]/50 transition-all duration-300 h-full flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-[#FF6B5A]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-[#FF6B5A]" />
                      </div>
                      <span className="text-xs sm:text-sm md:text-base font-medium text-white/90">{item}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* What YAGO Can Do Section */}
            <div>
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-4xl sm:text-5xl md:text-8xl font-black mb-4 md:mb-6">
                  {t.yagoCanDo.title} <span className="text-[#FF6B5A]">{t.yagoCanDo.titleHighlight}</span>
                </h2>
                <p className="text-lg md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
                  {t.yagoCanDo.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                {t.yagoCanDo.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B5A]/20 to-orange-500/10 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-4 md:p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl md:rounded-2xl hover:border-[#FF6B5A]/50 active:border-[#FF6B5A]/50 transition-all duration-300 h-full">
                      <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-[#FF6B5A] to-orange-500 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 shadow-lg shadow-[#FF6B5A]/20">
                        <span className="text-lg md:text-2xl font-black text-black">0{i + 1}</span>
                      </div>
                      <p className="text-xs sm:text-sm md:text-lg font-semibold text-white leading-tight">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-10 md:mt-16 text-center"
              >
                <p className="text-xl md:text-3xl font-bold text-white mb-2">
                  {language === 'en' ? (
                    <>And <span className="text-[#FF6B5A]">thousands</span> more tasks...</>
                  ) : (
                    <>Va yana <span className="text-[#FF6B5A]">minglab</span> vazifalar...</>
                  )}
                </p>
                <p className="text-gray-400 text-sm md:text-lg">
                  {language === 'en' ? 'Just ask. YAGO handles the rest.' : 'Faqat so\'rang. Qolganini YAGO hal qiladi.'}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* How It Works - Luxury Numbers */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="py-16 md:py-32 px-4 md:px-6 bg-[#FF6B5A]"
          style={{ willChange: 'opacity, transform' }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-black mb-12 md:mb-24 text-black">
              {t.howItWorks.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
              {t.howItWorks.steps.map((step, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="luxury-number text-[6rem] sm:text-[8rem] md:text-[12rem] font-black leading-none mb-2 md:mb-4 relative">
                    <span className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/5 bg-clip-text text-transparent blur-sm">
                      0{i + 1}
                    </span>
                    <span className="relative bg-gradient-to-br from-black/30 to-black/10 bg-clip-text text-transparent">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-black">{step.title}</h3>
                  <p className="text-base md:text-xl text-black/70 font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>


        {/* Features Grid - Minimal Cards */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="py-16 md:py-32 px-4 md:px-6 bg-white/5"
          style={{ willChange: 'opacity, transform' }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-8xl font-black mb-4 md:mb-6">
                {t.features.title.split(' ').slice(0, -2).join(' ')} <span className="text-[#FF6B5A]">{t.features.title.split(' ').slice(-2).join(' ')}</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6">
              {t.features.items.map((feature, i) => {
                const Icon = featureIcons[i];
                return (
                  <div
                    key={i}
                    className="p-4 md:p-6 border border-white/10 hover:border-[#FF6B5A] active:border-[#FF6B5A] transition-all duration-300 group rounded-xl md:rounded-none"
                  >
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#FF6B5A] mb-3 md:mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <h4 className="font-bold mb-1 md:mb-2 text-xs md:text-sm">{feature.title}</h4>
                    <p className="text-gray-500 text-[10px] md:text-xs font-light leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* AI500 Competition Sections - Problem & Solution, Tech Approach */}
        <ProblemSolution language={language} />
        <TechApproach language={language} />
        <Partners language={language} />

        {/* Premium NFT - Bold CTA */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="py-16 md:py-32 px-4 md:px-6"
          style={{ willChange: 'opacity, transform' }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <Award className="w-16 h-16 md:w-24 md:h-24 text-[#FF6B5A] mx-auto mb-8 md:mb-12" />

              <h2 className="text-4xl sm:text-5xl md:text-9xl font-black mb-6 md:mb-8 leading-none">
                {t.premium.title1}<br />
                <span className="text-[#FF6B5A]">{t.premium.title2}</span><br />
                {t.premium.title3}
              </h2>

              <p className="text-lg md:text-2xl text-gray-400 font-light max-w-3xl mx-auto mb-10 md:mb-16 px-2">
                {t.premium.subtitle}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto mb-10 md:mb-16">
                {[t.premium.benefits.slice(0, 4), t.premium.benefits.slice(4)].map((col, i) => (
                  <div key={i} className="text-left space-y-3 md:space-y-4">
                    {col.map((item, j) => (
                      <p key={j} className="flex items-center gap-3 text-sm md:text-lg">
                        <Star className="w-4 h-4 md:w-5 md:h-5 text-[#FF6B5A] flex-shrink-0" />
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              <motion.a
                href="https://march-practice-outlets-magnificent.trycloudflare.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,107,90,0.6)" }}
                className="relative px-12 md:px-16 py-5 md:py-6 bg-gradient-to-r from-[#FF6B5A] to-[#FF8A7A] hover:from-[#FF8A7A] hover:to-[#FF6B5A] text-black text-lg md:text-xl font-bold transition-all duration-500 inline-flex items-center gap-3 md:gap-4 overflow-hidden group cursor-pointer touch-manipulation"
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
              </motion.a>

              {/* Telegram Fallback Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 text-center"
              >
                <p className="text-gray-400 mb-4">
                  {language === 'en' ? "Can't access? Request demo via Telegram:" : "Kirish imkoni yo'qmi? Telegram orqali demo so'rang:"}
                </p>
                <a
                  href="https://T.me/officialyago"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#FF6B5A]/30 hover:border-[#FF6B5A] text-white hover:bg-[#FF6B5A]/10 transition-all duration-300 rounded-sm group"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.233.171.326.016.093.036.306.02.472z"/>
                  </svg>
                  <span className="font-medium">@officialyago</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* FAQ - Clean List */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="py-16 md:py-32 px-4 md:px-6 border-t border-white/10"
          style={{ willChange: 'opacity, transform' }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-black mb-10 md:mb-20">
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
        <footer className="py-10 md:py-16 px-4 md:px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-8 md:gap-0 md:flex-row justify-between items-center">
              {/* Logo & Tagline */}
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">YAGO</div>
                <p className="text-gray-600 text-xs md:text-sm">{t.footer.tagline}</p>
              </div>

              {/* Footer Navigation */}
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                <Link href="/problem-solution" className="text-gray-400 hover:text-[#FF6B5A] active:text-[#FF6B5A] transition-colors text-sm py-2">
                  {t.nav.problem}
                </Link>
                <Link href="/team" className="text-gray-400 hover:text-[#FF6B5A] active:text-[#FF6B5A] transition-colors text-sm py-2">
                  {t.nav.team}
                </Link>
                <Link href="/roadmap" className="text-gray-400 hover:text-[#FF6B5A] active:text-[#FF6B5A] transition-colors text-sm py-2">
                  {t.nav.roadmap}
                </Link>
                <a
                  href="https://www.linkedin.com/company/yagoconcierge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-[#FF6B5A] active:border-[#FF6B5A] text-white hover:text-[#FF6B5A] transition-all duration-300 group rounded-full"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span className="font-medium text-sm">LinkedIn</span>
                </a>
              </div>

              {/* Copyright & Powered by */}
              <div className="text-gray-600 text-sm text-center md:text-right">
                <div className="flex flex-col gap-2">
                  <div className="text-xs md:text-sm">© 2025 YAGO Concierge</div>
                  <a
                    href="https://natex.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center md:justify-end gap-2 text-gray-500 hover:text-[#FF6B5A] transition-all duration-300 group py-2"
                  >
                    <span className="text-xs">Powered by</span>
                    <span className="font-semibold bg-gradient-to-r from-[#FF6B5A] to-[#FF8A7A] bg-clip-text text-transparent group-hover:from-[#FF8A7A] group-hover:to-[#FF6B5A] transition-all duration-500">
                      Natex Labs
                    </span>
                    <span className="text-xs">×</span>
                    <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-500">
                      AI
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />

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
