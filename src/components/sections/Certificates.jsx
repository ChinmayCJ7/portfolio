import React from "react";
import { motion as Motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt, FaJava } from "react-icons/fa";
import { SiReact, SiGoogle } from "react-icons/si";

export default function Certificates() {
  const certificates = [
    {
      title: "Web Development with React",
      issuer: "DLithe",
      icon: <SiReact />,
      color: "#61DAFB",
      year: "2024",
      link: "https://drive.google.com/file/d/1wJJLIplipBYRgX-TF1gtUNEGwAsp1PML/view?usp=sharing"
    },
    {
      title: "Java Concepts",
      issuer: "Infosys Springboard",
      icon: <FaJava />,
      color: "#007396",
      year: "2024",
      link: "https://drive.google.com/file/d/1YqdTUWTwXmSteDsMbXacERUJpZYeRqm7/view?usp=sharing"
    },
    {
      title: "GenAI for Data Analytics",
      issuer: "Forage",
      icon: <SiGoogle />,
      color: "#4285F4",
      year: "2025",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_bAGpurEPpkzeQBCEZ_1752827316291_completion_certificate.pdf"
    }
  ];

  return (
    <section id="certificates" className="section bg-secondary">
      <div className="container">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2>
            <span className="text-gradient">Certificates</span>
          </h2>
          <p>Professional certifications and achievements</p>
        </Motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group cursor-pointer"
            >
              {/* Icon Header */}
              <div className="flex items-center justify-between mb-4">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl bg-bg-secondary group-hover:scale-110 transition-transform"
                  style={{ color: cert.color }}
                >
                  {cert.icon}
                </div>
                <span className="badge">{cert.year}</span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-2 group-hover:text-gradient transition">
                {cert.title}
              </h3>
              <p className="text-sm text-muted flex items-center gap-2">
                <FaCertificate className="text-gradient" />
                {cert.issuer}
              </p>

              {/* Hover Effect */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener norefe rrer" 
                  className="flex items-center gap-2 text-sm text-primary-start font-semibold hover:text-primary-end transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>View Certificate</span>
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
