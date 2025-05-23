// app/contact/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { Background } from '@/components/Background';
import { Particles } from '@/components/Particles';
import { Connect } from '@/components/Connect';

export const metadata: Metadata = {
  title: 'Contact – Kate Baumeister',
  description: 'Connect with Kate Baumeister via social platforms and email.',
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-neutral-950 text-white overflow-hidden">
      <Background />
      <Particles />
      <div className="absolute top-6 left-6 z-20 text-2xl">
        <Link href="/" className="text-neutral-400 hover:text-white transition">←</Link>
      </div>
      <div className="absolute top-6 right-6 z-20 flex space-x-6 text-base text-neutral-400">
        <Link href="/projects" className="hover:text-white transition">Projects</Link>
        <Link href="/contact" className="hover:text-white transition">Contact</Link>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center px-4 pt-32 pb-16">
        <Connect />
      </div>
    </main>
  );
}
