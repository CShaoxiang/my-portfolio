import React from 'react';
import { Code2, Database, Layout } from 'lucide-react';

const Skills: React.FC = () => {
  const categories = [
    {
      title: 'Front-End',
      icon: <Code2 className="text-primary" size={32} />,
      skills: ['React, TypeScript, JavaScript', 'HTML5, CSS3, Tailwind CSS'],
    },
    {
      title: 'Back-End',
      icon: <Database className="text-secondary" size={32} />,
      skills: ['Node.js, Express.js, RESTful APIs', 'MySQL, Redis'],
    },
    {
      title: 'Tools & Cloud',
      icon: <Layout className="text-primary" size={32} />,
      skills: ['Git, Docker, CI/CD', 'AWS, Heroku'],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-24 py-16 md:py-20 bg-background">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">Skills & Technologies</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {categories.map((category) => (
          <div
            key={category.title}
            className="bg-surface border border-white/5 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              {category.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
            <ul className="space-y-3">
              {category.skills.map((skill) => (
                <li key={skill} className="text-gray-300 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
