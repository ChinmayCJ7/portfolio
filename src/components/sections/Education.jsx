import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      degree: "B.E in Computer Science and Engineering",
      institution: "P.E.S. College of Engineering",
      location: "Mandya, Karnataka, India",
      period: "2022 – Present",
      icon: "🎓"
    },
    {
      degree: "PUC (Pre-University)",
      institution: "Cauvery Excel PU College",
      location: "Mandya, Karnataka, India",
      period: "2020 – 2022",
      icon: "📚"
    },
    {
      degree: "10th (SSLC)",
      institution: "Chinmaya Vidyalaya",
      location: "Mandya, Karnataka, India",
      period: "2019 – 2020",
      icon: "🏫"
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2>
            <span className="text-gradient">Education</span>
          </h2>
          <p>My academic journey and qualifications</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative mb-8 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== education.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-primary opacity-20"></div>
              )}

              <div className="flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl shadow-lg relative z-10">
                  {item.icon}
                </div>

                {/* Content Card */}
                <div className="flex-1 card">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-primary-start mb-1">
                        {item.degree}
                      </h3>
                      <p className="font-semibold text-secondary">
                        {item.institution}
                      </p>
                      <p className="text-sm text-muted flex items-center gap-2 mt-1">
                        <FaCalendarAlt className="text-xs" />
                        {item.location}
                      </p>
                    </div>
                    <div className="badge">
                      {item.period}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
