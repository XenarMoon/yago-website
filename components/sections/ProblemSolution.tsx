'use client';

import { motion } from 'framer-motion';
import {
  AlertTriangle, Phone, Clock, Ban, DollarSign, MapPin,
  Brain, MessageCircle, Users, Database, Zap, Crown,
  Stethoscope, Utensils, Wrench, Car, ShoppingBag, Calendar,
  PartyPopper, Search, Star, Shield, CheckCircle2, Sparkles,
  UserX, Timer
} from 'lucide-react';

interface ProblemSolutionProps {
  language?: 'en' | 'uz';
}

const translations = {
  en: {
    badge: "AI500 COMPETITION",
    title: "PROBLEM &",
    titleHighlight: "SOLUTION",
    subtitle: "Real problems in everyday life in Uzbekistan and how Yago solves them",

    problemTitle: "THE REAL PROBLEM",
    problemSubtitle: "What people face every day in Uzbekistan",

    problems: [
      {
        icon: Timer,
        title: "Live Queues Everywhere",
        description: "Standing in line for hours at banks, clinics, government offices. No prior appointments, no online booking. Just show up and wait."
      },
      {
        icon: Phone,
        title: "Endless Phone Calls",
        description: "Spending 30+ minutes calling restaurants, clinics, and services. Most don't answer. When they do, the information is outdated."
      },
      {
        icon: UserX,
        title: "No Appointment Culture",
        description: "Want to see a doctor? Go stand in line at 6 AM. Need a haircut? Just walk in and hope. Prior booking barely exists."
      },
      {
        icon: Clock,
        title: "Wasted Precious Time",
        description: "Hours lost waiting in physical queues, making multiple calls, visiting places in person just to book something simple."
      },
      {
        icon: Ban,
        title: "No Modern Service",
        description: "Premium concierge services like Dubai or London don't exist here. Everyone suffers the same inefficient system."
      },
      {
        icon: DollarSign,
        title: "Hidden & Unfair Pricing",
        description: "No transparent pricing anywhere. You might pay double what the previous customer paid. No accountability."
      }
    ],

    solutionTitle: "THE YAGO SOLUTION",
    solutionSubtitle: "Dubai & London-level concierge, powered by AI",

    solutions: [
      {
        icon: Brain,
        title: "AI-Driven Conversations",
        description: "Natural language processing understands your requests in Uzbek, Russian, or English. Just say what you need.",
        highlight: "GPT-4 Powered"
      },
      {
        icon: Zap,
        title: "Real-Time Booking",
        description: "Instant confirmation for restaurants, clinics, salons, and more. No waiting, no callbacks, no uncertainty.",
        highlight: "Instant"
      },
      {
        icon: Users,
        title: "Human-Agent Escalation",
        description: "Complex requests are seamlessly handed to human concierge agents who handle VIP arrangements personally.",
        highlight: "24/7 Support"
      },
      {
        icon: Database,
        title: "Smart Data Gathering",
        description: "AI remembers your preferences, dietary restrictions, favorite venues, and past bookings for personalized service.",
        highlight: "Personalized"
      },
      {
        icon: MessageCircle,
        title: "Instant Service Access",
        description: "One message to book anything — from a table at the best restaurant to a private jet charter. All via Telegram.",
        highlight: "One Platform"
      },
      {
        icon: Crown,
        title: "Premium Quality Standard",
        description: "We bring Dubai & London concierge standards to Tashkent. White-glove service for discerning clients.",
        highlight: "Luxury"
      }
    ],

    industries: [
      { icon: Utensils, label: "Restaurants & Cafes" },
      { icon: Stethoscope, label: "Healthcare & Clinics" },
      { icon: Wrench, label: "Home Services" },
      { icon: Car, label: "Transport & Logistics" },
      { icon: ShoppingBag, label: "Shopping & Delivery" },
      { icon: Calendar, label: "Event Planning" },
      { icon: PartyPopper, label: "Entertainment" },
      { icon: Search, label: "Personal Assistance" }
    ],

    statsTitle: "BUILT FOR UZBEKISTAN",
    stats: [
      { value: "35M+", label: "Population to serve" },
      { value: "24/7", label: "Availability" },
      { value: "<30s", label: "Response time" },
      { value: "100+", label: "Partner venues" }
    ]
  },
  uz: {
    badge: "AI500 TANLOV",
    title: "MUAMMO VA",
    titleHighlight: "YECHIM",
    subtitle: "O'zbekistonda kundalik hayotdagi haqiqiy muammolar va Yago yechimlari",

    problemTitle: "HAQIQIY MUAMMO",
    problemSubtitle: "O'zbekistonda odamlar har kuni nimaga duch keladi",

    problems: [
      {
        icon: Timer,
        title: "Hamma Joyda Jonli Navbat",
        description: "Banklar, klinikalar, davlat idoralarida soatlab navbatda turish. Oldindan yozilish yo'q, onlayn bron yo'q. Shunchaki kel va kut."
      },
      {
        icon: Phone,
        title: "Cheksiz Qo'ng'iroqlar",
        description: "Restoran, klinika va xizmatlarga 30+ daqiqa qo'ng'iroq qilish. Ko'pchilik javob bermaydi. Javob berganda ham ma'lumot eskirgan."
      },
      {
        icon: UserX,
        title: "Oldindan Yozilish Madaniyati Yo'q",
        description: "Shifokorga ko'rinmoqchimisiz? Ertalab soat 6 da navbatga turing. Soch oldirmoqchimisiz? Shunchaki kiring va umid qiling."
      },
      {
        icon: Clock,
        title: "Qimmatli Vaqt Isrofi",
        description: "Jismoniy navbatlarda kutish, ko'p qo'ng'iroqlar qilish, oddiy narsani bron qilish uchun joylarga borish bilan soatlar yo'qotiladi."
      },
      {
        icon: Ban,
        title: "Zamonaviy Xizmat Yo'q",
        description: "Dubay yoki London kabi premium konsyerj xizmatlari bu yerda mavjud emas. Hamma bir xil samarasiz tizimdan aziyat chekadi."
      },
      {
        icon: DollarSign,
        title: "Yashirin va Adolatsiz Narxlar",
        description: "Hech qayerda shaffof narxlar yo'q. Oldingi mijozdan ikki baravar ko'p to'lashingiz mumkin. Javobgarlik yo'q."
      }
    ],

    solutionTitle: "YAGO YECHIMI",
    solutionSubtitle: "Dubay va London darajasidagi konsyerj, AI quvvatida",

    solutions: [
      {
        icon: Brain,
        title: "AI Suhbatlar",
        description: "Tabiiy til qayta ishlash so'rovlaringizni o'zbek, rus yoki ingliz tilida tushunadi. Shunchaki nima kerakligini ayting.",
        highlight: "GPT-4"
      },
      {
        icon: Zap,
        title: "Real Vaqt Bron",
        description: "Restoranlar, klinikalar, salonlar uchun bir zumda tasdiqlash. Kutish yo'q, qayta qo'ng'iroq yo'q, noaniqlik yo'q.",
        highlight: "Bir Zumda"
      },
      {
        icon: Users,
        title: "Inson-Agent Eskalatsiyasi",
        description: "Murakkab so'rovlar VIP tartiblarni shaxsan hal qiladigan inson konsyerjlariga uzatiladi.",
        highlight: "24/7 Qo'llab-quvvatlash"
      },
      {
        icon: Database,
        title: "Aqlli Ma'lumot Yig'ish",
        description: "AI sizning afzalliklaringiz, ovqatlanish cheklovlari, sevimli joylar va oldingi bronlaringizni eslab qoladi.",
        highlight: "Shaxsiylashtirilgan"
      },
      {
        icon: MessageCircle,
        title: "Bir Zumda Xizmat",
        description: "Biror narsani bron qilish uchun bitta xabar — eng yaxshi restoranda stoldan tortib shaxsiy samolyot charterigacha.",
        highlight: "Bir Platforma"
      },
      {
        icon: Crown,
        title: "Premium Sifat Standarti",
        description: "Biz Dubay va London konsyerj standartlarini Toshkentga olib kelamiz. Talabchan mijozlar uchun yuqori darajadagi xizmat.",
        highlight: "Hashamat"
      }
    ],

    industries: [
      { icon: Utensils, label: "Restoranlar va Kafelar" },
      { icon: Stethoscope, label: "Sog'liqni Saqlash" },
      { icon: Wrench, label: "Uy Xizmatlari" },
      { icon: Car, label: "Transport va Logistika" },
      { icon: ShoppingBag, label: "Xarid va Yetkazish" },
      { icon: Calendar, label: "Tadbirlar" },
      { icon: PartyPopper, label: "Ko'ngil Ochar" },
      { icon: Search, label: "Shaxsiy Yordam" }
    ],

    statsTitle: "O'ZBEKISTON UCHUN YARATILGAN",
    stats: [
      { value: "35M+", label: "Xizmat qilish uchun aholi" },
      { value: "24/7", label: "Mavjudlik" },
      { value: "<30s", label: "Javob vaqti" },
      { value: "100+", label: "Hamkor joylar" }
    ]
  }
};

export default function ProblemSolution({ language = 'en' }: ProblemSolutionProps) {
  const t = translations[language];

  return (
    <section id="muammo-yechim" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[#FF6B5A]/5 rounded-full blur-3xl" />
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6">
            {t.title} <span className="text-[#FF6B5A]">{t.titleHighlight}</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Problem Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-8 md:mb-12">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-red-500/10 border border-red-500/20 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-red-500" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{t.problemTitle}</h3>
              <p className="text-gray-400 text-sm md:text-base">{t.problemSubtitle}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
            {t.problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-3 sm:p-5 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl hover:border-red-500/30 active:border-red-500/30 transition-all duration-300 h-full flex flex-col items-center text-center sm:items-start sm:text-left">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-red-500/10 rounded-lg md:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-400" />
                    </div>
                    <h4 className="text-[10px] sm:text-base md:text-xl font-bold mb-1 sm:mb-2 text-white leading-tight">{problem.title}</h4>
                    <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm leading-relaxed hidden sm:block">{problem.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Arrow Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16 md:mb-24"
        >
          <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-[#FF6B5A] to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-[#FF6B5A]/30">
            <svg className="w-7 h-7 md:w-10 md:h-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-8 md:mb-12">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FF6B5A]/10 border border-[#FF6B5A]/20 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-[#FF6B5A]" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{t.solutionTitle}</h3>
              <p className="text-gray-400 text-sm md:text-base">{t.solutionSubtitle}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
            {t.solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B5A]/10 to-transparent rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-3 sm:p-5 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl hover:border-[#FF6B5A]/30 active:border-[#FF6B5A]/30 transition-all duration-300 h-full flex flex-col items-center text-center sm:items-start sm:text-left">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#FF6B5A]/10 rounded-lg md:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#FF6B5A]" />
                    </div>
                    <span className="px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 bg-[#FF6B5A]/20 text-[#FF6B5A] text-[8px] sm:text-[10px] md:text-xs font-bold rounded-full mb-2 hidden sm:inline-block">
                      {solution.highlight}
                    </span>
                    <h4 className="text-[10px] sm:text-base md:text-xl font-bold mb-1 sm:mb-2 text-white leading-tight">{solution.title}</h4>
                    <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm leading-relaxed hidden sm:block">{solution.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Industries We Serve */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20"
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {t.industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="px-3 md:px-5 py-2 md:py-3 bg-white/5 border border-white/10 rounded-full flex items-center gap-2 hover:border-[#FF6B5A]/30 active:border-[#FF6B5A]/30 transition-all duration-300"
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#FF6B5A]" />
                  <span className="text-xs md:text-sm font-medium text-gray-300">{industry.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-6 md:p-8 lg:p-12 bg-gradient-to-br from-[#FF6B5A]/10 to-purple-500/10 border border-[#FF6B5A]/20 rounded-2xl md:rounded-3xl">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">{t.statsTitle}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {t.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FF6B5A] mb-1 md:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
