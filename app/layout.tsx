// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Kate Baumeister',
    template: '%s – Kate Baumeister',
  },
  description: 'Creative engineer & AI builder designing adaptive education tools.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`bg-neutral-950 text-white ${inter.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
