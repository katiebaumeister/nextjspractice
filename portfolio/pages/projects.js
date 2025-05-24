import Head from 'next/head';
import Projects from '../components/Projects';
import Background from '../components/Background';
import { Navigation } from '../components/Navigation';

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects – Kate Baumeister</title>
      </Head>
      <main className="relative overflow-hidden min-h-screen bg-neutral-950 text-white scroll-smooth">
        <Background />
        <Navigation />
        <div className="pt-[100px]">
          <Projects />
        </div>
      </main>
    </>
  );
}
