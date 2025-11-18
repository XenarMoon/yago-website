import { ImageWithFallback } from './figma/ImageWithFallback';

interface TestimonialCardProps {
  avatar: string;
  name: string;
  role: string;
  text: string;
}

export function TestimonialCard({ avatar, name, role, text }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md">
      <div className="flex items-center gap-4 mb-6">
        <ImageWithFallback 
          src={avatar} 
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <div className="text-[#0A0A0A]">{name}</div>
          <div className="text-gray-500">{role}</div>
        </div>
      </div>
      <p className="text-gray-600 italic">&ldquo;{text}&rdquo;</p>
    </div>
  );
}
