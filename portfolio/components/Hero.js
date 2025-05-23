import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="mb-10 flex flex-wrap justify-center space-x-8 text-sm sm:text-base font-medium text-neutral-400">
        <Link href="/projects" className="hover:text-white transition duration-200">Projects</Link>
        <Link href="/contact" className="hover:text-white transition duration-200">Contact</Link>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[80px] sm:text-[96px] font-extrabold tracking-tight leading-tight"
      >
        Kate Baumeister
      </motion.h1>
      <p className="mt-8 text-sm sm:text-base text-neutral-400 max-w-md">
        I build software for the government by day, and develop <br />
        <a
          href="https://learnadoodle.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline transition"
        >
          Learnadoodle.com
        </a> by night.
      </p>
    </section>
  );
}
