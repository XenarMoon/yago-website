'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Plane, ShoppingBag, Calendar, Briefcase, Heart, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Travel & Experiences',
    description: 'Flight bookings, hotel reservations, restaurant recommendations, event tickets',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: ShoppingBag,
    title: 'Personal Shopping',
    description: 'Gift sourcing, wardrobe updates, product research, delivery coordination',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
  },
  {
    icon: Calendar,
    title: 'Lifestyle Management',
    description: 'Appointment scheduling, errand running, home services, personal tasks',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: Briefcase,
    title: 'Business Support',
    description: 'Meeting coordination, research, travel planning, administrative tasks',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Fitness bookings, spa appointments, wellness consultations',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
  },
  {
    icon: Sparkles,
    title: 'Special Requests',
    description: 'Unique needs, surprise planning, anything you can imagine',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-brand-cream">
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
            What We Can Do For You
          </h2>
          <p className="text-xl text-brand-slate max-w-2xl mx-auto">
            From everyday tasks to extraordinary experiences, we handle it all
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:scale-105 transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="text-center">
                    <div className={`w-20 h-20 rounded-full ${service.bgColor} flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`h-10 w-10 ${service.color}`} />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
