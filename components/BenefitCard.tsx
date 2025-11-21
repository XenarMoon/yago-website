import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#FF6B5A]/30 hover:shadow-lg hover:shadow-[#FF6B5A]/20 transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-full border-2 border-[#FF6B5A] flex items-center justify-center mb-6 bg-[#FF6B5A]/10">
        <Icon className="w-7 h-7 text-[#FF6B5A]" />
      </div>
      <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </motion.div>
  );
}
