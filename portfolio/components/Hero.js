import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-light tracking-tight leading-tight"
      >
        Kate Baumeister
      </motion.h1>
      <p className="mt-4 text-lg text-neutral-400 max-w-xl">
        Systems engineer & MBA designing adaptive education tools with AI. Passionate about tech, policy, and clarity in chaos.
      </p>
    </section>
  );
}
