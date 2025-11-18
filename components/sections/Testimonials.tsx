'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Yago has become my secret weapon. I can't imagine managing my schedule without it.",
    author: 'Sarah Chen',
    role: 'Startup Founder',
    rating: 5,
  },
  {
    quote: 'The combination of AI and human touch is perfect. Fast responses, thoughtful execution.',
    author: 'Michael Rodriguez',
    role: 'Real Estate Developer',
    rating: 5,
  },
  {
    quote: "Worth every penny. Yago saves me 10+ hours a week and handles things I'd never have time for.",
    author: 'Emily Thompson',
    role: 'Marketing Executive',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-brand-cream">
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
            What Our Users Say
          </h2>
          <p className="text-xl text-brand-slate max-w-2xl mx-auto">
            Join thousands of satisfied users who trust Yago every day
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <Quote className="h-10 w-10 text-brand-gold mb-6 opacity-50" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-brand-gold text-brand-gold"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg text-brand-navy mb-6 leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-brand-navy">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-brand-slate">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
