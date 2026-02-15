import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      
      <nav className="px-8 py-3 rounded-full backdrop-blur-lg bg-white/70 shadow-lg border border-white/40">
        
        <div className="flex items-center gap-10">
          
          <h1 className="font-semibold text-lg">Chinmay</h1>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#home" className="hover:text-blue-500 transition">Home</a>
            <a href="#about" className="hover:text-blue-500 transition">About</a>
            <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
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
        <div className="mt-3 rounded-2xl backdrop-blur-lg bg-white/80 shadow-lg p-6 md:hidden space-y-4 text-center">
          <a href="#home" className="block">Home</a>
          <a href="#about" className="block">About</a>
          <a href="#projects" className="block">Projects</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
