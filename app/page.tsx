// app/page.tsx
import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Background } from '@/components/Background';
import { Particles } from '@/components/Particles';

export const metadata: Metadata = {
  title: 'Kate Baumeister',
  description: 'Creative engineer & AI builder designing adaptive education tools.',
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-neutral-950 text-white overflow-hidden">
      <Background />
      <Particles />
      <div className="relative z-10 flex flex-col items-center justify-center px-4 pt-40 pb-20">
        <Hero />
      </div>
    </main>
  );
}
