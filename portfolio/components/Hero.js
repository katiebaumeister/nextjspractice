// components/Hero.js
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="mb-8 flex flex-wrap justify-center space-x-6 text-base sm:text-lg font-medium text-neutral-400">
        <Link href="/projects" className="hover:text-white transition duration-200 underline-offset-4 hover:underline">Projects</Link>
        <Link href="/contact" className="hover:text-white transition duration-200 underline-offset-4 hover:underline">Contact</Link>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl sm:text-6xl md:text-7xl lg:text-[96px] font-bold tracking-tight leading-tight"
      >
        Kate Baumeister
      </motion.h1>
      <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-xl">
        I build apps for the government. Spending evenings building learnadoodle.com. 
      </p>
    </section>
  );
}
