import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.svg';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-#7D5FF4 font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
              <img src={logo} alt="Logo" className="w-12 h-12 rounded-xl" />
              {/* CJ7 */}
            </div>
            <span className="font-bold text-xl hidden sm:block">Chinmay J</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm font-semibold text-secondary hover:text-gradient transition-all relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a 
              href="/resume.pdf" 
              download
              className="btn btn-primary"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden w-10 h-10 rounded-lg bg-bg-secondary border border-card-border flex items-center justify-center hover:border-primary-start transition"
            aria-label="Open menu"
          >
            <FaBars className="text-xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
              style={{ zIndex: 999 }}
            />

            {/* Menu Panel */}
            <Motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl lg:hidden overflow-y-auto"
              style={{ zIndex: 1000 }}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                      CJ
                    </div>
                    <span className="font-bold text-xl">Chinmay J</span>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="w-10 h-10 rounded-lg bg-bg-secondary border border-card-border flex items-center justify-center hover:border-primary-start transition"
                    aria-label="Close menu"
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="px-4 py-3 rounded-lg text-secondary hover:bg-bg-secondary hover:text-gradient font-semibold transition"
                    >
                      {link.name}
                    </a>
                  ))}
                  <a 
                    href="/resume.pdf" 
                    download
                    className="btn btn-primary mt-4"
                  >
                    Download Resume
                  </a>
                </nav>
              </div>
            </Motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
