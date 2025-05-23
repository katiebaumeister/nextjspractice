import Head from 'next/head';
import Connect from '../components/Connect';
import Nav from '../components/Nav';
import Background from '../components/Background';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact – Kate Baumeister</title>
      </Head>
      <main className="relative overflow-hidden min-h-screen bg-neutral-950 text-white scroll-smooth">
        <Background />
        <Nav />
        <Connect />
      </main>
    </>
  );
}
