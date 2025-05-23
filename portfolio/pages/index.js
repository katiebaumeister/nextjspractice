// pages/index.js
import Head from 'next/head';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Connect from '../components/Connect';
import Nav from '../components/Nav';
import Background from '../components/Background';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kate Baumeister</title>
        <meta name="description" content="Creative engineer + AI builder" />
      </Head>
      <main className="relative overflow-hidden flex flex-col min-h-screen bg-neutral-950 text-white scroll-smooth">
        <Background />
        <Nav />
        <Hero />
        <Projects />
        <Connect />
        <Footer />
      </main>
    </>
  );
}
