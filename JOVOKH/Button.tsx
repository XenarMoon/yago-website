interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ variant = 'primary', children, onClick }: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-full transition-all duration-300";
  
  const variants = {
    primary: "bg-[#D4AF37] text-[#0A0A0A] hover:bg-[#E5C158] shadow-lg shadow-[#D4AF37]/20",
    secondary: "border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
