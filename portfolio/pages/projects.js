// pages/projects.js
import Head from 'next/head';
import Projects from '../components/Projects';
import Background from '../components/Background';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects – Kate Baumeister</title>
      </Head>
      <main className="relative overflow-hidden min-h-screen bg-neutral-950 text-white scroll-smooth">
        <Background />
        <div className="absolute top-6 left-6 z-20 text-2xl">
          <Link href="/" className="text-neutral-400 hover:text-white transition">←</Link>
        </div>
        <div className="absolute top-6 right-6 z-20 flex space-x-8 text-lg text-neutral-400">
          <Link href="/projects" className="hover:text-white transition">Projects</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>
        <Projects />
      </main>
    </>
  );
}
