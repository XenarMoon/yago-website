import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-[#F5F5F5] rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-[#D4AF37]" />
      </div>
      <h4 className="text-[#0A0A0A] mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
