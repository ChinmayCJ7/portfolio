import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Typewriter from 'typewriter-effect';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section min-h-screen flex items-center relative overflow-hidden" style={{ paddingTop: '6rem' }}>
      {/* Background blobs for "Innovation" feel */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-500 uppercase bg-indigo-50 rounded-full border border-indigo-100">
                🚀 Welcome to my digital space
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-slate-900">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                  Chinmay J
                </span>
              </h1>
              <div className="text-2xl md:text-3xl font-bold mb-6 text-slate-600 h-20">
                <Typewriter
                  options={{
                    strings: [
                      'Full-Stack Developer',
                      'MERN Stack Expert',
                      'Problem Solver',
                      'Tech Enthusiast'
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed"
            >
              Crafting robust and scalable web applications with modern technologies. 
              I turn complex problems into elegant, user-centric digital solutions.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-6 mb-8 text-sm font-medium text-slate-500"
            >
              <a href="mailto:chinmay94486@gmail.com" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                <FaEnvelope className="text-lg" />
                chinmay94486@gmail.com
              </a>
              <a href="tel:+919449475936" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                <FaPhone className="text-lg" />
                +91 9449475936
              </a>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-lg" />
                Mandya, Karnataka
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
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold rounded-xl shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all duration-300"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white text-slate-700 font-bold border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-indigo-200 transition-all duration-300"
              >
                Contact Me
              </button>
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
                className="p-3 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-900 hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://linkedin.com/in/chinmay-j"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-100 text-slate-700 hover:bg-[#0077b5] hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Modern Abstract Shape */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="hidden lg:flex justify-center relative"
          >
             <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative w-96 h-96 bg-gradient-to-br from-slate-50 to-indigo-50 rounded-[2rem] shadow-2xl border border-white/50 flex items-center justify-center p-8 rotate-3 hover:rotate-0 transition-all duration-500">
                   <div className="text-center">
                      <div className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-violet-600 mb-4">
                        CJ
                      </div>
                      <div className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em]">
                        Portfolio 2026
                      </div>
                   </div>
                   
                   {/* Floating Tags */}
                   <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100"
                   >
                     <span className="text-2xl">💻</span>
                   </motion.div>

                   <motion.div 
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100"
                   >
                     <span className="text-2xl">🚀</span>
                   </motion.div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
