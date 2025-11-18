'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Check, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'Perfect for trying out Yago',
    features: [
      '10 requests per month',
      'Email & chat support',
      '24-hour response time',
      'Basic AI assistance',
      'Mobile app access',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$149',
    period: '/month',
    description: 'Most popular for busy professionals',
    features: [
      'Unlimited requests',
      'Priority support',
      '1-hour response time',
      'Advanced AI + human concierge',
      'Mobile app access',
      'Dedicated account manager',
      'Payment integrations',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For teams and VIP clients',
    features: [
      'Everything in Professional',
      'Instant response time',
      'Personal concierge team',
      'VIP access & perks',
      'Custom integrations',
      'White-glove service',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white">
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
            Plans Built for You
          </h2>
          <p className="text-xl text-brand-slate max-w-2xl mx-auto">
            Choose the perfect plan for your lifestyle and needs
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-brand-gold text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Crown className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <Card
                className={`h-full ${
                  plan.popular
                    ? 'border-4 border-brand-gold shadow-2xl scale-105'
                    : 'border-2 border-gray-200'
                }`}
              >
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-base mb-6">
                    {plan.description}
                  </CardDescription>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-brand-navy">
                      {plan.price}
                    </span>
                    <span className="text-brand-slate ml-2">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span className="text-brand-slate">{feature}</span>
                    </div>
                  ))}
                </CardContent>

                <CardFooter className="pt-6">
                  <Button
                    className="w-full"
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
