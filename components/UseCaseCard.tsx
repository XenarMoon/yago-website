import Image from 'next/image';
import { motion } from 'framer-motion';

interface UseCaseCardProps {
  image: string;
  title: string;
  description: string;
  imageOnRight?: boolean;
}

export function UseCaseCard({ image, title, description, imageOnRight = false }: UseCaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`grid md:grid-cols-2 gap-12 items-center ${imageOnRight ? 'md:flex-row-reverse' : ''}`}
    >
      <div className={imageOnRight ? 'md:order-2' : ''}>
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="rounded-2xl shadow-2xl w-full h-auto object-cover"
        />
      </div>
      <div className={imageOnRight ? 'md:order-1' : ''}>
        <h3 className="text-white text-3xl font-bold mb-4">{title}</h3>
        <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
