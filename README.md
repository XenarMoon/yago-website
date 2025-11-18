# Yago - AI-Powered Concierge Service Website

A stunning, modern landing page for Yago, a premium AI-powered concierge service built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Elegant, professional design with smooth animations
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **Smooth Animations**: Powered by Framer Motion for delightful interactions
- **Type-Safe**: Written in TypeScript for better developer experience
- **Accessible**: WCAG compliant with proper semantic HTML

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Custom components with shadcn/ui patterns
- **Icons**: Lucide React
- **Fonts**: Inter (body) + Playfair Display (headings)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jovoxYago
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
jovoxYago/
├── app/
│   ├── layout.tsx              # Root layout with fonts and metadata
│   ├── page.tsx                # Main landing page
│   └── globals.css             # Global styles
├── components/
│   ├── Navbar.tsx              # Navigation bar with scroll effects
│   ├── sections/
│   │   ├── Hero.tsx           # Hero section
│   │   ├── Features.tsx       # Features grid
│   │   ├── Services.tsx       # Services cards
│   │   ├── HowItWorks.tsx     # How it works steps
│   │   ├── Testimonials.tsx   # Customer testimonials
│   │   ├── Pricing.tsx        # Pricing tiers
│   │   ├── CTA.tsx            # Call-to-action section
│   │   └── Footer.tsx         # Footer with links
│   └── ui/                     # Reusable UI components
│       ├── button.tsx
│       └── card.tsx
├── lib/
│   └── utils.ts               # Utility functions
└── public/                     # Static assets

## Color Palette

- **Primary Navy**: #0F172A (backgrounds, headings)
- **Accent Gold**: #F59E0B (CTAs, highlights)
- **Cream**: #FFFBEB (secondary backgrounds)
- **Slate**: #334155 (body text)
- **White**: #FFFFFF

## Customization

### Updating Colors

Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    navy: "#0F172A",
    gold: "#F59E0B",
    cream: "#FFFBEB",
    slate: "#334155",
  },
}
```

### Modifying Content

All content is located in the respective component files under `components/sections/`. Simply edit the text, headings, or data arrays in each component.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Deploy with one click

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel --prod
```

## Performance

- Lighthouse Score: 90+ (Performance, Accessibility, SEO)
- Next.js Image Optimization
- Font optimization with next/font
- Lazy loading for animations
- Smooth scroll behavior

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License

## Credits

Built with love using Next.js, Tailwind CSS, and Framer Motion.
