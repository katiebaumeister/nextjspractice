// components/Hero.js
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[80px] sm:text-[96px] font-extrabold tracking-tight leading-tight"
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
