import Navbar from './components/Navbar';
import Skills from './components/Skills';
import { Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './App.css';

function App() {
  const githubUrl = 'https://github.com/';
  const linkedinUrl = 'https://www.linkedin.com/';

  return (
    <div className="min-h-screen w-full bg-background text-black font-sans">
      <Navbar />

      <main className="pt-20">
        <section
          id="about"
          className="scroll-mt-24 min-h-screen px-4 py-16 flex items-center bg-gradient-to-b from-white to-blue-50"
        >
          <div className="max-w-6xl mx-auto w-full">
            <p className="text-primary font-semibold tracking-wide uppercase mb-4">About</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Building clean, reliable digital products.
            </h1>
            <p className="max-w-3xl text-lg text-gray-700 leading-relaxed mb-8">
              I design and build responsive web applications with strong attention to performance, maintainability,
              and usability. My focus is shipping practical solutions that create measurable value.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-primary px-7 py-3 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Me
            </a>
          </div>
        </section>

        <Skills />

        <section id="projects" className="scroll-mt-24 min-h-screen px-4 py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-black">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-3">Portfolio Platform</h3>
                <p className="text-gray-700 leading-relaxed">
                  A responsive portfolio web app focused on performance, clean component architecture, and clear visual
                  storytelling.
                </p>
              </article>
              <article className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-3">Full-Stack App</h3>
                <p className="text-gray-700 leading-relaxed">
                  End-to-end application with REST APIs, authentication flows, and deployment automation for faster
                  delivery.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 min-h-screen px-4 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-black">Contact</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="text-primary" size={24} />
                  <h3 className="text-xl font-semibold">Email</h3>
                </div>
                <a
                  href="mailto:simonlan0930@gmail.com"
                  className="text-gray-700 hover:text-primary transition-colors break-all"
                >
                  simonlan0930@gmail.com
                </a>
              </div>

              <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="text-primary" size={24} />
                  <h3 className="text-xl font-semibold">Location</h3>
                </div>
                <p className="text-gray-700">United States</p>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-200 text-gray-800 hover:text-primary hover:border-primary transition-colors"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-200 text-gray-800 hover:text-primary hover:border-primary transition-colors"
                aria-label="GitHub profile"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="h-20 flex items-center justify-center text-gray-600 text-sm">
        © 2026 Simon Lan. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
