import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="absolute top-6 left-0 right-0 flex justify-center z-10 space-x-8 text-neutral-400 text-sm">
      <a href="#projects" className="hover:text-white transition">Projects</a>
      <a href="#connect" className="hover:text-white transition">Contact</a>
    </nav>
  );
}
