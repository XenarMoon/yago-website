import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'gold' | 'white' | 'navy';
}

export default function Logo({ className, variant = 'gold' }: LogoProps) {
  const colorClasses = {
    gold: 'text-brand-gold',
    white: 'text-white',
    navy: 'text-brand-navy',
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {/* Yago Favicon Logo */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="6" fill="#F59E0B"/>
        <path d="M16 8L8 12V16C8 21.5 11.5 26 16 26C20.5 26 24 21.5 24 16V12L16 8Z" fill="white" fillOpacity="0.3"/>
        <path d="M16 8L8 12V16C8 21.5 11.5 26 16 26C20.5 26 24 21.5 24 16V12L16 8Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 12V20M12 16H20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>

      {/* Logo Text */}
      <span className={cn('text-2xl font-serif font-bold', colorClasses[variant])}>
        YAGO
      </span>
    </div>
  );
}
