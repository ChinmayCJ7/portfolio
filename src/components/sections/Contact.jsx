import React, { useState, useRef } from "react";
import { motion as Motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaInstagram, } from "react-icons/fa"

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setStatus("Sending...");

  const SERVICE_ID = "service_q6cqjjf";
  const TEMPLATE_ID = "template_fzjbr2s";
  const PUBLIC_KEY = "jI5pD7GiRAKOWyd4E";

  // template params must match your EmailJS template variable names
  const templateParams = {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
    time: new Date().toLocaleString(), 
  };

  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    .then(() => {
      setStatus("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
      setTimeout(() => setStatus(""), 5000);
    })
    .catch((error) => {
      console.error("FAILED...", error);
      setStatus("Failed to send message. Please try again or email me directly.");
      setIsSubmitting(false);
      setTimeout(() => setStatus(""), 5000);
    });
};


  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "chinmay94486@gmail.com",
      link: "mailto:chinmay94486@gmail.com"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 9449475936",
      link: "tel:+919449475936"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Mandya, Karnataka, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/ChinmayCJ7",
      color: "#181717"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/chinmay-j",
      color: "#0A66C2"
    },
    {
      icon: <FaInstagram />,
      title: "Instagram",
      value: "@chinmay_cj7",
      link: "https://www.instagram.com/chinmay_cj7"
    }
  ];

  return (
    <section id="contact" className="section bg-secondary">
      <div className="container">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2>
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p>Let's discuss your project or just say hi!</p>
        </Motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-secondary leading-relaxed mb-6">
                Feel free to reach out to me for any opportunities, collaborations, 
                or just to connect. I'm always open to discussing new projects and ideas.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="card flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted mb-1">{info.title}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="font-semibold hover:text-gradient transition"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-semibold">{info.value}</p>
                    )}
                  </div>
                </Motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="w-14 h-14 rounded-xl bg-card border border-card-border flex items-center justify-center text-2xl hover:border-primary-start hover:shadow-lg transition-all"
                    aria-label={social.name}
                  >
                    <span style={{ color: social.color }}>{social.icon}</span>
                  </Motion.a>
                ))}
              </div>
            </div>
          </Motion.div>

          {/* Right - Contact Form */}
          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="card">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-card-border bg-bg-secondary focus:border-primary-start focus:ring-2 focus:ring-primary-start/20 outline-none transition"
                    placeholder="CJ7"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-card-border bg-bg-secondary focus:border-primary-start focus:ring-2 focus:ring-primary-start/20 outline-none transition"
                    placeholder="123@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-card-border bg-bg-secondary focus:border-primary-start focus:ring-2 focus:ring-primary-start/20 outline-none transition"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-card-border bg-bg-secondary focus:border-primary-start focus:ring-2 focus:ring-primary-start/20 outline-none transition resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  <FaPaperPlane />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {status && (
                  <Motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm"
                  >
                    {status}
                  </Motion.div>
                )}
              </form>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
