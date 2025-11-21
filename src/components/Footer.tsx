import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "thanhnhatff@gmail.com",
    href: "mailto:thanhnhatff@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0868967349",
    href: "tel:0868967349",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Khom 4, Phuong Duyen Hai, Vinh Long, Vietnam",
    href: null,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "NhatThanh115",
    href: "https://github.com/NhatThanh115",
  },
];

export function Footer() {
  return (
    <footer className="min-h-screen bg-gradient-to-br from-[#0a0f2c] via-[#1e3a8a] to-[#0c4a6e] text-white py-12 sm:py-16 px-4 sm:px-6 flex items-center overflow-y-auto relative">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-20 w-48 h-48 sm:w-72 sm:h-72 bg-teal-500 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl">Let's Build Something Amazing</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-5xl mx-auto">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {contact.href ? (
                <a
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block h-full"
                >
                  <motion.div
                    className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl hover:bg-white/15 transition-all border border-white/20 h-full"
                    whileHover={{ y: -5 }}
                  >
                    <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400 mb-2 sm:mb-3" />
                    <div className="text-xs text-gray-400 mb-1">{contact.label}</div>
                    <div className="text-white text-xs sm:text-sm font-medium break-words">{contact.value}</div>
                  </motion.div>
                </a>
              ) : (
                <motion.div
                  className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/20 h-full"
                  whileHover={{ y: -5 }}
                >
                  <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400 mb-2 sm:mb-3" />
                  <div className="text-xs text-gray-400 mb-1">{contact.label}</div>
                  <div className="text-white text-xs sm:text-sm font-medium">{contact.value}</div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/NhatThanh115"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1, y: -3 }}
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
          <motion.a
            href="#"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1, y: -3 }}
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
        </motion.div>

        {/* Footer bottom */}
        <motion.div
          className="text-center pt-6 sm:pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-400 text-xs sm:text-sm mb-2">
            © {new Date().getFullYear()} Mai Tran Thanh Nhat. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Built with React, Tailwind CSS, and Motion • Designed for accessibility
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
