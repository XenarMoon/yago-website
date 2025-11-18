import {
  Sparkles, Clock, Shield, Zap, Globe, MessageCircle, Calendar, HeadphonesIcon,
  Plane, Utensils, ShoppingBag, Home, Car, Gift, Briefcase, Heart,
  Music, ShieldAlert, GraduationCap, Smartphone, Brain, ArrowRight,
  Check, Star, Award
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/v1/Button';
import { BenefitCard } from '@/components/v1/BenefitCard';
import { FeatureCard } from '@/components/v1/FeatureCard';
import { TestimonialCard } from '@/components/v1/TestimonialCard';
import { FAQItem } from '@/components/v1/FAQItem';
import { UseCaseCard } from '@/components/v1/UseCaseCard';

export default function YagoV1() {
  const benefits = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Your personal assistant never sleeps. Get help anytime, anywhere, day or night."
    },
    {
      icon: Zap,
      title: "Instant Responses",
      description: "Lightning-fast AI processing delivers solutions in seconds, not hours."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption keeps your conversations and data completely private."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Book services, make reservations, and get assistance in over 150 countries."
    },
    {
      icon: MessageCircle,
      title: "Natural Conversations",
      description: "Chat naturally like you would with a human assistant. No commands to learn."
    },
    {
      icon: Sparkles,
      title: "AI-Powered Intelligence",
      description: "Advanced AI learns your preferences and delivers personalized recommendations."
    },
    {
      icon: Calendar,
      title: "Proactive Reminders",
      description: "Never miss important events with intelligent scheduling and notifications."
    },
    {
      icon: HeadphonesIcon,
      title: "White-Glove Service",
      description: "Premium concierge experience with attention to every detail of your request."
    }
  ];

  const features = [
    { icon: Plane, title: "Travel Planning", description: "Flights, hotels, itineraries crafted perfectly" },
    { icon: Utensils, title: "Restaurant Reservations", description: "Best tables at top venues worldwide" },
    { icon: ShoppingBag, title: "Personal Shopping", description: "Find and purchase anything you need" },
    { icon: Home, title: "Home Services", description: "Cleaning, repairs, maintenance on demand" },
    { icon: Car, title: "Transportation", description: "Rideshare, rentals, chauffeur services" },
    { icon: Gift, title: "Gift Recommendations", description: "Thoughtful gifts for any occasion" },
    { icon: Briefcase, title: "Business Support", description: "Research, scheduling, admin tasks" },
    { icon: Heart, title: "Wellness & Health", description: "Spa bookings, fitness, medical appointments" },
    { icon: Music, title: "Entertainment", description: "Tickets, events, VIP experiences" },
    { icon: ShieldAlert, title: "Safety", description: "Immediate help when you feel unsafe — YAGO can alert police or request emergency medical support" },
    { icon: GraduationCap, title: "Learning & Development", description: "Course recommendations and tutoring" },
    { icon: Smartphone, title: "Tech Support", description: "Device setup and troubleshooting help" }
  ];

  const useCases = [
    {
      image: "https://images.unsplash.com/photo-1667987566780-3b31fa5485c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0cmF2ZWwlMjBkZXN0aW5hdGlvbnxlbnwxfHx8fDE3NjMxMjU5Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Spontaneous Weekend Getaway",
      description: "Sarah asked YAGO to plan a romantic weekend in Paris. Within minutes, she had first-class flights, a 5-star hotel reservation, dinner at a Michelin restaurant, and tickets to a private gallery viewing—all perfectly coordinated."
    },
    {
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NjMwNDcwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Last-Minute Client Dinner",
      description: "Marcus needed an impressive venue for important clients arriving in 4 hours. YAGO secured a private dining room at the city's hottest restaurant, arranged wine pairings, and organized luxury car service."
    },
    {
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNjMwNzIzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Personal Wellness Retreat",
      description: "Emma wanted a digital detox weekend. YAGO found a luxury wellness resort, booked spa treatments, arranged private yoga sessions, and organized healthy meal plans—creating the perfect escape."
    },
    {
      image: "https://images.unsplash.com/photo-1606132653399-36248f2e2a99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHNob3BwaW5nJTIwbHV4dXJ5fGVufDF8fHx8MTc2MzEzMzExMnww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Anniversary Gift Hunt",
      description: "David had no idea what to get for his wife's milestone birthday. YAGO researched her interests, found a rare vintage watch she'd mentioned years ago, and arranged surprise delivery with custom packaging."
    },
    {
      image: "https://images.unsplash.com/photo-1665491961263-2c9f8deebf63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZXZlbnQlMjB2ZW51ZXxlbnwxfHx8fDE3NjMxMzMxMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Corporate Event Planning",
      description: "Lisa needed to organize a product launch for 200 people in 2 weeks. YAGO handled venue sourcing, catering, AV setup, invitations, and coordinated with vendors—executing a flawless event."
    },
    {
      image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzAyNDY3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Executive Time Optimization",
      description: "James, a busy CEO, uses YAGO to manage his entire lifestyle—from dry cleaning pickup and grocery delivery to scheduling family activities and booking personal training sessions."
    }
  ];

  const testimonials = [
    {
      avatar: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzAyNDY3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Alexandra Chen",
      role: "Tech Entrepreneur",
      text: "YAGO has completely transformed how I manage my time. It's like having a world-class assistant available 24/7. The AI understands exactly what I need before I even finish typing."
    },
    {
      avatar: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzAyNDY3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Michael Foster",
      role: "Investment Banker",
      text: "I've tried every productivity tool out there. YAGO is different—it actually delivers. From booking impossible reservations to handling my entire travel schedule, it's indispensable."
    },
    {
      avatar: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzAyNDY3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Sofia Rodriguez",
      role: "Creative Director",
      text: "YAGO feels like magic. I can focus on my creative work while it handles everything else—shopping, appointments, travel. The token system is brilliant and totally fair."
    },
    {
      avatar: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzAyNDY3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      name: "David Park",
      role: "Venture Capitalist",
      text: "The Premium NFT membership was the best investment I made this year. Unlimited access to YAGO has saved me countless hours and opened doors I didn't know existed."
    }
  ];

  const faqs = [
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
      answer: "YAGO can help with travel bookings, restaurant reservations, shopping, gift recommendations, home services, event planning, research, scheduling, and much more. If you can ask a human assistant, you can ask YAGO."
    },
    {
      question: "How quickly does YAGO respond?",
      answer: "YAGO typically responds within seconds. Complex requests that require booking confirmations or vendor coordination may take a couple minutes."
    },
    {
      question: "Can YAGO make actual bookings and purchases?",
      answer: "Yes, YAGO can make real reservations, bookings, and purchases on your behalf with your authorization. We integrate with thousands of services worldwide."
    },
    {
      question: "Which countries does YAGO support?",
      answer: "YAGO operates in over 150 countries and can assist with requests globally, though availability of certain services may vary by region."
    },
    {
      question: "Do I need to download an app?",
      answer: "You can start immediately on Telegram without any downloads. Native iOS and Android apps are coming soon with enhanced features."
    },
    {
      question: "What if YAGO can't fulfill my request?",
      answer: "If YAGO cannot complete a request, you won't be charged a token. We'll always let you know what's possible and suggest alternatives."
    },
    {
      question: "Can I get a refund on tokens?",
      answer: "Unused tokens never expire and can always be used. We offer refunds on token packages within 7 days if you haven't used any tokens."
    },
    {
      question: "How is YAGO different from other AI assistants?",
      answer: "YAGO is specifically designed for lifestyle concierge services and can take real-world actions—not just provide information. We combine AI intelligence with actual execution capabilities."
    },
    {
      question: "Is there a free trial?",
      answer: "New users receive 3 free tokens to try YAGO and experience the service before purchasing a package."
    },
    {
      question: "Can multiple people share one account?",
      answer: "Each account is personal and tied to your preferences. For families or teams, we recommend separate accounts for the best personalized experience."
    },
    {
      question: "How do I become a Premium member?",
      answer: "Premium NFT memberships are available for purchase. Contact our team through the app for details on pricing and availability."
    }
  ];

  return (
    <div className="bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0F1C2E] to-[#0A0A0A]"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#F5F5F5] mb-6">
                YAGO CONCIERGE — Your 24/7 AI Lifestyle Assistant
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-xl leading-relaxed">
                Experience the future of personal assistance. YAGO is your premium AI concierge,
                available anytime on Telegram, iOS, and Android. From travel planning to restaurant
                reservations, we handle life&apos;s details so you can focus on what matters.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Start in Telegram</Button>
                <Button variant="secondary">iOS & Android – Coming Soon</Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37]/30 rounded-full blur-3xl"></div>
              <Image
                src="https://images.unsplash.com/photo-1578242174372-e26b3681587f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjBtb2NrdXAlMjBibGFja3xlbnwxfHx8fDE3NjMxMzMxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="YAGO iPhone Mockup"
                width={500}
                height={800}
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Story */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-8">
            The Future of Personal Assistance
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Imagine never having to waste time on mundane tasks again. No more endless phone calls
            to make reservations, no more hours spent researching the perfect gift, no more stress
            about coordinating complex travel plans.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            YAGO transforms your smartphone into a gateway to effortless living. Powered by
            cutting-edge AI and backed by a global network of premium service providers, YAGO
            delivers white-glove concierge service at a fraction of the traditional cost.
            Welcome to the future of personal assistance.
          </p>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-32 bg-gradient-to-b from-[#0A0A0A] to-[#0F1C2E]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-[#0A0A0A]/80 rounded-2xl p-10 border border-[#D4AF37]/20">
              <h3 className="text-3xl font-bold text-[#D4AF37] mb-6">The Problem</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">•</span>
                  <span>Wasting hours on phone calls and research</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">•</span>
                  <span>Missing out on experiences due to booking complexity</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">•</span>
                  <span>Juggling multiple apps and services</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">•</span>
                  <span>No time for life&apos;s important moments</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">•</span>
                  <span>Traditional concierge services are expensive</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">•</span>
                  <span>Limited availability and slow response times</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-[#0A0A0A] mb-6">YAGO Solves All of It</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <span>Instant responses, 24/7 availability</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <span>Access to exclusive venues and experiences</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <span>One AI assistant for all your needs</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <span>Reclaim your time for what truly matters</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <span>Affordable token-based pricing</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <span>AI-powered speed and efficiency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Premium Benefits */}
      <section className="py-32 bg-gradient-to-b from-[#0F1C2E] to-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">Premium Benefits</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Experience concierge service that exceeds expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">How It Works</h2>
            <p className="text-gray-300 text-lg">Three simple steps to effortless living</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-semibold text-[#F5F5F5] mb-3">1. Ask Anything</h3>
                <p className="text-gray-400">
                  Simply message YAGO with your request in natural language
                </p>
              </div>

              <div className="hidden md:flex justify-center items-center">
                <ArrowRight className="w-8 h-8 text-[#D4AF37]" />
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-semibold text-[#F5F5F5] mb-3">2. AI Processes</h3>
                <p className="text-gray-400">
                  Advanced AI understands and coordinates all the details
                </p>
              </div>

              <div className="hidden md:flex justify-center items-center">
                <ArrowRight className="w-8 h-8 text-[#D4AF37]" />
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-semibold text-[#F5F5F5] mb-3">3. Done</h3>
                <p className="text-gray-400">
                  Get instant confirmations and enjoy your time saved
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mega Features */}
      <section className="py-32 bg-gradient-to-b from-[#0A0A0A] to-[#0F1C2E]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">Everything You Need</h2>
            <p className="text-gray-300 text-lg">One assistant for your entire lifestyle</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Showcase */}
      <section className="py-32 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6">The First AI Lifestyle SuperApp</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Experience YAGO on your terms. Start instantly on Telegram, or wait for our native
              iOS and Android apps featuring enhanced capabilities, offline support, voice commands,
              and seamless integration with your digital life. One platform, unlimited possibilities.
            </p>
          </div>

          <div className="flex justify-center gap-8 items-end flex-wrap max-w-5xl mx-auto">
            <div className="transform rotate-[-8deg] hover:rotate-0 transition-transform duration-300">
              <Image
                src="https://images.unsplash.com/photo-1578242174372-e26b3681587f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjBtb2NrdXAlMjBibGFja3xlbnwxfHx8fDE3NjMxMzMxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="YAGO App Screen 1"
                width={256}
                height={512}
                className="w-64 drop-shadow-2xl"
              />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Image
                src="https://images.unsplash.com/photo-1578242174372-e26b3681587f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjBtb2NrdXAlMjBibGFja3xlbnwxfHx8fDE3NjMxMzMxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="YAGO App Screen 2"
                width={288}
                height={576}
                className="w-72 drop-shadow-2xl"
              />
            </div>
            <div className="transform rotate-[8deg] hover:rotate-0 transition-transform duration-300">
              <Image
                src="https://images.unsplash.com/photo-1578242174372-e26b3681587f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjBtb2NrdXAlMjBibGFja3xlbnwxfHx8fDE3NjMxMzMxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="YAGO App Screen 3"
                width={256}
                height={512}
                className="w-64 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NFT Premium */}
      <section className="py-32 bg-gradient-to-br from-[#0A0A0A] via-[#1a1410] to-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFD700] flex items-center justify-center shadow-2xl shadow-[#D4AF37]/50">
              <Award className="w-16 h-16 text-[#0A0A0A]" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6">Lifetime Unlimited Access</h2>
            <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
              Join an exclusive community of Premium members with unlimited YAGO access,
              forever. One payment, lifetime benefits.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#D4AF37]/30">
                <ul className="space-y-4 text-left">
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Unlimited requests forever</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <span className="text-gray-300">VIP priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Exclusive features first</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Premium member badge</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#D4AF37]/30">
                <ul className="space-y-4 text-left">
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Access to premium partners</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Transferable NFT ownership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Members-only events</span>
                  </li>
                </ul>
              </div>
            </div>

            <button className="px-12 py-5 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0A0A0A] font-semibold rounded-full shadow-2xl shadow-[#D4AF37]/50 hover:shadow-[#D4AF37]/70 transition-all duration-300 transform hover:scale-105">
              Become a Premium Member
            </button>
          </div>
        </div>
      </section>

      {/* Use Case Stories */}
      <section className="py-32 bg-white text-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Real Stories, Real Results</h2>
            <p className="text-gray-600 text-lg">See how YAGO transforms everyday moments</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-24">
            {useCases.map((useCase, index) => (
              <UseCaseCard
                key={index}
                {...useCase}
                imageOnRight={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#F5F5F5] text-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Thousands</h2>
            <p className="text-gray-600 text-lg">See what our members are saying</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-white text-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Everything you need to know about YAGO</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-br from-[#0A0A0A] via-[#0F1C2E] to-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-8">
            Start Your New Lifestyle Today
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Join thousands of people who have reclaimed their time and elevated their lifestyle
            with YAGO. Your AI concierge is ready to assist you 24/7.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="primary">Start in Telegram</Button>
            <Button variant="secondary">iOS & Android – Coming Soon</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-[#D4AF37]/20 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold text-[#D4AF37] mb-4">YAGO</div>
              <p className="text-gray-400">
                Your 24/7 AI Lifestyle Assistant
              </p>
            </div>

            <div>
              <h4 className="text-[#F5F5F5] font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Premium NFT</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Mobile Apps</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#F5F5F5] font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#F5F5F5] font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#D4AF37]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2025 YAGO Concierge. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
