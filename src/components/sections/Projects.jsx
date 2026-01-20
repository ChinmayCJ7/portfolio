import React from "react";
import { motion as Motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNode, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import Tilt from 'react-parallax-tilt';

export default function Projects() {
  const projects = [
    {
      title: "College ERP System",
      description: "A full-stack academic management platform built with React, Node.js, Express, and MongoDB. Features secure JWT-based authentication, REST APIs, and modular backend architecture supporting CRUD operations for students, faculty, departments, and subjects.",
      features: [
        "JWT-based authentication & authorization",
        "REST API development with Express",
        "Attendance tracking & marks entry system",
        "Notice broadcasting functionality",
        "Server-side validation & optimized queries",
        "Responsive React UI with role-based routing"
      ],
      technologies: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNode /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ],
      github: "https://github.com/ChinmayCJ7/CollegeERP",
      live: null,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "LostFinder",
      description: "A lightweight front-end web application to help users report found items and locate lost belongings. Built with vanilla HTML, CSS, and JavaScript, showcasing strong fundamentals in web development.",
      features: [
        "Client-side form validation",
        "Dynamic DOM manipulation",
        "Clean and accessible UI design",
        "Event-driven architecture",
        "Responsive layout",
        "Fast and lightweight"
      ],
      technologies: [
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
        { name: "JavaScript", icon: <SiJavascript /> }
      ],
      github: "https://github.com/ChinmayCJ7/LostFinder",
      live: null,
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section id="projects" className="section bg-secondary">
      <div className="container">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p>Showcasing my best work and technical capabilities</p>
        </Motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.02}
                transitionSpeed={2500}
                className="card group h-full"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left - Project Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-gradient transition">
                          {project.title}
                        </h3>
                        <p className="text-secondary leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-muted mb-3">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="text-gradient text-lg">•</span>
                            <span className="text-sm text-secondary">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-muted mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 px-4 py-2 bg-bg-secondary rounded-lg border border-card-border hover:border-primary-start transition"
                          >
                            <span className="text-xl text-gradient">{tech.icon}</span>
                            <span className="text-sm font-medium">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <FaGithub />
                        View on GitHub
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline"
                        >
                          <FaExternalLinkAlt />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right - Visual Element */}
                  <div className="flex items-center justify-center">
                    <div className={`w-full h-64 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white shadow-xl group-hover:scale-105 transition-transform`}>
                      <div className="text-center p-6">
                        <div className="text-6xl mb-4 text-white drop-shadow-lg">
                          {project.technologies[0].icon}
                        </div>
                        <p className="font-bold text-xl drop-shadow-md">{project.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </Motion.div>
          ))}
        </div>

        {/* View More */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ChinmayCJ7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FaGithub />
            View All Projects on GitHub
          </a>
        </Motion.div>
      </div>
    </section>
  );
}
