import React from 'react';
import logo from '../../assets/logo.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-[var(--primary-start)] text-white py-12">
      <div className="container"> 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white font-bold text-lg">
                <img src={logo} alt="Logo" className="w-12 h-12 rounded-xl" />
              </div>
              <span className="font-bold text-xl">Chinmay J</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Full-Stack Developer passionate about building scalable web applications 
              and delivering exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {links.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-white/80 hover:text-white text-sm transition"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Get In Touch</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="mailto:chinmay94486@gmail.com" className="text-white/80 hover:text-white transition">
                chinmay94486@gmail.com
              </a>
              <a href="tel:+919449475936" className="text-white/80 hover:text-white transition">
                +91 9449475936
              </a>
              <p className="text-white/80">Mandya, Karnataka, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Chinmay J
          </p>
        </div>
      </div>
    </footer>
  );
}
