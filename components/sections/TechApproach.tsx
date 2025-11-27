'use client';

import { motion } from 'framer-motion';
import {
  Brain, MessageSquare, Users, Database, Zap, Server,
  Code2, Workflow, Bot, Sparkles, ArrowRight, CheckCircle2,
  Cpu, Globe, Layers, GitBranch
} from 'lucide-react';

interface TechApproachProps {
  language?: 'en' | 'uz';
}

const translations = {
  en: {
    badge: "TECHNICAL APPROACH",
    title: "HOW WE",
    titleHighlight: "SOLVE IT",
    subtitle: "Our AI-powered architecture delivers Dubai & London-level concierge service",

    approachTitle: "AI + HUMAN HYBRID ARCHITECTURE",
    approachSubtitle: "The best of both worlds for premium service delivery",

    architecture: [
      {
        icon: Bot,
        title: "AI Agent Layer",
        description: "GPT-4 powered conversational AI handles initial requests, understands context, and processes bookings automatically.",
        color: "from-purple-500/20 to-purple-500/5"
      },
      {
        icon: Users,
        title: "Human Agent Layer",
        description: "Complex VIP requests are seamlessly escalated to trained human concierges for white-glove service.",
        color: "from-blue-500/20 to-blue-500/5"
      },
      {
        icon: Database,
        title: "Smart Data Pipeline",
        description: "Real-time data gathering, preference learning, and booking history for personalized experiences.",
        color: "from-green-500/20 to-green-500/5"
      },
      {
        icon: Zap,
        title: "Real-Time WebSockets",
        description: "Instant bidirectional communication between users, AI agents, and human operators.",
        color: "from-orange-500/20 to-orange-500/5"
      }
    ],

    aiCapabilitiesTitle: "AI CAPABILITIES",
    aiCapabilities: [
      {
        title: "Intent Detection",
        titleUz: "Niyatni Aniqlash",
        description: "Understands what users want from natural language — booking, inquiry, complaint, or complex multi-step requests."
      },
      {
        title: "Order Detail Extraction",
        titleUz: "Buyurtma Tafsilotlari",
        description: "Automatically extracts date, time, party size, location preferences, special requirements from conversations."
      },
      {
        title: "Missing Detail Follow-up",
        titleUz: "Qo'shimcha Savollar",
        description: "Intelligently asks for missing information without being repetitive or annoying users."
      },
      {
        title: "Agent Escalation Triggers",
        titleUz: "Agent Eskalatsiyasi",
        description: "Automatically routes complex requests, VIP clients, or sensitive matters to human agents."
      },
      {
        title: "Automated Booking",
        titleUz: "Avtomatik Bron",
        description: "Formats requests and sends to partner venues via API, receiving instant confirmations."
      },
      {
        title: "Context Memory",
        titleUz: "Kontekst Xotirasi",
        description: "Remembers past conversations, preferences, and booking history for personalized service."
      }
    ],

    techStackTitle: "TECH STACK",
    techStack: [
      { name: "Node.js", category: "Backend Runtime", icon: "🟢" },
      { name: "NestJS", category: "Backend Framework", icon: "🔴" },
      { name: "Prisma", category: "ORM", icon: "🔷" },
      { name: "PostgreSQL", category: "Database", icon: "🐘" },
      { name: "Redis", category: "Cache & Queue", icon: "🔴" },
      { name: "Next.js 14", category: "Frontend", icon: "▲" },
      { name: "WebSockets", category: "Real-time", icon: "🔌" },
      { name: "OpenAI GPT-4", category: "AI Engine", icon: "🤖" },
      { name: "Claude", category: "AI Assistant", icon: "🧠" },
      { name: "Telegram Bot API", category: "Integration", icon: "📱" },
      { name: "Docker", category: "Containerization", icon: "🐳" },
      { name: "TypeScript", category: "Language", icon: "📘" }
    ],

    flowTitle: "REQUEST FLOW",
    flowSteps: [
      { step: "01", title: "User Message", desc: "User sends request via Telegram" },
      { step: "02", title: "AI Processing", desc: "Intent detection & detail extraction" },
      { step: "03", title: "Smart Routing", desc: "Auto-handle or escalate to agent" },
      { step: "04", title: "Booking", desc: "API call to partner venue" },
      { step: "05", title: "Confirmation", desc: "Instant confirmation to user" }
    ]
  },
  uz: {
    badge: "TEXNIK YONDASHUV",
    title: "QANDAY",
    titleHighlight: "HAL QILAMIZ",
    subtitle: "AI quvvatidagi arxitekturamiz Dubay va London darajasidagi konsyerj xizmati taqdim etadi",

    approachTitle: "AI + INSON GIBRID ARXITEKTURASI",
    approachSubtitle: "Premium xizmat yetkazish uchun ikkala dunyoning eng yaxshisi",

    architecture: [
      {
        icon: Bot,
        title: "AI Agent Qatlami",
        description: "GPT-4 quvvatidagi suhbat AI dastlabki so'rovlarni qabul qiladi, kontekstni tushunadi va bronlarni avtomatik qayta ishlaydi.",
        color: "from-purple-500/20 to-purple-500/5"
      },
      {
        icon: Users,
        title: "Inson Agent Qatlami",
        description: "Murakkab VIP so'rovlar yuqori darajadagi xizmat uchun o'qitilgan inson konsyerjlariga uzatiladi.",
        color: "from-blue-500/20 to-blue-500/5"
      },
      {
        icon: Database,
        title: "Aqlli Ma'lumotlar Pipeline",
        description: "Real vaqt ma'lumot yig'ish, afzallik o'rganish va shaxsiylashtirilgan tajribalar uchun bron tarixi.",
        color: "from-green-500/20 to-green-500/5"
      },
      {
        icon: Zap,
        title: "Real Vaqt WebSockets",
        description: "Foydalanuvchilar, AI agentlar va inson operatorlari o'rtasida bir zumda ikki tomonlama aloqa.",
        color: "from-orange-500/20 to-orange-500/5"
      }
    ],

    aiCapabilitiesTitle: "AI IMKONIYATLARI",
    aiCapabilities: [
      {
        title: "Intent Detection",
        titleUz: "Niyatni Aniqlash",
        description: "Tabiiy tildan foydalanuvchilar nima xohlashini tushunadi — bron, so'rov, shikoyat yoki murakkab ko'p bosqichli so'rovlar."
      },
      {
        title: "Order Detail Extraction",
        titleUz: "Buyurtma Tafsilotlari",
        description: "Suhbatlardan sana, vaqt, guruh hajmi, joylashuv afzalliklari, maxsus talablarni avtomatik ajratib oladi."
      },
      {
        title: "Missing Detail Follow-up",
        titleUz: "Qo'shimcha Savollar",
        description: "Yetishmayotgan ma'lumotlarni takrorlanmasdan yoki foydalanuvchilarni bezovta qilmasdan aqlli so'raydi."
      },
      {
        title: "Agent Escalation Triggers",
        titleUz: "Agent Eskalatsiyasi",
        description: "Murakkab so'rovlar, VIP mijozlar yoki nozik masalalarni avtomatik ravishda inson agentlariga yo'naltiradi."
      },
      {
        title: "Automated Booking",
        titleUz: "Avtomatik Bron",
        description: "So'rovlarni formatlaydi va API orqali hamkor joylarga yuboradi, bir zumda tasdiqlashlarni oladi."
      },
      {
        title: "Context Memory",
        titleUz: "Kontekst Xotirasi",
        description: "Shaxsiylashtirilgan xizmat uchun oldingi suhbatlar, afzalliklar va bron tarixini eslab qoladi."
      }
    ],

    techStackTitle: "TEXNOLOGIYALAR",
    techStack: [
      { name: "Node.js", category: "Backend Runtime", icon: "🟢" },
      { name: "NestJS", category: "Backend Framework", icon: "🔴" },
      { name: "Prisma", category: "ORM", icon: "🔷" },
      { name: "PostgreSQL", category: "Database", icon: "🐘" },
      { name: "Redis", category: "Cache & Queue", icon: "🔴" },
      { name: "Next.js 14", category: "Frontend", icon: "▲" },
      { name: "WebSockets", category: "Real-time", icon: "🔌" },
      { name: "OpenAI GPT-4", category: "AI Engine", icon: "🤖" },
      { name: "Claude", category: "AI Assistant", icon: "🧠" },
      { name: "Telegram Bot API", category: "Integration", icon: "📱" },
      { name: "Docker", category: "Containerization", icon: "🐳" },
      { name: "TypeScript", category: "Language", icon: "📘" }
    ],

    flowTitle: "SO'ROV OQIMI",
    flowSteps: [
      { step: "01", title: "Foydalanuvchi Xabari", desc: "Foydalanuvchi Telegram orqali so'rov yuboradi" },
      { step: "02", title: "AI Qayta Ishlash", desc: "Niyatni aniqlash va tafsilotlarni ajratish" },
      { step: "03", title: "Aqlli Yo'naltirish", desc: "Avtomatik hal qilish yoki agentga uzatish" },
      { step: "04", title: "Bron", desc: "Hamkor joyga API qo'ng'iroq" },
      { step: "05", title: "Tasdiqlash", desc: "Foydalanuvchiga bir zumda tasdiqlash" }
    ]
  }
};

export default function TechApproach({ language = 'en' }: TechApproachProps) {
  const t = translations[language];

  return (
    <section id="tech-approach" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs md:text-sm font-medium mb-4 md:mb-6">
            <Code2 className="w-3 h-3 md:w-4 md:h-4" />
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6">
            {t.title} <span className="text-[#FF6B5A]">{t.titleHighlight}</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Architecture Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-8 md:mb-12">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-500/10 border border-purple-500/20 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
              <Layers className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">{t.approachTitle}</h3>
              <p className="text-gray-400 text-sm md:text-base">{t.approachSubtitle}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {t.architecture.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative p-5 md:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl hover:border-purple-500/30 active:border-purple-500/30 transition-all duration-300 h-full">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-purple-500/10 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
                      <Icon className="w-5 h-5 md:w-7 md:h-7 text-purple-400" />
                    </div>
                    <h4 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 text-white">{item.title}</h4>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Request Flow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12">{t.flowTitle}</h3>

          {/* Mobile: Vertical Flow */}
          <div className="flex flex-col md:hidden gap-4">
            {t.flowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-black text-[#FF6B5A]/50">{step.step}</span>
                  </div>
                  <div className="flex-1 p-4 bg-white/5 border border-white/10 rounded-xl">
                    <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                    <p className="text-xs text-gray-400">{step.desc}</p>
                  </div>
                </div>
                {index < t.flowSteps.length - 1 && (
                  <div className="ml-7 h-4 w-px bg-[#FF6B5A]/20" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Desktop: Horizontal Flow */}
          <div className="hidden md:flex flex-row items-center justify-between gap-4">
            {t.flowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-1 relative"
              >
                <div className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#FF6B5A]/30 transition-all duration-300">
                  <div className="text-4xl font-black text-[#FF6B5A]/30 mb-2">{step.step}</div>
                  <h4 className="text-lg font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-400">{step.desc}</p>
                </div>
                {index < t.flowSteps.length - 1 && (
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-[#FF6B5A]/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-8 md:mb-12">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FF6B5A]/10 border border-[#FF6B5A]/20 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
              <Brain className="w-6 h-6 md:w-8 md:h-8 text-[#FF6B5A]" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">{t.aiCapabilitiesTitle}</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {t.aiCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-5 md:p-6 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl hover:border-[#FF6B5A]/30 active:border-[#FF6B5A]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#FF6B5A] flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-sm md:text-base">{capability.title}</h4>
                    <p className="text-[10px] md:text-xs text-[#FF6B5A]">{capability.titleUz}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12">{t.techStackTitle}</h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {t.techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="px-3 md:px-5 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg md:rounded-xl flex items-center gap-2 md:gap-3 hover:border-[#FF6B5A]/30 active:border-[#FF6B5A]/30 transition-all duration-300"
              >
                <span className="text-base md:text-xl">{tech.icon}</span>
                <div>
                  <p className="font-bold text-white text-xs md:text-sm">{tech.name}</p>
                  <p className="text-[10px] md:text-xs text-gray-500">{tech.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
