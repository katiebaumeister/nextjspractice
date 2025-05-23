'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center">
      <div className="mb-10 flex flex-wrap justify-center space-x-8 text-sm sm:text-base font-medium text-neutral-400">
        <Link href="/projects" className="hover:text-white transition">Projects</Link>
        <Link href="/contact" className="hover:text-white transition">Contact</Link>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl sm:text-6xl md:text-7xl lg:text-[96px] font-extrabold tracking-tight leading-tight"
      >
        Kate Baumeister
      </motion.h1>
      <p className="mt-8 text-base sm:text-lg text-neutral-400 max-w-md">
        I build apps for the government. Spending evenings building <br />
        learnadoodle.com.
      </p>
    </section>
  );
}
