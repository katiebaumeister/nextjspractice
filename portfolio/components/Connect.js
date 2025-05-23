import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Connect() {
  return (
    <section className="py-24 px-4 border-t border-neutral-800">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>
        <p className="text-neutral-400 mb-6">I’d love to hear from you — or feel free to follow my work below.</p>
        <div className="flex justify-center space-x-6 mb-10 text-2xl">
          <a href="https://x.com/katebaumeister" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitter /></a>
          <a href="https://instagram.com/katebau_" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/katebaumeister/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><FaLinkedin /></a>
        </div>
        <p className="text-sm text-neutral-500">Email me: <a href="mailto:kate@learnadoodle.com" className="underline">kate@learnadoodle.com</a></p>
      </div>
    </section>
  );
}
