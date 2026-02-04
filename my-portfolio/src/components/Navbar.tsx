import React from 'react';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
    return (
        <nav className ="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className = "max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1  className ="text-2xl font-bold text-primary">My Portfolio</h1>
        <div className ="space-x-8 hidden md:flex">
            {['Home',  'About', 'Skills' , 'Contact'].map((item) =>(
                <Link
                key ={item}
                to = {item}
                smooth={true}
                className = "cursor-pointer hover:text-primary transition-colors"
            >
                {item}
            </Link>
            ))}            
            </div>
           </div>
        </nav>
    );
};
export default Navbar;