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
      {/* Logo Icon */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={colorClasses[variant]}
      >
        <path
          d="M20 4L4 12V20C4 29 10 36 20 36C30 36 36 29 36 20V12L20 4Z"
          fill="currentColor"
          fillOpacity="0.2"
        />
        <path
          d="M20 4L4 12V20C4 29 10 36 20 36C30 36 36 29 36 20V12L20 4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 14V26M14 20H26"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Logo Text */}
      <span className={cn('text-2xl font-serif font-bold', colorClasses[variant])}>
        YAGO
      </span>
    </div>
  );
}
