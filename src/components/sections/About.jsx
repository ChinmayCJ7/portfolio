import React from "react";
import { motion as Motion } from "framer-motion";
import { FaCode, FaLightbulb, FaUsers, FaRocket } from "react-icons/fa";

export default function About() {
  const highlights = [
    {
      icon: <FaCode />,
      title: "Full-Stack Development",
      description: "Experienced in building complete web applications from frontend to backend"
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solver",
      description: "Strong analytical skills with a focus on clean, efficient solutions"
    },
    {
      icon: <FaUsers />,
      title: "Team Player",
      description: "Proven leadership in coordinating teams and managing projects"
    },
    {
      icon: <FaRocket />,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and development practices"
    }
  ];

  return (
    <section id="about" className="section bg-secondary">
      <div className="container">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2>
            About <span className="text-gradient">Me</span>
          </h2>
          <p>Get to know more about my background and expertise</p>
        </Motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Personal Summary */}
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card">
              <h3 className="text-2xl font-bold mb-4">Personal Summary</h3>
              <p className="text-secondary leading-relaxed mb-4">
                Motivated Software Engineer with hands-on experience in full-stack development, 
                API design, JWT authentication, and database-driven applications. Skilled in 
                Java, Python, and JavaScript with a solid understanding of SDLC, version control, 
                debugging, and modular development.
              </p>
              <p className="text-secondary leading-relaxed mb-4">
                Built a complete College ERP platform and user-focused web tools, demonstrating 
                strong problem-solving ability and clean engineering practices.
              </p>
              <p className="text-secondary leading-relaxed">
                Known for adaptability, teamwork, and delivering reliable, scalable solutions. 
                Currently pursuing B.E in Computer Science and Engineering at P.E.S. College 
                of Engineering, Mandya, Karnataka.
              </p>
            </div>
          </Motion.div>

          {/* Right - Highlights Grid */}
          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="card group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-black text-xl mb-3 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted">{item.description}</p>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
