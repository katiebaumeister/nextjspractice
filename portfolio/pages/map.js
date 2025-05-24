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

      <main className="min-h-screen bg-neutral-950 text-white px-4 sm:px-8 pb-12">
        {/* Top Nav */}
        <div className="max-w-5xl mx-auto pt-6 flex justify-between items-center">
          <Link
            href="/"
            className="text-neutral-400 hover:text-white transition text-sm sm:text-base"
          >
            ← Back to Home
          </Link>

          <div className="flex gap-8 text-sm sm:text-base font-medium text-neutral-400">
            <Link href="/projects" className="hover:text-white transition">Projects</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>

        {/* Title */}
        <div className="max-w-5xl mx-auto mt-10 mb-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            Oh, the places you'll go!
          </motion.h1>
        </div>

        {/* Map */}
        <div className="max-w-6xl mx-auto">
          <WorldMap />
        </div>
      </main>
    </>
  );
}
