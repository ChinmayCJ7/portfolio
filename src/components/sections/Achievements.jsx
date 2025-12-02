import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaTrophy, FaStar, FaUsers, FaAward } from "react-icons/fa";

export default function Achievements() {
  const achievements = [
    {
      title: "Co-Secretary, YRCW — PESCE Mandya",
      description: "Coordinated college-wide events, managed volunteer teams, and facilitated student engagement and community service activities.",
      icon: <FaUsers />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Academic Project Leadership",
      description: "Led academic project teams by planning tasks, reviewing code, ensuring smooth communication, and achieving timely project completion.",
      icon: <FaStar />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Best Student Award — ISTE",
      description: "Recognized for excellence in academics, leadership, and consistent contribution to college activities.",
      icon: <FaTrophy />,
      color: "from-yellow-500 to-orange-500"
    },
   
  ];

  return (
    <section id="achievements" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2>
            Leadership & <span className="text-gradient">Achievements</span>
          </h2>
          <p>Recognition and contributions beyond academics</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-auto gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform relative z-10`}>
                {achievement.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 relative z-10">
                {achievement.title}
              </h3>
              <p className="text-secondary leading-relaxed relative z-10">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 card bg-gradient-mesh"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">2+</div>
              <p className="text-sm text-muted">Years of Study</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">5+</div>
              <p className="text-sm text-muted">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">3</div>
              <p className="text-sm text-muted">Certifications</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">10+</div>
              <p className="text-sm text-muted">Technologies</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
