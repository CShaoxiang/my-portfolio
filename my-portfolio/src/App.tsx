import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import './App.css'

function App() {

  return (
    <div className = "min-h-screen bg-background text-white font-san">
      <Navbar />
      <Hero />
      <Skills />
      {/* Add other components like About, Projects, Contact here */}
    
    <div className = "h-20 flex items-center justify-center text-gray-500 text-sm">
      © 2026 Simon Lan. Built with React & Tailwind CSS.
    </div>
  </div>
  );
}

export default App
