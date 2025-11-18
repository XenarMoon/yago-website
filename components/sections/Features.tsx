'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Zap, User, Smartphone, Lock, CreditCard, Globe } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'AI-Powered Intelligence',
    description: 'Smart request understanding with natural conversation flow that learns your preferences over time.',
  },
  {
    icon: User,
    title: 'Human Expertise',
    description: 'Real concierges handle complex tasks with 24/7 availability and a personal touch when needed.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Experience',
    description: 'Beautiful iOS & Android apps with real-time updates and push notifications.',
  },
  {
    icon: Lock,
    title: 'Secure & Private',
    description: 'End-to-end encryption, GDPR compliant. Your data stays private and secure.',
  },
  {
    icon: CreditCard,
    title: 'Integrated Payments',
    description: 'Click, Payme, Stripe support with secure transactions and no hidden fees.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Services in 50+ countries with local expertise everywhere and multilingual support.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-4">
            Why Choose Yago
          </h2>
          <p className="text-xl text-brand-slate max-w-2xl mx-auto">
            Experience the perfect blend of cutting-edge AI and human expertise
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-2 hover:border-brand-gold transition-all group">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-brand-gold/10 flex items-center justify-center mb-4 group-hover:bg-brand-gold/20 transition-colors">
                      <Icon className="h-7 w-7 text-brand-gold" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
