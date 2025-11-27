'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Building2, ArrowUpRight } from 'lucide-react';

interface PartnersProps {
  language?: 'en' | 'uz';
}

const translations = {
  en: {
    badge: "BACKED BY THE BEST",
    title: "OUR",
    titleHighlight: "PARTNERS",
    subtitle: "Strategic partnerships powering YAGO's mission"
  },
  uz: {
    badge: "ENG YAXSHILAR TOMONIDAN QO'LLAB-QUVVATLANADI",
    title: "BIZNING",
    titleHighlight: "HAMKORLAR",
    subtitle: "YAGO missiyasini quvvatlaydigan strategik hamkorliklar"
  }
};

const partners = [
  {
    name: "Natex Labs",
    logo: "/partners/natex-labs-logo.png",
    url: "https://natex.io/",
    color: "from-purple-500 via-blue-500 to-pink-500"
  },
  {
    name: "FIT",
    logo: "/partners/FIT.png",
    url: "https://1it.uz/",
    color: "from-blue-500 via-cyan-500 to-teal-500"
  },
  {
    name: "INDAO",
    logo: "/partners/INDAO.png",
    url: "https://indao.io/",
    color: "from-orange-500 via-red-500 to-pink-500"
  },
  {
    name: "Unicorn",
    logo: "/partners/Unicorn.png",
    url: "https://t.me/yunikornuz",
    color: "from-violet-500 via-purple-500 to-fuchsia-500"
  },
  {
    name: "Datamicron",
    logo: "/partners/datamicron.webp",
    url: "https://datamicron.com/",
    color: "from-green-500 via-emerald-500 to-teal-500"
  }
];

export default function Partners({ language = 'en' }: PartnersProps) {
  const t = translations[language];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs md:text-sm font-medium mb-4 md:mb-6">
            <Building2 className="w-3 h-3 md:w-4 md:h-4" />
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6">
            {t.title} <span className="text-[#FF6B5A]">{t.titleHighlight}</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6"
        >
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              {/* Glow Effect on Hover */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${partner.color} rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-[#FF6B5A]/30 active:border-[#FF6B5A]/30 transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[140px] md:min-h-[180px]">
                {/* Logo Container */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 flex items-center justify-center mb-3 md:mb-4 overflow-hidden">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={128}
                    height={128}
                    className="object-contain w-full h-full filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>

                {/* Partner Name */}
                <p className="text-white font-bold text-xs md:text-sm text-center">{partner.name}</p>

                {/* External Link Icon */}
                <ArrowUpRight className="absolute top-2 right-2 md:top-3 md:right-3 w-3 h-3 md:w-4 md:h-4 text-white/30 group-hover:text-[#FF6B5A] transition-colors" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
