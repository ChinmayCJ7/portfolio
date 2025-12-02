import React from 'react';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Certificates from '@/components/sections/Certificates';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Certificates />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
