import React from 'react';

const NAV_LINKS = [
  { label: 'About', sectionId: 'about' },
  { label: 'Skills', sectionId: 'skills' },
  { label: 'Projects', sectionId: 'projects' },
  { label: 'Contact', sectionId: 'contact' },
];

const Navbar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/90 backdrop-blur-md border-b border-black/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <button type="button" onClick={() => scrollToSection('about')} className="text-2xl font-bold text-primary">
          My Portfolio
        </button>

        <div className="space-x-8 flex">
          {NAV_LINKS.map((item) => (
            <button
              type="button"
              key={item.sectionId}
              onClick={() => scrollToSection(item.sectionId)}
              className="cursor-pointer transition-colors text-black hover:text-primary font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
