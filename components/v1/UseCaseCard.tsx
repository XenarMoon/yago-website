import Image from 'next/image';

interface UseCaseCardProps {
  image: string;
  title: string;
  description: string;
  imageOnRight?: boolean;
}

export function UseCaseCard({ image, title, description, imageOnRight }: UseCaseCardProps) {
  return (
    <div className={`flex flex-col md:flex-row gap-8 items-center ${imageOnRight ? 'md:flex-row-reverse' : ''}`}>
      <div className="flex-1">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-[#0A0A0A] text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
