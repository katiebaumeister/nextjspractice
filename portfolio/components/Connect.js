import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Connect() {
  return (
    <section className="py-32 px-4 border-t border-neutral-800">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8">Let’s Connect</h2>

        <div className="flex justify-center space-x-8 mb-12 text-4xl text-white">
          <a
            href="https://x.com/katebaumeister"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/katebau_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/katebaumeister/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="text-lg sm:text-xl text-neutral-400">
          Email me:{' '}
          <a
            href="mailto:kate@learnadoodle.com"
            className="underline hover:text-white transition"
          >
            kate@learnadoodle.com
          </a>
        </p>
      </div>
    </section>
  );
}
