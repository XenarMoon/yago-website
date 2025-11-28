'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft, AlertTriangle, Phone, Clock, Ban, DollarSign, MapPin,
  Brain, MessageCircle, Users, Database, Zap, Crown,
  Stethoscope, Utensils, Wrench, Car, ShoppingBag, Calendar,
  PartyPopper, Search, Languages, Menu, X, Sparkles, CheckCircle2,
  ArrowRight, Target, TrendingUp, Globe, Shield, Heart,
  Lightbulb, Rocket, Star, Award, ChevronRight, Play,
  Handshake, BadgeDollarSign, Briefcase, GraduationCap, Hammer,
  ChefHat, Camera, Palette, Music, Truck, Baby, Dog, Dumbbell,
  Scissors, Plug, PaintBucket, TreeDeciduous, CircleDollarSign
} from 'lucide-react';

type Language = 'en' | 'uz';

const translations = {
  en: {
    back: "Back",
    badge: "AI500 COMPETITION ENTRY",
    title: "PROBLEM &",
    titleHighlight: "SOLUTION",
    subtitle: "Transforming how 35+ million people access premium lifestyle services in Uzbekistan",

    heroStats: [
      { value: "35M+", label: "People Underserved" },
      { value: "0", label: "AI Concierge Solutions" },
      { value: "$2B+", label: "Market Opportunity" }
    ],

    problemTitle: "THE PROBLEM",
    problemSubtitle: "Why everyday life in Uzbekistan is harder than it should be",
    problemIntro: "In a country of 35+ million people, accessing quality lifestyle services remains frustratingly difficult. What takes seconds in Dubai or London takes hours in Tashkent.",

    problems: [
      {
        icon: Phone,
        title: "Endless Phone Calls",
        description: "Spending 30+ minutes calling restaurants, clinics, and services just to make a simple booking. Most don't answer or have outdated information.",
        stat: "30+ min",
        statLabel: "Average booking time"
      },
      {
        icon: Clock,
        title: "Massive Time Waste",
        description: "Organizing a birthday party or business dinner means calling 10+ vendors separately — caterers, venues, decorators, transport. Each call is a new frustration.",
        stat: "10+",
        statLabel: "Calls per event"
      },
      {
        icon: Ban,
        title: "No Premium Service",
        description: "Premium concierge services like those in Dubai or London simply don't exist in Uzbekistan. High-net-worth individuals have no local solution for their lifestyle needs.",
        stat: "Zero",
        statLabel: "AI concierge options"
      },
      {
        icon: MapPin,
        title: "Discovery Nightmare",
        description: "Finding trusted service providers is incredibly difficult. No centralized platform to compare, book, and pay for lifestyle services with confidence.",
        stat: "No",
        statLabel: "Unified platform"
      },
      {
        icon: DollarSign,
        title: "Hidden & Variable Costs",
        description: "No transparent pricing anywhere. Services often charge differently based on who's calling. No accountability, no quality guarantees, no recourse.",
        stat: "???",
        statLabel: "Unpredictable pricing"
      },
      {
        icon: AlertTriangle,
        title: "Language Barriers",
        description: "Expats and tourists struggle to communicate their needs. Local services rarely speak English or understand international service standards.",
        stat: "3",
        statLabel: "Languages needed"
      }
    ],

    impactTitle: "THE IMPACT",
    impactSubtitle: "What this costs people every day",
    impacts: [
      { icon: Clock, title: "Lost Time", description: "Hours spent on tasks that should take minutes", color: "text-red-400" },
      { icon: Heart, title: "Frustration", description: "Stress and anxiety from poor service experiences", color: "text-orange-400" },
      { icon: DollarSign, title: "Wasted Money", description: "Overpaying due to lack of price transparency", color: "text-yellow-400" },
      { icon: Ban, title: "Missed Opportunities", description: "Great experiences never discovered or booked", color: "text-purple-400" }
    ],

    solutionTitle: "THE SOLUTION",
    solutionSubtitle: "YAGO: Dubai & London-level concierge, powered by AI",
    solutionIntro: "One message. Any task. Instant results. YAGO brings world-class concierge service to everyone in Uzbekistan.",

    solutions: [
      {
        icon: Brain,
        title: "AI-Driven Conversations",
        description: "Natural language processing understands your requests in Uzbek, Russian, or English. No apps to learn, no menus to navigate. Just say what you need.",
        highlight: "GPT-4 Powered",
        features: ["Multi-language support", "Context awareness", "Natural conversation"]
      },
      {
        icon: Zap,
        title: "Real-Time Execution",
        description: "Instant confirmation for restaurants, clinics, salons, and more. No waiting, no callbacks, no uncertainty. Your request is handled immediately.",
        highlight: "< 30 Second Response",
        features: ["Instant booking", "Live availability", "Immediate confirmation"]
      },
      {
        icon: Users,
        title: "Human-AI Hybrid",
        description: "Complex requests are seamlessly handed to human concierge agents who handle VIP arrangements personally. The best of both worlds.",
        highlight: "24/7 Support",
        features: ["Seamless handoff", "VIP handling", "Personal touch"]
      },
      {
        icon: Database,
        title: "Smart Personalization",
        description: "AI remembers your preferences, dietary restrictions, favorite venues, and past bookings. Every interaction gets better over time.",
        highlight: "Learns You",
        features: ["Preference memory", "Smart suggestions", "Personalized results"]
      },
      {
        icon: MessageCircle,
        title: "Universal Access",
        description: "One message to book anything — from a table at the best restaurant to a private jet charter. All through Telegram, the app you already use.",
        highlight: "Telegram Native",
        features: ["No new app needed", "Familiar interface", "Instant access"]
      },
      {
        icon: Crown,
        title: "Premium Standards",
        description: "We bring Dubai & London concierge standards to Tashkent. White-glove service for discerning clients who expect excellence.",
        highlight: "World-Class",
        features: ["Curated partners", "Quality guaranteed", "VIP treatment"]
      }
    ],

    howItWorksTitle: "HOW IT WORKS",
    howItWorksSubtitle: "Three steps to effortless lifestyle management",
    steps: [
      {
        number: "01",
        title: "Send a Message",
        description: "Tell YAGO what you need in your own words. \"Book a table for 4 at the best Italian restaurant tonight\" or \"Find a trusted plumber who can come today.\""
      },
      {
        number: "02",
        title: "AI Takes Action",
        description: "YAGO's AI understands your request, searches our partner network, checks availability, compares options, and handles all the details."
      },
      {
        number: "03",
        title: "You're Done",
        description: "Receive confirmation with all the details. Show up and enjoy. No callbacks, no follow-ups, no stress. Life as it should be."
      }
    ],

    industriesTitle: "INDUSTRIES WE SERVE",
    industries: [
      { icon: Utensils, label: "Restaurants & Cafes", count: "500+" },
      { icon: Stethoscope, label: "Healthcare & Clinics", count: "200+" },
      { icon: Wrench, label: "Home Services", count: "300+" },
      { icon: Car, label: "Transport & Logistics", count: "150+" },
      { icon: ShoppingBag, label: "Shopping & Delivery", count: "400+" },
      { icon: Calendar, label: "Event Planning", count: "100+" },
      { icon: PartyPopper, label: "Entertainment", count: "250+" },
      { icon: Search, label: "Personal Assistance", count: "Unlimited" }
    ],

    comparisonTitle: "THE DIFFERENCE",
    comparisonSubtitle: "Before YAGO vs. After YAGO",
    before: {
      title: "Without YAGO",
      items: [
        "30+ minutes of phone calls",
        "Calling multiple vendors",
        "Language barriers",
        "Uncertain pricing",
        "No guarantees",
        "Stressful experience"
      ]
    },
    after: {
      title: "With YAGO",
      items: [
        "One message, done",
        "All-in-one solution",
        "Speaks your language",
        "Transparent pricing",
        "Quality guaranteed",
        "Effortless experience"
      ]
    },

    statsTitle: "BUILT FOR UZBEKISTAN",
    statsSubtitle: "Designed specifically for the local market",
    stats: [
      { value: "35M+", label: "Population to Serve" },
      { value: "24/7", label: "Always Available" },
      { value: "<30s", label: "Response Time" },
      { value: "100+", label: "Launch Partners" },
      { value: "3", label: "Languages" },
      { value: "$0", label: "To Try" }
    ],

    partnerTitle: "BECOME A",
    partnerTitleHighlight: "YAGO PARTNER",
    partnerSubtitle: "Turn your skills into income. No office needed. No boss. Just you and your talent.",
    partnerIntro: "YAGO isn't just for customers — it's a revolution for service providers. Anyone with a skill can become a YAGO Partner and start earning. Tell YAGO what you can do, and we'll connect you with customers who need exactly that.",

    partnerHowTitle: "How It Works",
    partnerHowSteps: [
      {
        number: "01",
        title: "Tell YAGO Your Skills",
        description: "Simply message YAGO: \"I'm a plumber\" or \"I can cook Uzbek cuisine\" or \"I teach English\". That's it. No complex registration."
      },
      {
        number: "02",
        title: "Get Verified",
        description: "Quick verification process. Share your experience, photos of your work, and set your rates. Build your profile in minutes."
      },
      {
        number: "03",
        title: "Receive Customers",
        description: "When a customer needs your service, YAGO connects them to you instantly. Accept jobs that fit your schedule."
      },
      {
        number: "04",
        title: "Get Paid",
        description: "Complete the job, get paid directly. No middlemen taking huge cuts. You keep what you earn."
      }
    ],

    partnerBenefitsTitle: "Why Partner with YAGO?",
    partnerBenefits: [
      {
        icon: CircleDollarSign,
        title: "Zero Startup Cost",
        description: "No fees to join. No monthly charges. Start earning with skills you already have."
      },
      {
        icon: Users,
        title: "Instant Customer Access",
        description: "Tap into thousands of customers actively looking for services. No more waiting for work."
      },
      {
        icon: Clock,
        title: "Work When You Want",
        description: "Full flexibility. Accept jobs on your schedule. Work full-time or just weekends."
      },
      {
        icon: Shield,
        title: "Protected & Secure",
        description: "Verified customers, secure payments, and support if anything goes wrong."
      },
      {
        icon: TrendingUp,
        title: "Grow Your Business",
        description: "Build reviews, increase your rates, expand your services. Scale at your own pace."
      },
      {
        icon: Globe,
        title: "Reach More People",
        description: "Serve customers across the city. Your service area, your choice."
      }
    ],

    partnerExamplesTitle: "What is YOUR Superpower?",
    partnerExamplesSubtitle: "Tell YAGO what you can do and we find people who need exactly that",
    partnerExamples: [
      { icon: Wrench, title: "I fix things", tagline: "Pipes, taps, repairs" },
      { icon: Plug, title: "I know electricity", tagline: "Wiring, outlets, lights" },
      { icon: ChefHat, title: "I can cook", tagline: "Any cuisine, any event" },
      { icon: Scissors, title: "I cut hair", tagline: "Styles, colors, care" },
      { icon: Car, title: "I can drive", tagline: "Anywhere, anytime" },
      { icon: GraduationCap, title: "I can teach", tagline: "Math, languages, music" },
      { icon: Camera, title: "I take photos", tagline: "Moments to memories" },
      { icon: Baby, title: "I love kids", tagline: "Safe, fun, caring" },
      { icon: Dog, title: "I love pets", tagline: "Walking, sitting, love" },
      { icon: Dumbbell, title: "I train people", tagline: "Fitness, health, goals" },
      { icon: PaintBucket, title: "I paint walls", tagline: "Colors, beauty, fresh" },
      { icon: TreeDeciduous, title: "I grow gardens", tagline: "Plants, lawns, nature" }
    ],

    partnerStoriesTitle: "Imagine The Possibilities",
    partnerStories: [
      {
        icon: "graduation",
        title: "Students",
        description: "Earn while you learn. Tutor younger kids, help with deliveries, or offer tech support between classes."
      },
      {
        icon: "home",
        title: "Stay-at-Home Parents",
        description: "Turn your home skills into income. Cook, babysit, or craft when kids are at school."
      },
      {
        icon: "briefcase",
        title: "Side Hustlers",
        description: "Have a 9-to-5? Use evenings and weekends to build extra income doing what you love."
      }
    ],

    partnerCtaTitle: "Your Skills. Your Time. Your Income.",
    partnerCtaSubtitle: "YAGO is launching soon. Be the first to know when we go live.",
    partnerCtaButton: "Notify Me at Launch",

    visionTitle: "THE VISION",
    visionSubtitle: "Where we're going",
    visionText: "YAGO isn't just an app — it's a new standard for how people interact with services. We're building the infrastructure for a service economy that works for everyone. Starting in Uzbekistan, expanding across Central Asia, and eventually serving emerging markets worldwide.",

    visionPoints: [
      { icon: Target, title: "Phase 1: Tashkent", description: "Launch and prove the model in Uzbekistan's capital" },
      { icon: TrendingUp, title: "Phase 2: National", description: "Expand to all major cities across Uzbekistan" },
      { icon: Globe, title: "Phase 3: Regional", description: "Enter Kazakhstan, Kyrgyzstan, and beyond" },
      { icon: Rocket, title: "Phase 4: Global", description: "Serve emerging markets worldwide" }
    ],

    ctaTitle: "Ready to Experience the Future?",
    ctaSubtitle: "Be among the first to experience YAGO when we launch.",
    ctaButton: "Ask for Demo",

    footer: {
      home: "Home",
      team: "Team",
      roadmap: "Roadmap",
      copyright: "© 2025 YAGO Concierge. All rights reserved."
    }
  },
  uz: {
    back: "Orqaga",
    badge: "AI500 TANLOV ARIZASI",
    title: "MUAMMO VA",
    titleHighlight: "YECHIM",
    subtitle: "35+ million kishi premium xizmatlarga kirishini o'zgartirmoqdamiz",

    heroStats: [
      { value: "35M+", label: "Xizmat Ko'rsatilmaganlar" },
      { value: "0", label: "AI Konsyerj Yechimlari" },
      { value: "$2B+", label: "Bozor Imkoniyati" }
    ],

    problemTitle: "MUAMMO",
    problemSubtitle: "O'zbekistonda kundalik hayot nega qiyin",
    problemIntro: "35+ million aholiga ega mamlakatda sifatli xizmatlarga kirish hali ham juda qiyin. Dubay yoki Londonda soniyalar ichida bajariladigan narsa Toshkentda soatlab vaqt oladi.",

    problems: [
      {
        icon: Phone,
        title: "Cheksiz Qo'ng'iroqlar",
        description: "Oddiy bron qilish uchun restoran, klinika va xizmatlarga 30+ daqiqa qo'ng'iroq qilish. Ko'pchilik javob bermaydi yoki ma'lumotlar eskirgan.",
        stat: "30+ daq",
        statLabel: "O'rtacha bron vaqti"
      },
      {
        icon: Clock,
        title: "Katta Vaqt Isrofi",
        description: "Tug'ilgan kun yoki biznes kechki ovqatni tashkil qilish 10+ ta vendorga alohida qo'ng'iroq qilishni talab qiladi — katering, joy, dekor, transport.",
        stat: "10+",
        statLabel: "Har bir tadbir uchun qo'ng'iroq"
      },
      {
        icon: Ban,
        title: "Premium Xizmat Yo'q",
        description: "Dubay yoki Londondagi kabi premium konsyerj xizmatlari O'zbekistonda mavjud emas. Yuqori daromadli shaxslar uchun mahalliy yechim yo'q.",
        stat: "Nol",
        statLabel: "AI konsyerj variantlari"
      },
      {
        icon: MapPin,
        title: "Topish Dahshat",
        description: "Ishonchli xizmat ko'rsatuvchilarni topish juda qiyin. Xizmatlarni solishtirish, bron qilish va ishonch bilan to'lash uchun markazlashgan platforma yo'q.",
        stat: "Yo'q",
        statLabel: "Yagona platforma"
      },
      {
        icon: DollarSign,
        title: "Yashirin Narxlar",
        description: "Hech qayerda shaffof narxlar yo'q. Xizmatlar ko'pincha kim qo'ng'iroq qilayotganiga qarab turlicha narx oladi. Javobgarlik yoki kafolat yo'q.",
        stat: "???",
        statLabel: "Noma'lum narxlar"
      },
      {
        icon: AlertTriangle,
        title: "Til To'siqlari",
        description: "Chet elliklar va sayyohlar ehtiyojlarini tushuntirishda qiynaladi. Mahalliy xizmatlar kamdan-kam ingliz tilida gaplashadi.",
        stat: "3",
        statLabel: "Til kerak"
      }
    ],

    impactTitle: "TA'SIR",
    impactSubtitle: "Bu odamlarga har kuni nima turaydi",
    impacts: [
      { icon: Clock, title: "Yo'qotilgan Vaqt", description: "Daqiqalarda bajarilishi kerak bo'lgan vazifalarga sarflangan soatlar", color: "text-red-400" },
      { icon: Heart, title: "Stress", description: "Yomon xizmat tajribalaridan stress va tashvish", color: "text-orange-400" },
      { icon: DollarSign, title: "Isrof Qilingan Pul", description: "Narx shaffofligining yo'qligi tufayli ortiqcha to'lash", color: "text-yellow-400" },
      { icon: Ban, title: "O'tkazib Yuborilgan Imkoniyatlar", description: "Hech qachon topilmagan yoki bron qilinmagan ajoyib tajribalar", color: "text-purple-400" }
    ],

    solutionTitle: "YECHIM",
    solutionSubtitle: "YAGO: AI quvvatida Dubay & London darajasidagi konsyerj",
    solutionIntro: "Bitta xabar. Har qanday vazifa. Bir zumda natija. YAGO O'zbekistondagi har bir kishiga jahon darajasidagi konsyerj xizmatini olib keladi.",

    solutions: [
      {
        icon: Brain,
        title: "AI Suhbatlar",
        description: "Tabiiy til qayta ishlash so'rovlaringizni o'zbek, rus yoki ingliz tilida tushunadi. O'rganish kerak bo'lgan ilovalar yo'q. Shunchaki nima kerakligini ayting.",
        highlight: "GPT-4 Quvvatida",
        features: ["Ko'p tilli qo'llab-quvvatlash", "Kontekst xabardorligi", "Tabiiy suhbat"]
      },
      {
        icon: Zap,
        title: "Real Vaqt Ijro",
        description: "Restoranlar, klinikalar, salonlar uchun bir zumda tasdiqlash. Kutish yo'q, qayta qo'ng'iroq yo'q, noaniqlik yo'q. So'rovingiz darhol bajariladi.",
        highlight: "< 30 Soniya Javob",
        features: ["Bir zumda bron", "Jonli mavjudlik", "Darhol tasdiqlash"]
      },
      {
        icon: Users,
        title: "Inson-AI Gibrid",
        description: "Murakkab so'rovlar VIP tartiblarni shaxsan hal qiladigan inson konsyerjlariga uzatiladi. Ikki dunyoning eng yaxshisi.",
        highlight: "24/7 Qo'llab-quvvatlash",
        features: ["Muammosiz uzatish", "VIP xizmat", "Shaxsiy yondashuv"]
      },
      {
        icon: Database,
        title: "Aqlli Shaxsiylashtirish",
        description: "AI sizning afzalliklaringiz, ovqatlanish cheklovlari, sevimli joylar va oldingi bronlaringizni eslab qoladi. Har bir muloqot yaxshilanadi.",
        highlight: "Sizni O'rganadi",
        features: ["Afzallik xotirasi", "Aqlli takliflar", "Shaxsiylashtirilgan natijalar"]
      },
      {
        icon: MessageCircle,
        title: "Universal Kirish",
        description: "Biror narsani bron qilish uchun bitta xabar — eng yaxshi restoranda stoldan tortib shaxsiy samolyot charterigacha. Telegram orqali.",
        highlight: "Telegram Native",
        features: ["Yangi ilova kerak emas", "Tanish interfeys", "Bir zumda kirish"]
      },
      {
        icon: Crown,
        title: "Premium Standartlar",
        description: "Biz Dubay va London konsyerj standartlarini Toshkentga olib kelamiz. Mukammallikni kutadigan talabchan mijozlar uchun yuqori darajadagi xizmat.",
        highlight: "Jahon Darajasida",
        features: ["Tanlangan hamkorlar", "Sifat kafolatlangan", "VIP muomala"]
      }
    ],

    howItWorksTitle: "QANDAY ISHLAYDI",
    howItWorksSubtitle: "Oson hayot boshqaruvi uchun uchta qadam",
    steps: [
      {
        number: "01",
        title: "Xabar Yuboring",
        description: "YAGO ga nima kerakligini o'z so'zlaringiz bilan ayting. \"Bugun kechqurun 4 kishi uchun eng yaxshi italyan restoranida stol bron qiling.\""
      },
      {
        number: "02",
        title: "AI Harakat Qiladi",
        description: "YAGO AI so'rovingizni tushunadi, hamkor tarmoqni qidiradi, mavjudlikni tekshiradi, variantlarni solishtiradi va barcha tafsilotlarni hal qiladi."
      },
      {
        number: "03",
        title: "Tayyor",
        description: "Barcha tafsilotlar bilan tasdiqlash oling. Boring va zavqlaning. Qayta qo'ng'iroqlar yo'q, stress yo'q. Hayot shunday bo'lishi kerak."
      }
    ],

    industriesTitle: "BIZ XIZMAT QILADIGAN SOHALAR",
    industries: [
      { icon: Utensils, label: "Restoranlar va Kafelar", count: "500+" },
      { icon: Stethoscope, label: "Sog'liqni Saqlash", count: "200+" },
      { icon: Wrench, label: "Uy Xizmatlari", count: "300+" },
      { icon: Car, label: "Transport va Logistika", count: "150+" },
      { icon: ShoppingBag, label: "Xarid va Yetkazish", count: "400+" },
      { icon: Calendar, label: "Tadbirlar", count: "100+" },
      { icon: PartyPopper, label: "Ko'ngil Ochar", count: "250+" },
      { icon: Search, label: "Shaxsiy Yordam", count: "Cheksiz" }
    ],

    comparisonTitle: "FARQ",
    comparisonSubtitle: "YAGO dan oldin va keyin",
    before: {
      title: "YAGO siz",
      items: [
        "30+ daqiqa qo'ng'iroqlar",
        "Ko'p vendorlarga qo'ng'iroq",
        "Til to'siqlari",
        "Noaniq narxlar",
        "Kafolat yo'q",
        "Stressli tajriba"
      ]
    },
    after: {
      title: "YAGO bilan",
      items: [
        "Bitta xabar, tayyor",
        "Hammasi bir joyda",
        "Tilingizni tushunadi",
        "Shaffof narxlar",
        "Sifat kafolatlangan",
        "Oson tajriba"
      ]
    },

    statsTitle: "O'ZBEKISTON UCHUN YARATILGAN",
    statsSubtitle: "Mahalliy bozor uchun maxsus ishlab chiqilgan",
    stats: [
      { value: "35M+", label: "Xizmat Qilish Uchun Aholi" },
      { value: "24/7", label: "Doim Mavjud" },
      { value: "<30s", label: "Javob Vaqti" },
      { value: "100+", label: "Ishga Tushirish Hamkorlari" },
      { value: "3", label: "Tillar" },
      { value: "$0", label: "Sinab Ko'rish" }
    ],

    partnerTitle: "YAGO",
    partnerTitleHighlight: "HAMKORI BO'LING",
    partnerSubtitle: "Ko'nikmalaringizni daromadga aylantiring. Ofis kerak emas. Boshliq yo'q. Faqat siz va iste'dodingiz.",
    partnerIntro: "YAGO faqat mijozlar uchun emas — bu xizmat ko'rsatuvchilar uchun inqilob. Ko'nikma egasi har kim YAGO Hamkori bo'lib, pul ishlashni boshlashi mumkin. YAGO ga nima qila olishingizni ayting, biz sizni aynan shuni kerak qiladigan mijozlar bilan bog'laymiz.",

    partnerHowTitle: "Qanday Ishlaydi",
    partnerHowSteps: [
      {
        number: "01",
        title: "YAGO ga Ko'nikmalaringizni Ayting",
        description: "Shunchaki YAGO ga xabar yuboring: \"Men santexnikman\" yoki \"O'zbek taomlarini pishira olaman\" yoki \"Ingliz tilini o'rgataman\". Hammasi shu. Murakkab ro'yxatdan o'tish yo'q."
      },
      {
        number: "02",
        title: "Tasdiqdan O'ting",
        description: "Tez tasdiqlash jarayoni. Tajribangizni, ishlaringiz rasmlarini baham ko'ring va narxlaringizni belgilang. Profilingizni daqiqalar ichida yarating."
      },
      {
        number: "03",
        title: "Mijozlarni Qabul Qiling",
        description: "Mijoz sizning xizmatingizga muhtoj bo'lganda, YAGO ularni sizga bir zumda bog'laydi. Jadvalingizga mos ishlarni qabul qiling."
      },
      {
        number: "04",
        title: "Pul Oling",
        description: "Ishni bajaring, to'g'ridan-to'g'ri pul oling. Katta foiz oladigan vositachilar yo'q. Ishlaganingizni o'zingiz saqlab qolasiz."
      }
    ],

    partnerBenefitsTitle: "Nega YAGO bilan Hamkorlik?",
    partnerBenefits: [
      {
        icon: CircleDollarSign,
        title: "Nol Boshlang'ich Xarajat",
        description: "Qo'shilish uchun to'lov yo'q. Oylik to'lovlar yo'q. Allaqachon egallagan ko'nikmalaringiz bilan pul ishlashni boshlang."
      },
      {
        icon: Users,
        title: "Bir Zumda Mijozlarga Kirish",
        description: "Xizmatlarni faol qidirayotgan minglab mijozlarga kiring. Endi ish kutish yo'q."
      },
      {
        icon: Clock,
        title: "Xohlagan Vaqtingizda Ishlang",
        description: "To'liq moslashuvchanlik. Jadvalingizga mos ishlarni qabul qiling. To'liq vaqtli yoki faqat dam olish kunlari ishlang."
      },
      {
        icon: Shield,
        title: "Himoyalangan va Xavfsiz",
        description: "Tasdiqlangan mijozlar, xavfsiz to'lovlar va biror narsa noto'g'ri bo'lsa yordam."
      },
      {
        icon: TrendingUp,
        title: "Biznesingizni O'stiring",
        description: "Sharhlar to'plang, narxlaringizni oshiring, xizmatlaringizni kengaytiring. O'z tezligingizda o'sing."
      },
      {
        icon: Globe,
        title: "Ko'proq Odamlarga Yeting",
        description: "Shahar bo'ylab mijozlarga xizmat ko'rsating. Xizmat hududingiz, o'z tanlovingiz."
      }
    ],

    partnerExamplesTitle: "SIZNING Super Kuchingiz Nima?",
    partnerExamplesSubtitle: "YAGO ga nima qila olishingizni ayting — biz aynan shuni kerak qiladigan odamlarni topamiz",
    partnerExamples: [
      { icon: Wrench, title: "Tuzata olaman", tagline: "Quvur, kran, ta'mir" },
      { icon: Plug, title: "Elektrik bilaman", tagline: "Simlar, rozetka, chiroq" },
      { icon: ChefHat, title: "Pishira olaman", tagline: "Har qanday taom" },
      { icon: Scissors, title: "Soch olaman", tagline: "Uslub, rang, parvarish" },
      { icon: Car, title: "Hayday olaman", tagline: "Istalgan joyga" },
      { icon: GraduationCap, title: "O'rgata olaman", tagline: "Matematika, til, musiqa" },
      { icon: Camera, title: "Surat olaman", tagline: "Lahzalarni xotiraga" },
      { icon: Baby, title: "Bolalarni yaxshi ko'raman", tagline: "Xavfsiz, qiziqarli" },
      { icon: Dog, title: "Hayvonlarni yaxshi ko'raman", tagline: "Sayr, boqish, mehr" },
      { icon: Dumbbell, title: "Mashq qildiraman", tagline: "Fitnes, salomatlik" },
      { icon: PaintBucket, title: "Bo'yay olaman", tagline: "Ranglar, go'zallik" },
      { icon: TreeDeciduous, title: "Bog' parvarish qilaman", tagline: "O'simlik, maysazor" }
    ],

    partnerStoriesTitle: "Imkoniyatlarni Tasavvur Qiling",
    partnerStories: [
      {
        icon: "graduation",
        title: "Talabalar",
        description: "O'qib turib pul ishlang. Kichik bolalarga dars bering, yetkazib berishda yordam bering yoki darslar orasida texnik yordam ko'rsating."
      },
      {
        icon: "home",
        title: "Uy Beka/Beklari",
        description: "Uy ko'nikmalaringizni daromadga aylantiring. Bolalar maktabda bo'lganda ovqat pishiring, bola qarash yoki hunarmandchilik qiling."
      },
      {
        icon: "briefcase",
        title: "Qo'shimcha Ishlovchilar",
        description: "9 dan 5 gacha ishingiz bormi? Kechqurun va dam olish kunlarida sevgan ishingizni qilib qo'shimcha daromad oling."
      }
    ],

    partnerCtaTitle: "Sizning Ko'nikmangiz. Sizning Vaqtingiz. Sizning Daromadingiz.",
    partnerCtaSubtitle: "YAGO tez orada ishga tushadi. Biz jonli efirga chiqqanimizda birinchi bo'lib biling.",
    partnerCtaButton: "Menga Xabar Bering",

    visionTitle: "VIZYON",
    visionSubtitle: "Qayerga borayapmiz",
    visionText: "YAGO shunchaki ilova emas — bu odamlarning xizmatlar bilan munosabatining yangi standarti. Biz hamma uchun ishlaydigan xizmat iqtisodiyoti uchun infratuzilma quryapmiz. O'zbekistondan boshlab, Markaziy Osiyo bo'ylab kengayib, oxir-oqibat butun dunyo bo'ylab rivojlanayotgan bozorlarga xizmat qilamiz.",

    visionPoints: [
      { icon: Target, title: "1-bosqich: Toshkent", description: "O'zbekiston poytaxtida modelni ishga tushirish va isbotlash" },
      { icon: TrendingUp, title: "2-bosqich: Milliy", description: "O'zbekiston bo'ylab barcha yirik shaharlarga kengaytirish" },
      { icon: Globe, title: "3-bosqich: Mintaqaviy", description: "Qozog'iston, Qirg'iziston va boshqalarga kirish" },
      { icon: Rocket, title: "4-bosqich: Global", description: "Butun dunyo bo'ylab rivojlanayotgan bozorlarga xizmat qilish" }
    ],

    ctaTitle: "Kelajakni His Qilishga Tayyormisiz?",
    ctaSubtitle: "Biz ishga tushganimizda YAGO ni birinchilardan bo'lib his qiling.",
    ctaButton: "Demo So'rash",

    footer: {
      home: "Bosh Sahifa",
      team: "Jamoa",
      roadmap: "Roadmap",
      copyright: "© 2025 YAGO Concierge. Barcha huquqlar himoyalangan."
    }
  }
};

export default function ProblemSolutionPage() {
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
          className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, delay: 5 }}
          className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[#FF6B5A]/10 rounded-full blur-3xl"
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
            <Link href="/problem-solution" className="text-[#FF6B5A] transition-colors text-sm font-medium">
              Problem & Solution
            </Link>
            <Link href="/team" className="text-white/70 hover:text-white transition-colors text-sm">
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
              className="block py-3 text-[#FF6B5A] font-medium transition-colors text-center border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Problem & Solution
            </Link>
            <Link
              href="/team"
              className="block py-3 text-white/70 hover:text-white transition-colors text-center border-b border-white/10"
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

      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <span className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-[#FF6B5A]/20 to-red-500/20 border border-[#FF6B5A]/30 rounded-full text-[#FF6B5A] text-xs md:text-sm font-medium mb-4 md:mb-6">
                <Award className="w-3 h-3 md:w-4 md:h-4" />
                {t.badge}
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 md:mb-6">
                {t.title} <span className="text-[#FF6B5A]">{t.titleHighlight}</span>
              </h1>

              <p className="text-base md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto px-2 mb-8 md:mb-12">
                {t.subtitle}
              </p>

              {/* Hero Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
                {t.heroStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl sm:text-3xl md:text-5xl font-black text-[#FF6B5A] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="px-4 md:px-6 py-12 md:py-20 bg-gradient-to-b from-transparent via-red-950/10 to-transparent">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 md:mb-16"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-7 h-7 md:w-10 md:h-10 text-red-500" />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white">{t.problemTitle}</h2>
                  <p className="text-gray-400 text-sm md:text-lg">{t.problemSubtitle}</p>
                </div>
              </div>
              <p className="text-gray-300 text-base md:text-xl max-w-4xl leading-relaxed">
                {t.problemIntro}
              </p>
            </motion.div>

            {/* Problem Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-12 md:mb-16">
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
                    <div className="relative p-4 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl hover:border-red-500/30 transition-all duration-300 h-full">
                      <div className="flex items-start justify-between mb-3 md:mb-4">
                        <div className="w-10 h-10 md:w-14 md:h-14 bg-red-500/10 rounded-xl flex items-center justify-center">
                          <Icon className="w-5 h-5 md:w-7 md:h-7 text-red-400" />
                        </div>
                        <div className="text-right">
                          <div className="text-xl md:text-2xl font-black text-red-400">{problem.stat}</div>
                          <div className="text-[10px] md:text-xs text-gray-500">{problem.statLabel}</div>
                        </div>
                      </div>
                      <h3 className="text-sm md:text-xl font-bold text-white mb-2">{problem.title}</h3>
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed hidden sm:block">{problem.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Impact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-6 md:p-10 bg-gradient-to-br from-red-500/5 to-orange-500/5 border border-red-500/20 rounded-2xl md:rounded-3xl"
            >
              <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">{t.impactTitle}</h3>
              <p className="text-center text-gray-400 mb-6 md:mb-8">{t.impactSubtitle}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {t.impacts.map((impact, index) => {
                  const Icon = impact.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 rounded-2xl bg-white/5 flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 md:w-8 md:h-8 ${impact.color}`} />
                      </div>
                      <h4 className="font-bold text-sm md:text-base mb-1">{impact.title}</h4>
                      <p className="text-gray-500 text-xs md:text-sm hidden sm:block">{impact.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Arrow Divider */}
        <div className="flex justify-center py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#FF6B5A] to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-[#FF6B5A]/30"
          >
            <svg className="w-8 h-8 md:w-12 md:h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>

        {/* Solution Section */}
        <section className="px-4 md:px-6 py-12 md:py-20 bg-gradient-to-b from-transparent via-[#FF6B5A]/5 to-transparent">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 md:mb-16"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-[#FF6B5A]/10 border border-[#FF6B5A]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-7 h-7 md:w-10 md:h-10 text-[#FF6B5A]" />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white">{t.solutionTitle}</h2>
                  <p className="text-gray-400 text-sm md:text-lg">{t.solutionSubtitle}</p>
                </div>
              </div>
              <p className="text-gray-300 text-base md:text-xl max-w-4xl leading-relaxed">
                {t.solutionIntro}
              </p>
            </motion.div>

            {/* Solution Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-16 md:mb-24">
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
                    <div className="relative p-4 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl hover:border-[#FF6B5A]/30 transition-all duration-300 h-full">
                      <div className="w-10 h-10 md:w-14 md:h-14 bg-[#FF6B5A]/10 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                        <Icon className="w-5 h-5 md:w-7 md:h-7 text-[#FF6B5A]" />
                      </div>
                      <span className="inline-block px-2 md:px-3 py-1 bg-[#FF6B5A]/20 text-[#FF6B5A] text-[10px] md:text-xs font-bold rounded-full mb-2 md:mb-3">
                        {solution.highlight}
                      </span>
                      <h3 className="text-sm md:text-xl font-bold text-white mb-2">{solution.title}</h3>
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 hidden sm:block">{solution.description}</p>
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {solution.features.map((feature, i) => (
                          <span key={i} className="px-2 py-0.5 md:py-1 bg-white/5 text-gray-400 text-[9px] md:text-xs rounded-md hidden md:inline-block">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* How It Works */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 md:mb-24"
            >
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 md:mb-4">{t.howItWorksTitle}</h2>
                <p className="text-gray-400 text-sm md:text-lg">{t.howItWorksSubtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {t.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                  >
                    {index < t.steps.length - 1 && (
                      <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#FF6B5A]/50 to-transparent -z-10" />
                    )}
                    <div className="text-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 bg-gradient-to-br from-[#FF6B5A] to-orange-500 rounded-2xl flex items-center justify-center">
                        <span className="text-3xl md:text-4xl font-black text-black">{step.number}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{step.title}</h3>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-10 md:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 md:mb-4">{t.comparisonTitle}</h2>
              <p className="text-gray-400 text-sm md:text-lg">{t.comparisonSubtitle}</p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {/* Before */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-4 md:p-8 bg-red-500/5 border border-red-500/20 rounded-2xl"
              >
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <X className="w-6 h-6 md:w-8 md:h-8 text-red-500" />
                  <h3 className="text-lg md:text-2xl font-bold text-red-400">{t.before.title}</h3>
                </div>
                <ul className="space-y-2 md:space-y-4">
                  {t.before.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3">
                      <X className="w-4 h-4 md:w-5 md:h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400 text-xs md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* After */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-4 md:p-8 bg-[#FF6B5A]/5 border border-[#FF6B5A]/20 rounded-2xl"
              >
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-[#FF6B5A]" />
                  <h3 className="text-lg md:text-2xl font-bold text-[#FF6B5A]">{t.after.title}</h3>
                </div>
                <ul className="space-y-2 md:space-y-4">
                  {t.after.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#FF6B5A] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-xs md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="px-4 md:px-6 py-12 md:py-20 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-10 md:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3">{t.industriesTitle}</h2>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
              {t.industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-4 md:p-6 bg-black/50 border border-white/10 rounded-xl hover:border-[#FF6B5A]/30 transition-all duration-300 text-center"
                  >
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#FF6B5A] mx-auto mb-2 md:mb-3" />
                    <h4 className="font-bold text-xs md:text-sm mb-1">{industry.label}</h4>
                    <span className="text-[#FF6B5A] text-xs md:text-sm font-bold">{industry.count}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-6 md:p-12 bg-gradient-to-br from-[#FF6B5A]/10 to-purple-500/10 border border-[#FF6B5A]/20 rounded-2xl md:rounded-3xl">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 md:mb-3">{t.statsTitle}</h2>
                <p className="text-gray-400 text-center mb-8 md:mb-12 text-sm md:text-base">{t.statsSubtitle}</p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
                  {t.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-2xl md:text-4xl font-black text-[#FF6B5A] mb-1">{stat.value}</div>
                      <div className="text-gray-500 text-[10px] md:text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partner Opportunity Section */}
        <section className="px-4 md:px-6 py-12 md:py-20 bg-gradient-to-b from-transparent via-green-950/10 to-transparent">
          <div className="max-w-7xl mx-auto">
            {/* Partner Hero */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full mb-6">
                <Handshake className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-medium">Earn Money With Your Skills</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6">
                {t.partnerTitle} <span className="text-green-400">{t.partnerTitleHighlight}</span>
              </h2>

              <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-6">
                {t.partnerSubtitle}
              </p>

              <p className="text-sm md:text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed">
                {t.partnerIntro}
              </p>
            </motion.div>

            {/* How Partner Works - 4 Steps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 md:mb-24"
            >
              <h3 className="text-2xl md:text-3xl font-black text-center mb-10 md:mb-12">{t.partnerHowTitle}</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {t.partnerHowSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative"
                  >
                    {index < t.partnerHowSteps.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-green-500/50 to-transparent -z-10" />
                    )}
                    <div className="text-center p-4 md:p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-green-500/30 transition-all duration-300 h-full">
                      <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                        <span className="text-2xl md:text-3xl font-black text-black">{step.number}</span>
                      </div>
                      <h4 className="text-sm md:text-lg font-bold mb-2">{step.title}</h4>
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed hidden sm:block">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Partner Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 md:mb-24"
            >
              <h3 className="text-2xl md:text-3xl font-black text-center mb-10 md:mb-12">{t.partnerBenefitsTitle}</h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {t.partnerBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 md:p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-green-500/30 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-green-500/20 transition-colors">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-green-400" />
                      </div>
                      <h4 className="text-sm md:text-lg font-bold mb-2">{benefit.title}</h4>
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed hidden sm:block">{benefit.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Partner Examples - Jobs & Earnings */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 md:mb-24"
            >
              <div className="text-center mb-10 md:mb-12">
                <h3 className="text-2xl md:text-3xl font-black mb-2">{t.partnerExamplesTitle}</h3>
                <p className="text-gray-400 text-sm md:text-base">{t.partnerExamplesSubtitle}</p>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
                {t.partnerExamples.map((example, index) => {
                  const Icon = example.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="p-3 md:p-4 bg-black/50 border border-white/10 rounded-xl hover:border-green-500/30 transition-all duration-300 text-center group cursor-pointer"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                      </div>
                      <h4 className="font-bold text-xs md:text-sm mb-1">{example.title}</h4>
                      <span className="text-gray-500 text-[10px] md:text-xs">{example.tagline}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Partner Possibilities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 md:mb-24"
            >
              <h3 className="text-2xl md:text-3xl font-black text-center mb-10 md:mb-12">{t.partnerStoriesTitle}</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {t.partnerStories.map((story, index) => {
                  const iconMap: { [key: string]: typeof GraduationCap } = {
                    graduation: GraduationCap,
                    home: Heart,
                    briefcase: Briefcase
                  };
                  const Icon = iconMap[story.icon] || Star;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      className="p-6 md:p-8 bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-500/20 rounded-2xl text-center hover:border-green-500/40 transition-all duration-300"
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-green-500/10 rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-green-400" />
                      </div>

                      <h4 className="font-bold text-lg md:text-xl mb-3 text-white">{story.title}</h4>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        {story.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Partner CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center p-8 md:p-12 bg-gradient-to-br from-green-500/20 to-emerald-600/10 border border-green-500/30 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />
              </div>

              <div className="relative z-10">
                <BadgeDollarSign className="w-12 h-12 md:w-16 md:h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl font-black mb-2 md:mb-3">{t.partnerCtaTitle}</h3>
                <p className="text-gray-400 text-sm md:text-base mb-6 max-w-xl mx-auto">{t.partnerCtaSubtitle}</p>

                <a
                  href="https://t.me/officialyago"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded-xl transition-all text-sm md:text-base"
                >
                  <Rocket className="w-4 h-4 md:w-5 md:h-5" />
                  {t.partnerCtaButton}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-10 md:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 md:mb-4">{t.visionTitle}</h2>
              <p className="text-gray-400 text-sm md:text-lg mb-6 md:mb-8">{t.visionSubtitle}</p>
              <p className="text-gray-300 text-sm md:text-lg max-w-4xl mx-auto leading-relaxed">
                {t.visionText}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              {t.visionPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 md:p-6 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl hover:border-[#FF6B5A]/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FF6B5A]/10 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#FF6B5A]" />
                    </div>
                    <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2">{point.title}</h3>
                    <p className="text-gray-400 text-xs md:text-sm hidden sm:block">{point.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center p-8 md:p-16 bg-gradient-to-br from-[#FF6B5A]/20 to-orange-500/10 border border-[#FF6B5A]/30 rounded-3xl relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B5A]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />
              </div>

              <div className="relative z-10">
                <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-[#FF6B5A] mx-auto mb-4 md:mb-6" />
                <h2 className="text-2xl md:text-4xl font-black mb-3 md:mb-4">{t.ctaTitle}</h2>
                <p className="text-gray-400 text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">{t.ctaSubtitle}</p>

                <a
                  href="https://t.me/officialyago"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-[#FF6B5A] hover:bg-[#FF8A7A] text-black font-bold rounded-xl transition-all text-base md:text-lg"
                >
                  {t.ctaButton}
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 md:py-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-xs md:text-sm text-center md:text-left">{t.footer.copyright}</div>
          <div className="flex gap-6">
            <Link href="/" className="text-gray-500 hover:text-white transition-colors text-sm py-2">
              {t.footer.home}
            </Link>
            <Link href="/team" className="text-gray-500 hover:text-white transition-colors text-sm py-2">
              {t.footer.team}
            </Link>
            <Link href="/roadmap" className="text-gray-500 hover:text-white transition-colors text-sm py-2">
              {t.footer.roadmap}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
