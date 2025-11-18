import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="w-14 h-14 rounded-full border-2 border-[#D4AF37] flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-[#D4AF37]" />
      </div>
      <h3 className="text-[#0A0A0A] mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
