// pages/contact.js
import Head from 'next/head';
import Connect from '../components/Connect';
import Background from '../components/Background';
import Particles from '../components/Particles';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact – Kate Baumeister</title>
      </Head>
      <main className="relative overflow-hidden min-h-screen bg-neutral-950 text-white scroll-smooth">
        <Background />
        <Particles />
        <div className="absolute top-6 left-6 z-20 text-xl">
          <Link href="/" className="text-neutral-400 hover:text-white transition">←</Link>
        </div>
        <div className="absolute top-6 right-6 z-20 flex space-x-6 text-sm text-neutral-400">
          <Link href="/projects" className="hover:text-white transition">Projects</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>
        <Connect />
      </main>
    </>
  );
}
