import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  avatar: string;
  name: string;
  role: string;
  text: string;
}

export function TestimonialCard({ avatar, name, role, text }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#FF6B5A]/30 transition-all duration-300 relative"
    >
      <Quote className="w-10 h-10 text-[#FF6B5A]/20 absolute top-4 right-4" />
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF6B5A] to-[#FF8A7A] p-0.5">
          <Image
            src={avatar}
            alt={name}
            width={64}
            height={64}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div>
          <div className="text-white font-semibold">{name}</div>
          <div className="text-gray-400 text-sm">{role}</div>
        </div>
      </div>
      <p className="text-gray-300 italic leading-relaxed">&ldquo;{text}&rdquo;</p>
    </motion.div>
  );
}
