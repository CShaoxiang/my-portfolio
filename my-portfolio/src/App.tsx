import Navbar from './components/Navbar';
import Skills from './components/Skills';
import { Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './App.css';

function App() {
  const githubUrl = 'https://github.com/';
  const linkedinUrl = 'https://www.linkedin.com/';
  const projects = [
    {
      type: 'Full-Stack Application',
      name: 'WorkMate',
      url: 'https://github.com/Peanutix/WorkMate',
      description: 'Collaborative whiteboard platform for academic teaching and learning in host-based rooms.',
      highlights: [
        'Multi-user host room with synchronized board updates.',
        'Physics and math equation writing and display support.',
        'Built-in real-time text chat for participants.',
        'Implemented in Python using WebSockets.',
      ],
      clipUrl: '',
    },
    {
      type: 'Enterprise Chat Application',
      name: 'EasyChat',
      url: 'https://github.com/CShaoxiang/CS-Projects/tree/main/workspace_easychat',
      description: 'Real-time enterprise chat platform supporting secure messaging and group communication.',
      highlights: [
        'Create and manage group chats in real time.',
        'Send text, images, and files between users.',
        'Redis caching for user session and profile data.',
        'Local file caching for faster media delivery.',
      ],
      clipUrl: '',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-background text-black font-sans">
      <Navbar />

      <main className="pt-20">
        <section
          id="about"
          className="scroll-mt-24 min-h-screen px-4 py-16 flex items-center bg-gradient-to-b from-white to-blue-50"
        >
          <div className="max-w-6xl mx-auto w-full">
            <p className="text-reveal reveal-1 text-primary font-semibold tracking-wide uppercase mb-4">About</p>
            <h1 className="text-reveal reveal-2 text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Building clean, reliable digital products.
            </h1>
            <p className="text-reveal reveal-3 max-w-3xl text-lg text-gray-700 leading-relaxed mb-8">
              I design and build responsive web applications with strong attention to performance, maintainability,
              and usability. My focus is shipping practical solutions that create measurable value.
            </p>
            <a
              href="#contact"
              className="text-reveal reveal-4 inline-flex items-center rounded-full bg-primary px-7 py-3 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Me
            </a>
          </div>
        </section>

        <Skills />

        <section id="projects" className="scroll-mt-24 min-h-screen px-4 py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-reveal reveal-1 text-4xl font-bold text-center mb-12 text-black">Projects</h2>
            <div className="flex flex-col gap-12">
              {projects.map((project, index) => (
                <article
                  key={project.name}
                  className="group rounded-2xl border border-white/10 bg-gray-900 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 hover:shadow-xl hover:shadow-primary/20"
                >
                  <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-8 items-stretch">
                    <div className={`text-reveal reveal-${(index % 4) + 1}`}>
                      <p className="text-sm uppercase tracking-wide text-primary font-semibold mb-3">{project.type}</p>
                      <h3 className="text-3xl font-semibold mb-4 text-white">{project.name}</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

                      <ul className="space-y-3 mb-7">
                        {project.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-gray-200">
                            <span className="mt-1.5 inline-block h-0 w-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-primary shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} GitHub repository`}
                        className="inline-flex items-center gap-2 rounded-lg border border-primary/50 px-4 py-2 text-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        <FaGithub size={18} />
                        <span>View code</span>
                      </a>
                    </div>

                    <div className={`text-reveal reveal-${((index + 1) % 4) + 1}`}>
                      <div className="h-full min-h-[240px] rounded-xl border border-dashed border-gray-600 bg-gray-800/80 p-4">
                        <video
                          controls
                          preload="none"
                          className="h-full w-full rounded-lg bg-gray-900 object-cover"
                          aria-label={`${project.name} demo clip placeholder`}
                        >
                          {project.clipUrl ? <source src={project.clipUrl} type="video/mp4" /> : null}
                        </video>
                        <p className="mt-3 text-sm text-gray-400 text-center">3-4 second demo clip placeholder</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 min-h-screen px-4 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-reveal reveal-1 text-4xl font-bold text-center mb-12 text-black">Contact</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="text-reveal reveal-2 rounded-2xl border border-gray-200 p-8 shadow-sm">
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

              <div className="text-reveal reveal-3 rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="text-primary" size={24} />
                  <h3 className="text-xl font-semibold">Location</h3>
                </div>
                <p className="text-gray-700">Melbourne Australia</p>
              </div>
            </div>

            <div className="text-reveal reveal-4 flex justify-center gap-6">
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

      <footer className="text-reveal reveal-2 h-20 flex items-center justify-center text-gray-600 text-sm">
        © 2026 Simon Lan. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
