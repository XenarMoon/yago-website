'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#E6E6E6]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-[#D4AF37] transition-colors duration-300"
      >
        <span className="text-[#0A0A0A] font-medium">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#D4AF37] transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
}
