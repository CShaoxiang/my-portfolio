import React from 'react';
import {Code2, Database, Layout } from 'lucide-react';

const Skills: React.FC = () => {
    const categories = [
        {
            titles:"Front-End",
            icon:<Code2 className= "text-primary" size={32}/>,
            skills: ["react,Typescript, Javascript", "HTML5, CSS3 , Tailwind CSS"]
        },
        {
            titles:"Back-End",
            icon:<Database className= "text-secondary"/>,
            skills : ["Node.js, Express.js, RESTful APIs", "MySQL, REDIS" ]
        },
        {
            titles:"Tools & Cloud",
            icon:<Layout className= "text-tertiary"/>,
            skills: ["Git, Docker, CI/CD", "AWS, Heroku"]
        }
    ];

    return (
        <section id="Skills" className="py-20 bg-background">
           <h2 className="text-4xl font-bold text-center mb-12">02.   Skills & Technologies</h2>
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {categories.map((cat,idx) => (
                    <div key={idx} className="bg-surface border border-white/5 p-8 
                    rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                        <div className="bg-white/5 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                            {cat.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4">{cat.titles}</h3>
                        <ul className="space-y-3">
                            {cat.skills.map((skill, i) => (
                                <li key={i} className="text-gray-400">{skill}
                                <span className = "w-1.5 h-1.5 bg-primary rounded-full"> </span>
                                {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
           </div>
        </section>
    )
}

export default Skills;