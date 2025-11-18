'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Zap, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Tell Us What You Need',
    description: 'Chat with our AI assistant or speak directly with a concierge. We understand your request instantly.',
    icon: MessageSquare,
  },
  {
    number: '02',
    title: 'We Handle Everything',
    description: 'Our team of AI and human experts work together to fulfill your request with precision.',
    icon: Zap,
  },
  {
    number: '03',
    title: 'Enjoy Your Free Time',
    description: 'Get real-time updates. Everything is handled perfectly so you can focus on what matters.',
    icon: CheckCircle,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-4">
            Effortlessly Simple
          </h2>
          <p className="text-xl text-brand-slate max-w-2xl mx-auto">
            Three easy steps to reclaim your time and simplify your life
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-gold via-brand-gold to-brand-gold opacity-20" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-brand-gold flex items-center justify-center relative z-10">
                    <span className="text-3xl font-serif font-bold text-brand-gold">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-brand-gold" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-serif font-bold text-brand-navy mb-4">
                  {step.title}
                </h3>
                <p className="text-brand-slate leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
