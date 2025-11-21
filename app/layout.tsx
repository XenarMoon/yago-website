import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'YAGO | Coming Soon',
  description: 'Experience the epitome of luxury and sophistication. An exclusive journey awaits. Premium concierge service powered by AI and human expertise.',
  keywords: ['luxury', 'premium', 'AI concierge', 'personal assistant', 'lifestyle management', 'concierge service', 'virtual assistant', 'Yago'],
  authors: [{ name: 'Yago Team' }],
  openGraph: {
    title: 'YAGO | Coming Soon',
    description: 'Experience the epitome of luxury and sophistication. An exclusive journey awaits.',
    images: ['/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YAGO | Coming Soon',
    description: 'Experience the epitome of luxury and sophistication. An exclusive journey awaits.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <GoogleAnalytics />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
