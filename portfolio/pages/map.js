import Head from 'next/head';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Dynamically import the map (client-only)
const WorldMap = dynamic(() => import('../components/WorldMap'), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] flex items-center justify-center text-white text-xl">
      Loading your journey...
    </div>
  ),
});

export default function MapPage() {
  return (
    <>
      <Head>
        <title>Journey – Kate Baumeister</title>
      </Head>
      <main className="min-h-screen bg-neutral-950 text-white p-6 sm:p-12">
        <div className="flex items-center justify-between mb-6 max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold">Oh, the places you'll go!</h1>
          <Link href="/" className="text-neutral-400 hover:text-white transition">
            ← Back to Home
          </Link>
        </div>
        <WorldMap />
      </main>
    </>
  );
}
