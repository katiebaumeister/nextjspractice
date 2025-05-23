// pages/index.js
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Background from '../components/Background';
import Particles from '../components/Particles';

const Projects = dynamic(() => import('./projects'));
const Contact = dynamic(() => import('./contact'));

export default function Home() {
  return (
    <>
      <Head>
        <title>Kate Baumeister</title>
        <meta name="description" content="Creative engineer + AI builder" />
        <link rel="prefetch" href="/projects" />
        <link rel="prefetch" href="/contact" />
      </Head>
      <main className="relative overflow-hidden flex flex-col min-h-screen text-white scroll-smooth">
        <Background />
        <Particles />
        <Hero />
        <Footer />
      </main>
    </>
  );
}
