import { Check } from 'lucide-react';

interface PricingCardProps {
  tokens: number;
  price: string;
  benefits: string[];
  popular?: boolean;
}

export function PricingCard({ tokens, price, benefits, popular }: PricingCardProps) {
  return (
    <div className={`bg-white rounded-2xl p-8 ${popular ? 'border-2 border-[#D4AF37] shadow-xl' : 'border border-[#E6E6E6] shadow-md'} hover:shadow-xl transition-all duration-300`}>
      {popular && (
        <div className="text-[#D4AF37] mb-4">Most Popular</div>
      )}
      <div className="text-[#0A0A0A] mb-2">{tokens} Tokens</div>
      <div className="text-[#0A0A0A] mb-6">{price}</div>
      <ul className="space-y-3 mb-8">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">{benefit}</span>
          </li>
        ))}
      </ul>
      <button className="w-full py-3 rounded-full border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all duration-300">
        Get Started
      </button>
    </div>
  );
}
