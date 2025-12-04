import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YAGO Demo | AI500 Stage 2',
  description: 'Try YAGO - Your AI-Powered Personal Concierge Assistant. Live demo with interactive iOS app.',
  openGraph: {
    title: 'YAGO Demo | AI500 Stage 2',
    description: 'Try YAGO - Your AI-Powered Personal Concierge Assistant. Live demo with interactive iOS app.',
    type: 'website',
  },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="demo-page [&_*]:!cursor-auto [&_a]:!cursor-pointer [&_button]:!cursor-pointer [&_input]:!cursor-text [&_textarea]:!cursor-text">
      {children}
    </div>
  );
}
