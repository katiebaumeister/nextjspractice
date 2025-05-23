import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="absolute top-6 left-0 right-0 flex justify-center z-10 space-x-8 text-neutral-400 text-sm">
      <Link href="/projects" className="hover:text-white transition">Projects</Link>
      <Link href="/contact" className="hover:text-white transition">Contact</Link>
    </nav>
  );
}
