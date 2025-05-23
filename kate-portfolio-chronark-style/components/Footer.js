export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-neutral-800 text-sm text-neutral-500">
      © {new Date().getFullYear()} Kate Baumeister · Built with Next.js
    </footer>
  );
}