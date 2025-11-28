'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft, Github, Linkedin, Users, Star, Sparkles,
  Brain, Rocket, Shield, Code2, Zap, Target,
  Languages, Crown, Building2, Gem, ArrowUpRight, Menu, X
} from 'lucide-react';

type Language = 'en' | 'uz';

const translations = {
  en: {
    back: "Back",
    badge: "THE VISIONARIES",
    title: "MEET THE",
    titleHighlight: "TEAM",
    subtitle: "Exceptional leadership backed by Uzbekistan's premier venture studio",

    founderLabel: "FOUNDER & VISIONARY",
    partnerLabel: "INCUBATION & ACCELERATION PARTNER",
    partnerDesc: "Natex Labs is Uzbekistan's leading venture studio, providing world-class incubation, technical infrastructure, and strategic guidance to transform YAGO into a market-defining company.",

    whyTeamTitle: "WHY",
    whyTeamHighlight: "US?",
    whyTeamSubtitle: "What makes YAGO different",

    whyTeamItems: [
      {
        icon: Brain,
        title: "AI-First Approach",
        description: "Built from the ground up with AI at the core. Not an afterthought — the foundation of everything we do."
      },
      {
        icon: Rocket,
        title: "Natex Labs Backing",
        description: "Backed by Uzbekistan's premier venture studio with proven track record in building scalable tech companies."
      },
      {
        icon: Shield,
        title: "Production-Ready",
        description: "We don't build demos. Real systems handling real users, real transactions, real business requirements."
      },
      {
        icon: Code2,
        title: "World-Class Tech Stack",
        description: "NestJS, PostgreSQL, Redis, Next.js 14, OpenAI GPT-4, Claude — enterprise-grade from day one."
      },
      {
        icon: Target,
        title: "Local Market Experts",
        description: "We understand Uzbekistan deeply. The culture, language, and pain points. Built for this market."
      },
      {
        icon: Zap,
        title: "Speed of Execution",
        description: "From idea to production in weeks. Agile methodology with continuous deployment and iteration."
      }
    ],

    skills: "Expertise",
    focus: "Focus Areas",

    cta: {
      title: "Partner with YAGO",
      description: "Interested in collaboration, investment, or partnership opportunities? Let's build the future together.",
      button: "Get in Touch"
    },

    footer: {
      home: "Home",
      roadmap: "Roadmap",
      copyright: "© 2025 YAGO Concierge. All rights reserved."
    }
  },
  uz: {
    back: "Orqaga",
    badge: "VIZIONERLAR",
    title: "JAMOA BILAN",
    titleHighlight: "TANISHING",
    subtitle: "O'zbekistonning yetakchi venchur studiyasi tomonidan qo'llab-quvvatlanadigan ajoyib rahbariyat",

    founderLabel: "ASOSCHISI VA VIZIONER",
    partnerLabel: "INKUBATSIYA VA AKSELERATSIYA HAMKORI",
    partnerDesc: "Natex Labs O'zbekistonning yetakchi venchur studiyasi bo'lib, YAGO ni bozorni belgilaydigan kompaniyaga aylantirish uchun jahon darajasidagi inkubatsiya, texnik infratuzilma va strategik yo'l-yo'riq taqdim etadi.",

    whyTeamTitle: "NEGA",
    whyTeamHighlight: "BIZ?",
    whyTeamSubtitle: "YAGO ni nima ajratib turadi",

    whyTeamItems: [
      {
        icon: Brain,
        title: "AI-Birinchi Yondashuv",
        description: "Asosida AI bilan noldan qurilgan. Keyinchalik qo'shilgan emas — biz qiladigan hamma narsaning poydevori."
      },
      {
        icon: Rocket,
        title: "Natex Labs Qo'llab-quvvatlashi",
        description: "Kengaytiriladigan texnologik kompaniyalarni qurishda isbotlangan tajribaga ega O'zbekistonning yetakchi venchur studiyasi tomonidan qo'llab-quvvatlanadi."
      },
      {
        icon: Shield,
        title: "Productionga Tayyor",
        description: "Biz demo qurmamiz. Haqiqiy foydalanuvchilar, haqiqiy tranzaksiyalar, haqiqiy biznes talablarini boshqaradigan haqiqiy tizimlar."
      },
      {
        icon: Code2,
        title: "Jahon Darajasidagi Tech Stack",
        description: "NestJS, PostgreSQL, Redis, Next.js 14, OpenAI GPT-4, Claude — birinchi kundan korxona darajasida."
      },
      {
        icon: Target,
        title: "Mahalliy Bozor Ekspertlari",
        description: "Biz O'zbekistonni chuqur tushunamiz. Madaniyat, til va og'riq nuqtalari. Ushbu bozor uchun qurilgan."
      },
      {
        icon: Zap,
        title: "Ijro Tezligi",
        description: "G'oyadan productionga haftalarda. Doimiy deployment va iteratsiya bilan Agile metodologiyasi."
      }
    ],

    skills: "Ekspertiza",
    focus: "Fokus Sohalari",

    cta: {
      title: "YAGO bilan Hamkorlik",
      description: "Hamkorlik, investitsiya yoki sheriklik imkoniyatlariga qiziqasizmi? Kelajakni birga quraylik.",
      button: "Bog'lanish"
    },

    footer: {
      home: "Bosh sahifa",
      roadmap: "Roadmap",
      copyright: "© 2025 YAGO Concierge. Barcha huquqlar himoyalangan."
    }
  }
};

const founder = {
  name: "Javohirbek Buriboev",
  role: { en: "Founder & CEO", uz: "Asoschisi va CEO" },
  bio: {
    en: "Visionary entrepreneur with a passion for transforming how people experience premium services. Leading YAGO's mission to bring Dubai & London-level concierge to Uzbekistan.",
    uz: "Odamlar premium xizmatlarni qanday his qilishini o'zgartirishga ishtiyoqli vizioner tadbirkor. YAGO ning Dubay va London darajasidagi konsyerjni O'zbekistonga olib kelish missiyasiga rahbarlik qilmoqda."
  },
  skills: {
    en: ["Strategic Vision", "Business Development", "Product Leadership", "Team Building"],
    uz: ["Strategik Vizyon", "Biznes Rivojlantirish", "Mahsulot Rahbariyati", "Jamoa Qurish"]
  },
  focus: {
    en: ["AI Innovation", "Customer Experience", "Market Expansion", "Partnership Development"],
    uz: ["AI Innovatsiya", "Mijoz Tajribasi", "Bozorni Kengaytirish", "Hamkorlik Rivojlantirish"]
  },
  image: "/team/CEO.png",
  linkedin: "https://linkedin.com/in/javohirbekburiboev",
  color: "from-[#FF6B5A] via-orange-500 to-amber-500"
};

const partner = {
  name: "Natex Labs",
  role: { en: "Venture Studio", uz: "Venchur Studiya" },
  tagline: { en: "Incubation & Acceleration Partner", uz: "Inkubatsiya va Akseleratsiya Hamkori" },
  description: {
    en: "Uzbekistan's premier venture studio building the next generation of technology companies. Providing full-stack support from ideation to scale.",
    uz: "O'zbekistonning yetakchi venchur studiyasi texnologik kompaniyalarning keyingi avlodini qurmoqda. G'oyadan kengaytiruvgacha to'liq qo'llab-quvvatlash."
  },
  capabilities: {
    en: ["Technical Infrastructure", "Product Development", "Strategic Advisory", "Funding Support", "Market Access", "Talent Network"],
    uz: ["Texnik Infratuzilma", "Mahsulot Rivojlantirish", "Strategik Maslahat", "Moliyalashtirish Qo'llab-quvvatlash", "Bozorga Kirish", "Talant Tarmog'i"]
  },
  website: "https://natex.io",
  color: "from-blue-500 via-purple-500 to-pink-500"
};

export default function TeamPage() {
  const [language, setLanguage] = useState<Language>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'uz' : 'en');
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0015] to-black" />
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#FF6B5A]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, delay: 5 }}
          className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-4 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-1 md:gap-2 text-white/70 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm md:text-base">{t.back}</span>
          </Link>

          <Link href="/" className="text-xl md:text-2xl font-bold text-[#FF6B5A]">YAGO</Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/problem-solution" className="text-white/70 hover:text-white transition-colors text-sm">
              Problem & Solution
            </Link>
            <Link href="/team" className="text-[#FF6B5A] transition-colors text-sm font-medium">
              Team
            </Link>
            <Link href="/roadmap" className="text-white/70 hover:text-white transition-colors text-sm">
              Roadmap
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="px-4 py-2 bg-white/5 border border-white/10 hover:border-[#FF6B5A] backdrop-blur-xl transition-all duration-300 flex items-center gap-2 rounded-full"
            >
              <Languages className="w-4 h-4 text-[#FF6B5A]" />
              <span className="font-medium text-sm">{language.toUpperCase()}</span>
            </motion.button>
          </div>

          {/* Mobile Nav */}
          <div className="flex md:hidden items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="px-3 py-1.5 bg-white/5 border border-white/10 backdrop-blur-xl flex items-center gap-1.5 rounded-full"
            >
              <Languages className="w-3.5 h-3.5 text-[#FF6B5A]" />
              <span className="font-medium text-xs">{language.toUpperCase()}</span>
            </motion.button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-white/5 border border-white/10 rounded-full"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-4"
          >
            <Link
              href="/problem-solution"
              className="block py-3 text-white/70 hover:text-white transition-colors text-center border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Problem & Solution
            </Link>
            <Link
              href="/team"
              className="block py-3 text-[#FF6B5A] font-medium transition-colors text-center border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/roadmap"
              className="block py-3 text-white/70 hover:text-white transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Roadmap
            </Link>
          </motion.div>
        )}
      </nav>

      <main className="pt-20 md:pt-24 pb-16 md:pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-20"
          >
            <span className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-[#FF6B5A]/20 to-purple-500/20 border border-[#FF6B5A]/30 rounded-full text-[#FF6B5A] text-xs md:text-sm font-medium mb-4 md:mb-6">
              <Gem className="w-3 h-3 md:w-4 md:h-4" />
              {t.badge}
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 md:mb-6">
              {t.title} <span className="text-[#FF6B5A]">{t.titleHighlight}</span>
            </h1>

            <p className="text-base md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto px-2">
              {t.subtitle}
            </p>
          </motion.div>

          {/* Founder Section - Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 md:mb-16"
          >
            <div className="text-center mb-6 md:mb-8">
              <span className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#FF6B5A]/10 border border-[#FF6B5A]/20 rounded-full text-[#FF6B5A] text-[10px] md:text-xs font-bold uppercase tracking-wider">
                <Crown className="w-3 h-3 md:w-4 md:h-4" />
                {t.founderLabel}
              </span>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${founder.color} rounded-2xl md:rounded-3xl opacity-20 blur-xl`} />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-12">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  {/* Avatar */}
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className={`absolute -inset-2 bg-gradient-to-r ${founder.color} rounded-2xl md:rounded-3xl opacity-50 blur-md`}
                    />
                    <div className={`relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gradient-to-br ${founder.color} rounded-2xl md:rounded-3xl flex items-center justify-center overflow-hidden`}>
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-9 h-9 md:w-12 md:h-12 bg-gradient-to-r from-[#FF6B5A] to-orange-500 rounded-lg md:rounded-xl border-4 border-black flex items-center justify-center">
                      <Crown className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-1 md:mb-2">{founder.name}</h2>
                    <p className="text-[#FF6B5A] font-bold text-base md:text-lg mb-3 md:mb-4">{founder.role[language]}</p>
                    <p className="text-gray-400 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">{founder.bio[language]}</p>

                    {/* Skills & Focus */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mb-2 md:mb-3">{t.skills}</p>
                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                          {founder.skills[language].map((skill, i) => (
                            <span
                              key={i}
                              className="px-2 md:px-3 py-1 md:py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] md:text-xs text-gray-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mb-2 md:mb-3">{t.focus}</p>
                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                          {founder.focus[language].map((item, i) => (
                            <span
                              key={i}
                              className="px-2 md:px-3 py-1 md:py-1.5 bg-[#FF6B5A]/10 border border-[#FF6B5A]/20 rounded-lg text-[10px] md:text-xs text-[#FF6B5A]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Social */}
                    {founder.linkedin && (
                      <div className="mt-4 md:mt-6">
                        <a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/50 hover:bg-blue-500/10 active:border-blue-500/50 transition-all text-sm"
                        >
                          <Linkedin className="w-4 h-4 text-blue-400" />
                          <span>LinkedIn</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Partner Section - Natex Labs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20 md:mb-32"
          >
            <div className="text-center mb-6 md:mb-8">
              <span className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3 h-3 md:w-4 md:h-4" />
                {t.partnerLabel}
              </span>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${partner.color} rounded-2xl md:rounded-3xl opacity-20 blur-xl`} />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl border border-purple-500/30 rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-12">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  {/* Logo/Avatar */}
                  <div className="relative">
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(139, 92, 246, 0.3)',
                          '0 0 40px rgba(139, 92, 246, 0.5)',
                          '0 0 20px rgba(139, 92, 246, 0.3)'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className={`relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gradient-to-br ${partner.color} rounded-2xl md:rounded-3xl flex items-center justify-center overflow-hidden p-3 md:p-4`}
                    >
                      <Image
                        src="/team/natex-labs-logo.png"
                        alt="Natex Labs"
                        fill
                        className="object-contain p-3 md:p-4"
                      />
                    </motion.div>
                    <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-9 h-9 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg md:rounded-xl border-4 border-black flex items-center justify-center">
                      <Rocket className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-1 md:mb-2">{partner.name}</h2>
                    <p className="text-purple-400 font-bold text-base md:text-lg mb-1 md:mb-2">{partner.role[language]}</p>
                    <p className="text-purple-300/70 text-xs md:text-sm font-medium mb-3 md:mb-4">{partner.tagline[language]}</p>
                    <p className="text-gray-400 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">{partner.description[language]}</p>

                    {/* Capabilities */}
                    <div className="mb-4 md:mb-6">
                      <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mb-2 md:mb-3">Capabilities</p>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {partner.capabilities[language].map((cap, i) => (
                          <span
                            key={i}
                            className="px-2 md:px-3 py-1 md:py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-lg text-[10px] md:text-xs text-purple-300"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Website Link */}
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 active:from-purple-600 active:to-pink-600 text-white font-bold rounded-xl transition-all group text-sm md:text-base"
                    >
                      <span>Visit Natex Labs</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center text-gray-400 max-w-2xl mx-auto mt-6 md:mt-8 text-sm md:text-base px-2"
            >
              {t.partnerDesc}
            </motion.p>
          </motion.div>

          {/* Why Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-20"
          >
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-4">
                {t.whyTeamTitle} <span className="text-[#FF6B5A]">{t.whyTeamHighlight}</span>
              </h2>
              <p className="text-base md:text-xl text-gray-400">{t.whyTeamSubtitle}</p>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
              {t.whyTeamItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-3 sm:p-5 md:p-8 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl hover:border-[#FF6B5A]/30 active:border-[#FF6B5A]/30 transition-all duration-300 flex flex-col items-center text-center sm:items-start sm:text-left"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-[#FF6B5A]/10 rounded-lg md:rounded-xl flex items-center justify-center mb-2 sm:mb-4 md:mb-6">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 text-[#FF6B5A]" />
                    </div>
                    <h3 className="text-[10px] sm:text-base md:text-xl font-bold text-white mb-1 sm:mb-2 md:mb-3 leading-tight">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-[10px] sm:text-xs md:text-base hidden sm:block">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="p-6 md:p-12 bg-gradient-to-br from-[#FF6B5A]/10 to-purple-500/10 border border-[#FF6B5A]/20 rounded-2xl md:rounded-3xl">
              <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-[#FF6B5A] mx-auto mb-4 md:mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{t.cta.title}</h3>
              <p className="text-gray-400 mb-6 md:mb-8 max-w-lg mx-auto text-sm md:text-base">{t.cta.description}</p>
              <a
                href="https://t.me/officialyago"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-[#FF6B5A] hover:bg-[#FF8A7A] active:bg-[#FF8A7A] text-black font-bold rounded-xl transition-all text-sm md:text-base"
              >
                {t.cta.button}
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.233.171.326.016.093.036.306.02.472z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 md:py-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-xs md:text-sm text-center md:text-left">{t.footer.copyright}</div>
          <div className="flex gap-6">
            <Link href="/" className="text-gray-500 hover:text-white active:text-white transition-colors text-sm py-2">
              {t.footer.home}
            </Link>
            <Link href="/roadmap" className="text-gray-500 hover:text-white active:text-white transition-colors text-sm py-2">
              {t.footer.roadmap}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
