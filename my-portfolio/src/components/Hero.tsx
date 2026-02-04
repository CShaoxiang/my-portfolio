import React from 'react';
import { Mail } from 'lucide-react';           // Keep Mail (it's a UI icon)
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import Brands

const Hero: React.FC = () => {
    return (
        <section id ="Home" className= "h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
            {/* Background Gradient Blob */}
            <div className="absolute top-[-150px] w-[500px] h-[500px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full filter blur-3xl opacity-30 animate-blob">
        </div>

            <p className = "text-gray-400 text-lg mb-4">Hi, I'm</p>
            <h1 className= "text-6xl md:txt-8xl font-bold mb-6">
                <span className="bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text">
                    Simon Lan 
                </span>
            </h1>
            <p className = "max-w-xl text-gray-400 text-lg mb-8 leading-relaxed">
                I build clan, responsive, and user-focused web applciations using modern front-end technologies.     
            </p>

            <div className= "flex gap-4 mb-12">
                <button className = "bg-primary hover:bg-violet-700 text-white px-6 py-3 rounded-full font-medium transition-all">
                    Contact Me
                </button>
        </div>

        {/* Social Links (The Hidden URLs)} */}
        <div className = "flex gap-6">
            <a
                href="https://github.com/Haoxiang Lan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full hover:bg-white/10 
                hover:text-blue-500 transition-all"
                >
                <FaGithub size={24} />
            </a>
            <a
                href= "mailto:your.email@simonlan0930@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className = "p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-500 transition-all"
            >
                <FaLinkedin size={24} />
            </a>
            <a
                href="mailto:simonlan0930@gmail.com"
                className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-red-400 transition-all"
            >
                <Mail size={24} />
            </a>
          </div>
      </section>
    );
};

export default Hero;