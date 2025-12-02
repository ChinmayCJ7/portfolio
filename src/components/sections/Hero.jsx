import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section gradient-mesh" style={{ paddingTop: '6rem' }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <p className="text-muted text-sm font-semibold tracking-wide uppercase mb-3">
                👋 Hi, I'm
              </p>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
                Chinmay J
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">
                  Full-Stack Developer
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg text-secondary mb-8 max-w-xl leading-relaxed"
            >
              Motivated Software Engineer with hands-on experience in full-stack development, 
              API design, JWT authentication, and database-driven applications. Known for 
              adaptability, teamwork, and delivering reliable, scalable solutions.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-8 text-sm text-muted"
            >
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gradient" />
                <span>Mandya, Karnataka</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-gradient" />
                <a href="tel:+919449475936" className="hover:text-primary-start transition">
                  +91 9449475936
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-gradient" />
                <a href="mailto:chinmay94486@gmail.com" className="hover:text-primary-start transition">
                  chinmay94486@gmail.com
                </a>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <button 
                onClick={() => scrollToSection('projects')}
                className="btn btn-primary"
              >
                View Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn btn-secondary"
              >
                Get In Touch
              </button>
              <a 
                href="/resume.pdf" 
                download
                className="btn btn-outline"
              >
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex gap-4"
            >
              <a
                href="https://github.com/ChinmayCJ7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-card-border flex items-center justify-center hover:border-primary-start hover:shadow-lg transition-all hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://linkedin.com/in/chinmay-j"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-card-border flex items-center justify-center hover:border-primary-start hover:shadow-lg transition-all hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Avatar Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <div className="w-full h-full bg-gradient-primary flex items-center justify-center text-gradient text-8xl md:text-9xl font-bold text-color-black">
                  {/* <img src="src\assets\chinmay J.jpg" alt="Logo" className="w-full h-full rounded-xl" /> */}
                  CJ7
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 -left-4 bg-white rounded-lg shadow-lg px-4 py-2 border border-card-border"
              >
                <p className="text-xs font-semibold text-gradient">React.js</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/3 -right-8 bg-white rounded-lg shadow-lg px-4 py-2 border border-card-border"
              >
                <p className="text-xs font-semibold text-gradient">Node.js</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 -left-8 bg-white rounded-lg shadow-lg px-4 py-2 border border-card-border"
              >
                <p className="text-xs font-semibold text-gradient">MongoDB</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
