import Head from 'next/head';
import dynamic from 'next/dynamic';

const WorldMap = dynamic(() => import('../components/WorldMap'), {
  ssr: false, // disable server-side rendering for Leaflet
});

export default function MapPage() {
  return (
    <>
      <Head>
        <title>World Map – Kate Baumeister</title>
      </Head>
      <main className="min-h-screen bg-neutral-950 text-white p-8">
        <h1 className="text-3xl font-bold mb-6">Global Experience</h1>
        <WorldMap />
      </main>
    </>
  );
}
