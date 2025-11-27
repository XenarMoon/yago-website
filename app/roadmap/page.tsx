'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Lightbulb, Cpu, Rocket, Users, Globe, Building2,
  ArrowLeft, CheckCircle2, Circle, Clock, Star, Sparkles,
  Target, TrendingUp, Zap, Languages, Menu, X
} from 'lucide-react';
import Link from 'next/link';

type Language = 'en' | 'uz';

const translations = {
  en: {
    back: "Back",
    badge: "DEVELOPMENT ROADMAP",
    title: "ROADMAP",
    subtitle: "YAGO project development stages and plans",
    currentStage: "Current Stage",
    currentStageName: "MVP / Private Alpha",
    focusTitle: "CURRENT",
    focusHighlight: "FOCUS",
    focusSubtitle: "Currently working on",
    ai500Title: "Participating in AI500 Competition!",
    ai500Description: "YAGO is participating in Uzbekistan's largest AI startup competition. Support us and be part of the AI revolution!",
    viewTeam: "View Team",
    telegram: "Telegram",
    home: "Home",
    team: "Team",
    copyright: "© 2025 YAGO Concierge. All rights reserved.",
    status: {
      completed: "Completed",
      current: "Current",
      upcoming: "Planned"
    },
    milestoneStatus: {
      active: "Active",
      progress: "In Progress",
      planned: "Planned"
    },
    phases: [
      {
        title: "Idea",
        titleLocal: "Idea",
        description: "Problem identification and solution concept development",
        features: [
          "Market research",
          "Problem validation",
          "Solution concept",
          "Initial business model"
        ],
        timeline: "2024 Q3"
      },
      {
        title: "Prototype",
        titleLocal: "Prototype",
        description: "MVP prototype to test core functionality",
        features: [
          "AI agent prototype",
          "Telegram bot integration",
          "Basic conversation flow",
          "Initial UI/UX"
        ],
        timeline: "2024 Q4"
      },
      {
        title: "MVP",
        titleLocal: "MVP",
        description: "Minimum viable product - with core features",
        features: [
          "Full AI chat system",
          "Agent dashboard",
          "Real-time WebSocket",
          "Booking API"
        ],
        timeline: "2025 Q1"
      },
      {
        title: "Private Alpha",
        titleLocal: "Private Alpha",
        description: "Testing with limited users",
        features: [
          "Alpha users",
          "Feedback collection",
          "Bug fixes",
          "Feature improvements",
          "AI500 competition"
        ],
        timeline: "2025 Q1-Q2"
      },
      {
        title: "Public Beta",
        titleLocal: "Public Beta",
        description: "Open beta version for wide audience",
        features: [
          "Public registration",
          "Extended services",
          "Premium subscription",
          "Mobile apps"
        ],
        timeline: "2025 Q2-Q3"
      },
      {
        title: "Commercial Launch",
        titleLocal: "Commercial Launch",
        description: "Full commercial version and monetization",
        features: [
          "Full monetization",
          "Enterprise packages",
          "API partner program",
          "International expansion"
        ],
        timeline: "2025 Q4"
      }
    ],
    milestones: [
      { title: "AI500 competition participation", status: "active" },
      { title: "Alpha user testing", status: "active" },
      { title: "Agent dashboard development", status: "active" },
      { title: "Restaurant integrations", status: "progress" },
      { title: "Taxi service integration", status: "progress" },
      { title: "Mobile app development", status: "planned" }
    ]
  },
  uz: {
    back: "Orqaga",
    badge: "RIVOJLANISH YO'L XARITASI",
    title: "ROADMAP",
    subtitle: "YAGO loyihasining rivojlanish bosqichlari va rejalari",
    currentStage: "Hozirgi bosqich",
    currentStageName: "MVP / Private Alpha",
    focusTitle: "HOZIRGI",
    focusHighlight: "FOKUS",
    focusSubtitle: "Ayni paytda ustida ishlamoqdamiz",
    ai500Title: "AI500 Tanlovida Ishtirok Etamiz!",
    ai500Description: "YAGO O'zbekistondagi eng yirik AI startuplar tanlovida qatnashmoqda. Bizni qo'llab-quvvatlang va AI inqilobining bir qismi bo'ling!",
    viewTeam: "Jamoani ko'rish",
    telegram: "Telegram",
    home: "Bosh sahifa",
    team: "Jamoa",
    copyright: "© 2025 YAGO Concierge. Barcha huquqlar himoyalangan.",
    status: {
      completed: "Tugallangan",
      current: "Hozirgi",
      upcoming: "Rejalashtirilgan"
    },
    milestoneStatus: {
      active: "Faol",
      progress: "Jarayonda",
      planned: "Rejalashtirilgan"
    },
    phases: [
      {
        title: "Idea",
        titleLocal: "G'oya",
        description: "Muammoni aniqlash va yechim kontseptsiyasini ishlab chiqish",
        features: [
          "Bozor tadqiqoti",
          "Muammo validatsiyasi",
          "Yechim kontseptsiyasi",
          "Dastlabki biznes model"
        ],
        timeline: "2024 Q3"
      },
      {
        title: "Prototype",
        titleLocal: "Prototip",
        description: "Asosiy funksionallikni sinovdan o'tkazish uchun MVP prototip",
        features: [
          "AI agent prototip",
          "Telegram bot integratsiyasi",
          "Asosiy suhbat oqimi",
          "Dastlabki UI/UX"
        ],
        timeline: "2024 Q4"
      },
      {
        title: "MVP",
        titleLocal: "MVP",
        description: "Minimal hayotiy mahsulot - asosiy funksiyalar bilan",
        features: [
          "To'liq AI suhbat tizimi",
          "Agent dashboard",
          "Real-time WebSocket",
          "Bron qilish API"
        ],
        timeline: "2025 Q1"
      },
      {
        title: "Private Alpha",
        titleLocal: "Private Alpha",
        description: "Cheklangan foydalanuvchilar bilan sinovdan o'tkazish",
        features: [
          "Alpha foydalanuvchilar",
          "Feedback yig'ish",
          "Xatoliklarni tuzatish",
          "Funksiyalarni yaxshilash",
          "AI500 tanlov"
        ],
        timeline: "2025 Q1-Q2"
      },
      {
        title: "Public Beta",
        titleLocal: "Ommaviy Beta",
        description: "Keng auditoriya uchun ochiq beta versiya",
        features: [
          "Ommaviy ro'yxatdan o'tish",
          "Kengaytirilgan xizmatlar",
          "Premium obuna",
          "Mobil ilovalar"
        ],
        timeline: "2025 Q2-Q3"
      },
      {
        title: "Commercial Launch",
        titleLocal: "Tijorat ishga tushirish",
        description: "To'liq tijorat versiyasi va monetizatsiya",
        features: [
          "To'liq monetizatsiya",
          "Enterprise paketlar",
          "API hamkorlik dasturi",
          "Xalqaro kengayish"
        ],
        timeline: "2025 Q4"
      }
    ],
    milestones: [
      { title: "AI500 tanlovida ishtirok", status: "active" },
      { title: "Alpha foydalanuvchilar testlari", status: "active" },
      { title: "Agent dashboard rivojlantirish", status: "active" },
      { title: "Restoran integratsiyalari", status: "progress" },
      { title: "Taksi xizmatlari integratsiyasi", status: "progress" },
      { title: "Mobil ilova rivojlantirish", status: "planned" }
    ]
  }
};

const phaseIcons = [Lightbulb, Cpu, Rocket, Users, Globe, Building2];
const phaseStatuses = ['completed', 'completed', 'completed', 'current', 'upcoming', 'upcoming'];
const milestoneIcons = [Star, Users, Cpu, Target, TrendingUp, Zap];

export default function RoadmapPage() {
  const [language, setLanguage] = useState<Language>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'uz' : 'en');
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-4 h-4 md:w-6 md:h-6 text-green-400" />;
      case 'current':
        return <Clock className="w-4 h-4 md:w-6 md:h-6 text-[#FF6B5A] animate-pulse" />;
      default:
        return <Circle className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500/30 bg-green-500/5';
      case 'current':
        return 'border-[#FF6B5A]/50 bg-[#FF6B5A]/10';
      default:
        return 'border-white/10 bg-white/5';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed':
        return t.status.completed;
      case 'current':
        return t.status.current;
      default:
        return t.status.upcoming;
    }
  };

  const getMilestoneStatusLabel = (status: string) => {
    switch (status) {
      case 'active':
        return t.milestoneStatus.active;
      case 'progress':
        return t.milestoneStatus.progress;
      default:
        return t.milestoneStatus.planned;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0015] to-black" />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/3 left-1/3 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[#FF6B5A]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 3 }}
          className="absolute bottom-1/3 right-1/3 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-blue-500/10 rounded-full blur-3xl"
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
            <Link href="/team" className="text-white/70 hover:text-white transition-colors">
              {t.team}
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="px-3 py-2 bg-white/5 border border-white/10 hover:border-[#FF6B5A] backdrop-blur-xl transition-all duration-300 flex items-center gap-2 group rounded-full"
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
              href="/team"
              className="block py-3 text-white/70 hover:text-white transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.team}
            </Link>
          </motion.div>
        )}
      </nav>

      <main className="pt-20 md:pt-24 pb-16 md:pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-20"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#FF6B5A]/10 border border-[#FF6B5A]/20 rounded-full text-[#FF6B5A] text-xs md:text-sm font-medium mb-4 md:mb-6"
            >
              <Rocket className="w-3 h-3 md:w-4 md:h-4" />
              {t.badge}
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 md:mb-6">
              <span className="text-[#FF6B5A]">{t.title}</span>
            </h1>

            <p className="text-base md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto mb-6 md:mb-8 px-2">
              {t.subtitle}
            </p>

            {/* Current Stage Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-gradient-to-r from-[#FF6B5A]/20 to-orange-500/20 border-2 border-[#FF6B5A]/50 rounded-xl md:rounded-2xl"
            >
              <div className="relative">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-[#FF6B5A] rounded-full animate-ping absolute" />
                <div className="w-3 h-3 md:w-4 md:h-4 bg-[#FF6B5A] rounded-full relative" />
              </div>
              <div className="text-left">
                <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider">{t.currentStage}</p>
                <p className="text-sm md:text-lg font-bold text-white">{t.currentStageName}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Timeline - Mobile Version */}
          <div className="relative mb-16 md:mb-32 md:hidden">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-green-500 via-[#FF6B5A] to-gray-800" />

            {/* Timeline Items */}
            {t.phases.map((phase, index) => {
              const Icon = phaseIcons[index];
              const status = phaseStatuses[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start mb-6"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 transform -translate-x-1/2 z-10">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 ${
                      status === 'completed'
                        ? 'bg-green-500/20 border-green-500'
                        : status === 'current'
                          ? 'bg-[#FF6B5A]/20 border-[#FF6B5A]'
                          : 'bg-gray-800/50 border-gray-700'
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        status === 'completed'
                          ? 'text-green-400'
                          : status === 'current'
                            ? 'text-[#FF6B5A]'
                            : 'text-gray-500'
                      }`} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-14 flex-1">
                    <div className={`p-4 rounded-xl border ${getStatusColor(status)} backdrop-blur-sm`}>
                      {/* Status Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                          status === 'completed'
                            ? 'bg-green-500/20 text-green-400'
                            : status === 'current'
                              ? 'bg-[#FF6B5A]/20 text-[#FF6B5A]'
                              : 'bg-gray-700/50 text-gray-400'
                        }`}>
                          {getStatusLabel(status)}
                        </span>
                        <span className="text-[10px] text-gray-500">{phase.timeline}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-0.5">{phase.title}</h3>
                      <p className="text-[#FF6B5A] text-xs mb-2">{phase.titleLocal}</p>
                      <p className="text-gray-400 text-xs mb-3">{phase.description}</p>

                      {/* Features */}
                      <div className="space-y-1.5">
                        {phase.features.slice(0, 3).map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs">
                            {getStatusIcon(status)}
                            <span className={status === 'completed' ? 'text-gray-300' : 'text-gray-400'}>
                              {feature}
                            </span>
                          </div>
                        ))}
                        {phase.features.length > 3 && (
                          <p className="text-[10px] text-gray-500 pl-6">+{phase.features.length - 3} more</p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Timeline - Desktop Version */}
          <div className="relative mb-32 hidden md:block">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-500 via-[#FF6B5A] to-gray-800" />

            {/* Timeline Items */}
            {t.phases.map((phase, index) => {
              const Icon = phaseIcons[index];
              const status = phaseStatuses[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border-2 ${
                      status === 'completed'
                        ? 'bg-green-500/20 border-green-500'
                        : status === 'current'
                          ? 'bg-[#FF6B5A]/20 border-[#FF6B5A]'
                          : 'bg-gray-800/50 border-gray-700'
                    }`}>
                      <Icon className={`w-8 h-8 ${
                        status === 'completed'
                          ? 'text-green-400'
                          : status === 'current'
                            ? 'text-[#FF6B5A]'
                            : 'text-gray-500'
                      }`} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-5/12 ${
                    index % 2 === 0 ? 'pr-20' : 'pl-20'
                  }`}>
                    <div className={`p-6 rounded-2xl border ${getStatusColor(status)} backdrop-blur-sm`}>
                      {/* Status Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          status === 'completed'
                            ? 'bg-green-500/20 text-green-400'
                            : status === 'current'
                              ? 'bg-[#FF6B5A]/20 text-[#FF6B5A]'
                              : 'bg-gray-700/50 text-gray-400'
                        }`}>
                          {getStatusLabel(status)}
                        </span>
                        <span className="text-sm text-gray-500">{phase.timeline}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-1">{phase.title}</h3>
                      <p className="text-[#FF6B5A] text-sm mb-3">{phase.titleLocal}</p>
                      <p className="text-gray-400 text-sm mb-4">{phase.description}</p>

                      {/* Features */}
                      <div className="space-y-2">
                        {phase.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            {getStatusIcon(status)}
                            <span className={status === 'completed' ? 'text-gray-300' : 'text-gray-400'}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Current Focus Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-20"
          >
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-2 md:mb-4">
                {t.focusTitle} <span className="text-[#FF6B5A]">{t.focusHighlight}</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base">{t.focusSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {t.milestones.map((milestone, index) => {
                const Icon = milestoneIcons[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`p-4 md:p-5 rounded-xl border flex items-center gap-3 md:gap-4 ${
                      milestone.status === 'active'
                        ? 'bg-[#FF6B5A]/10 border-[#FF6B5A]/30'
                        : milestone.status === 'progress'
                          ? 'bg-yellow-500/10 border-yellow-500/30'
                          : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 ${
                      milestone.status === 'active'
                        ? 'bg-[#FF6B5A]/20'
                        : milestone.status === 'progress'
                          ? 'bg-yellow-500/20'
                          : 'bg-white/10'
                    }`}>
                      <Icon className={`w-5 h-5 md:w-6 md:h-6 ${
                        milestone.status === 'active'
                          ? 'text-[#FF6B5A]'
                          : milestone.status === 'progress'
                            ? 'text-yellow-400'
                            : 'text-gray-400'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-white text-sm md:text-base truncate">{milestone.title}</p>
                      <p className={`text-[10px] md:text-xs ${
                        milestone.status === 'active'
                          ? 'text-[#FF6B5A]'
                          : milestone.status === 'progress'
                            ? 'text-yellow-400'
                            : 'text-gray-500'
                      }`}>
                        {getMilestoneStatusLabel(milestone.status)}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* AI500 Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="p-6 md:p-8 lg:p-12 bg-gradient-to-br from-[#FF6B5A]/10 to-purple-500/10 border border-[#FF6B5A]/20 rounded-2xl md:rounded-3xl">
              <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-[#FF6B5A] mx-auto mb-3 md:mb-4" />
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">{t.ai500Title}</h3>
              <p className="text-gray-400 mb-5 md:mb-6 max-w-lg mx-auto text-sm md:text-base">
                {t.ai500Description}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                <Link
                  href="/team"
                  className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-[#FF6B5A] hover:bg-[#FF8A7A] active:bg-[#FF8A7A] text-black font-bold rounded-xl transition-all text-sm md:text-base"
                >
                  {t.viewTeam}
                </Link>
                <a
                  href="https://t.me/officialyago"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 border border-[#FF6B5A]/50 hover:border-[#FF6B5A] active:border-[#FF6B5A] text-white rounded-xl transition-all text-sm md:text-base"
                >
                  {t.telegram}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 md:py-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-xs md:text-sm text-center md:text-left">
            {t.copyright}
          </div>
          <div className="flex gap-6">
            <Link href="/" className="text-gray-500 hover:text-white active:text-white transition-colors text-sm py-2">
              {t.home}
            </Link>
            <Link href="/team" className="text-gray-500 hover:text-white active:text-white transition-colors text-sm py-2">
              {t.team}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
