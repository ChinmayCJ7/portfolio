import React from "react";
import { motion as Motion } from "framer-motion";
import { FaDatabase, FaCloud, FaCode, FaJava, FaPaintBrush, FaAws } from "react-icons/fa";
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiLinux,
  SiGit,
  SiGithub,
  SiFigma
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";



export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      icon: <FaCode />,
      skills: [
        { name: "Python", icon: <SiPython />, color: "#3776AB" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "Java", icon: <FaJava />, color: "#007396" },
        { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      icon: <SiReact />,
      skills: [
        { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
        { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "REST APIs", icon: <FaCode />, color: "#6366F1" }
      ]
    },
    {
      category: "Backend & Databases",
      icon: <FaDatabase />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: "Express", icon: <SiExpress />, color: "#000000" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "SQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "JWT Auth", icon: <FaCode />, color: "#000000" }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: <FaCloud />,
      skills: [
        { name: "AWS EC2", icon: <FaAws />, color: "#FF9900" },
        { name: "AWS S3", icon: <FaAws />, color: "#FF9900" },
        { name: "AWS IAM", icon: <FaAws />, color: "#FF9900" },
        { name: "Linux", icon: <SiLinux />, color: "#FCC624" }
      ]
    },
    {
      category: "Tools & Others",
      icon: <SiGit />,
      skills: [
        { name: "Git", icon: <SiGit />, color: "#F05032" },
        { name: "GitHub", icon: <SiGithub />, color: "#181717" },
        { name: "VS Code", icon: <VscVscode />, color: "#007ACC" },
        { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
        { name: "Canva", icon: <FaPaintBrush />, color: "#00C4CC" }
      ]
    }
  ];

  const softSkills = [
    "Communication",
    "Teamwork",
    "Adaptability",
    "Problem Solving",
    "Leadership",
    "Time Management"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2>
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p>Technologies and tools I work with</p>
        </Motion.div>

        {/* Technical Skills */}
        <div className="grid gap-8 mb-12">
          {skillCategories.map((category, catIndex) => (
            <Motion.div
              key={catIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-white text-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <Motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="flex flex-col items-center gap-3 p-4 rounded-lg bg-bg-secondary border border-card-border hover:border-primary-start hover:shadow-lg transition-all group cursor-default"
                  >
                    <div 
                      className="text-4xl transition-transform group-hover:scale-110 duration-300"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </Motion.div>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card bg-gradient-mesh"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Soft Skills</h3>
            <p className="text-muted">Essential qualities that drive my work</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <Motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.0, delay: index * 0.0 }}
                whileHover={{ scale: 1.05 }}
                className="badge text-base px-6 py-3 cursor-default"
              >
                {skill}
              </Motion.span>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
