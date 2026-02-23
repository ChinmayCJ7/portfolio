import { useState } from "react";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      
      <nav className="px-8 py-3 rounded-full backdrop-blur-lg bg-cornsilk-50/80 shadow-lg border border-beige-200/70 text-tea-green-900">
        
        <div className="flex items-center gap-10">
          
          <Link to ="/" className="font-semibold text-lg">Chinmay</Link>

          <div className="hidden md:flex gap-8 text-sm">
            <Link to ="/" className="hover:text-light-bronze-600 transition">Home</Link>
            <Link to ="/about" className="hover:text-light-bronze-600 transition">About</Link>
            <Link to ="/in-progress" className="hover:text-light-bronze-600 transition">Progress</Link>
            <a href="#projects" className="hover:text-light-bronze-600 transition">Projects</a>
            <a href="#contact" className="hover:text-light-bronze-600 transition">Contact</a>
          </div>

          {/* Mobile */}
          <button 
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mt-3 rounded-2xl backdrop-blur-lg bg-cornsilk-50/90 shadow-lg border border-beige-200/70 p-6 md:hidden space-y-4 text-center text-tea-green-900">
          <Link to ="/" className="block">Home</Link>
          <Link to ="/about" className="block">About</Link>
          <Link to ="/in-progress" className="block">Progress</Link>
          <a href="#projects" className="block">Projects</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
