import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#FF6B5A]/30 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-[#FF6B5A]/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-[#FF6B5A]" />
      </div>
      <h4 className="text-white font-semibold mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
}
