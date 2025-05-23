import Head from 'next/head';
import Projects from '../components/Projects';
import Nav from '../components/Nav';
import Background from '../components/Background';

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects – Kate Baumeister</title>
      </Head>
      <main className="relative overflow-hidden min-h-screen bg-neutral-950 text-white scroll-smooth">
        <Background />
        <Nav />
        <Projects />
      </main>
    </>
  );
}
