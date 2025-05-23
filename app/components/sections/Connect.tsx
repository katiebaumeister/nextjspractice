import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export function Connect() {
  return (
    <section className="max-w-2xl px-4 mx-auto text-center space-y-6">
      <h2 className="text-3xl font-semibold">Let’s Connect</h2>
      <p className="text-neutral-400">I’d love to hear from you — or feel free to follow my work below.</p>
      <div className="flex justify-center space-x-6 text-2xl">
        <a href="https://x.com/katebaumeister" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitter /></a>
        <a href="https://instagram.com/katebau_" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400"><FaInstagram /></a>
        <a href="https://linkedin.com/in/katebaumeister" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><FaLinkedin /></a>
      </div>
      <p className="text-sm text-neutral-500">Email: <a href="mailto:kate@learnadoodle.com" className="underline">kate@learnadoodle.com</a></p>
    </section>
  );
}
