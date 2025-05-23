// pages/projects.js
import Head from 'next/head';
import Projects from '../components/Projects';
import Background from '../components/Background';
import Particles from '../components/Particles';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects – Kate Baumeister</title>
      </Head>
      <main className="relative overflow-hidden min-h-screen bg-neutral-950 text-white scroll-smooth">
        <Background />
        <Particles />
        <div className="absolute top-6 left-6 z-20">
          <Link href="/" className="text-sm text-neutral-400 hover:text-white">← Back</Link>
        </div>
        <Projects />
      </main>
    </>
  );
}
