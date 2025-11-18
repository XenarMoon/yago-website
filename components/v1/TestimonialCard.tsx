import Image from 'next/image';

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
        <Image
          src={avatar}
          alt={name}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <div className="text-[#0A0A0A] font-semibold">{name}</div>
          <div className="text-gray-500 text-sm">{role}</div>
        </div>
      </div>
      <p className="text-gray-600 italic">&ldquo;{text}&rdquo;</p>
    </div>
  );
}
