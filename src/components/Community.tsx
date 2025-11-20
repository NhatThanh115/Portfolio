import React from "react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
import { FaReact, FaDatabase, FaFigma, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiDeno, SiKotlin } from "react-icons/si";

const technologies = [
  {
    name: "React",
    icon: FaReact,
    color: "from-cyan-400 to-blue-500",
    bgColor: "bg-blue-50",
    glowColor: "hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]",
    borderColor: "hover:border-blue-400",
    description: "Component-based UI library",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "from-teal-400 to-cyan-500",
    bgColor: "bg-teal-50",
    glowColor: "hover:shadow-[0_0_30px_rgba(20,184,166,0.6)]",
    borderColor: "hover:border-teal-400",
    description: "Utility-first CSS framework",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "from-blue-600 to-blue-700",
    bgColor: "bg-blue-50",
    glowColor: "hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]",
    borderColor: "hover:border-blue-600",
    description: "Type-safe JavaScript",
    category: "Frontend",
  },
  {
    name: "Deno",
    icon: SiDeno,
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gray-50",
    glowColor: "hover:shadow-[0_0_30px_rgba(55,65,81,0.6)]",
    borderColor: "hover:border-gray-700",
    description: "Modern JavaScript runtime",
    category: "Backend",
  },
  {
    name: "SQL",
    icon: FaDatabase,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    glowColor: "hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]",
    borderColor: "hover:border-orange-500",
    description: "Database management",
    category: "Backend",
  },
  {
    name: "Kotlin",
    icon: SiKotlin,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    glowColor: "hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]",
    borderColor: "hover:border-purple-500",
    description: "Android development",
    category: "Mobile",
  },
  {
    name: "Figma",
    icon: FaFigma,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    glowColor: "hover:shadow-[0_0_30px_rgba(236,72,153,0.6)]",
    borderColor: "hover:border-pink-500",
    description: "UI/UX design tool",
    category: "Design",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "from-red-600 to-orange-600",
    bgColor: "bg-red-50",
    glowColor: "hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]",
    borderColor: "hover:border-red-600",
    description: "Version control",
    category: "Tools",
  },
];

export function Community() {
  return (
    <section className="min-h-screen py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50 flex items-center overflow-y-auto">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold mb-4">
            Technical Expertise
          </div>
          <h2 className="text-[#0a0f2c] mb-4 text-3xl sm:text-4xl lg:text-5xl">Skills & Technologies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Full-stack development with modern tools and frameworks
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Large Tech Icons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className={`${tech.bgColor} border-2 border-transparent ${tech.borderColor} ${tech.glowColor} shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 h-full`}>
                    <div className="flex flex-col items-center text-center">
                      
                      {/* --- CHANGED SECTION START --- */}
                      {/* Large Icon Container */}
                      <motion.div 
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-3 sm:mb-4 shadow-md`}
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {/* Render the React Icon Component here */}
                        {React.createElement(tech.icon, { className: "text-3xl sm:text-4xl text-white" })}
                      </motion.div>
                      {/* --- CHANGED SECTION END --- */}
                      
                      {/* Tech Name */}
                      <h3 className="text-[#0a0f2c] mb-2 text-sm sm:text-base">{tech.name}</h3>
                      
                      {/* Category Badge */}
                      <div className="inline-block px-2 sm:px-3 py-1 rounded-full bg-white/50 text-xs font-semibold text-gray-700 mb-2">
                        {tech.category}
                      </div>
                      
                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed hidden sm:block">
                        {tech.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="bg-white border-0 shadow-lg p-6 sm:p-8">
              <h3 className="text-[#0a0f2c] mb-4 sm:mb-6 text-center text-lg sm:text-xl">Additional Skills</h3>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {[
                  "JavaScript", "HTML/CSS", "Android Studio", "SQLite", 
                  "REST APIs", "Responsive Design", "Agile", "GitHub"
                ].map((skill, idx) => (
                  <motion.span
                    key={skill}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-medium hover:from-teal-50 hover:to-cyan-50 hover:text-teal-700 transition-all cursor-default text-xs sm:text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + idx * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}