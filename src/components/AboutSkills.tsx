import React from "react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Heart, MapPin, Gamepad2, Music, Code2 } from "lucide-react";

export function AboutSkills() {
  return (
    <section className="min-h-screen py-12 sm:py-16 px-4 sm:px-6 bg-[#f5f5f7] flex items-center overflow-y-auto">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold mb-4">
            Get to Know Me
          </div>
          <h2 className="text-[#0a0f2c] mb-4 text-3xl sm:text-4xl lg:text-5xl">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Developer, designer, and lifelong learner
          </p>
        </motion.div>

        {/* Bento Grid Layout - Responsive */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-auto">
          {/* Card 1: Large Bio Card */}
          <motion.div
            className="sm:col-span-2 lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-lg flex-shrink-0">
                    <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-[#0a0f2c] text-lg sm:text-2xl">Mai Tran Thanh Nhat</h3>
                    <p className="text-gray-500 text-sm sm:text-base">Front-End Developer</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                  I am an <span className="font-semibold text-[#0a0f2c]">Information Technology student</span> at 
                  Tra Vinh University (GPA 2.85). I bridge the gap between design and engineering.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Passionate about creating <span className="font-semibold text-teal-600">accessible software</span> that 
                  makes a real-world impact, particularly in education technology.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-medium">React</span>
                <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs sm:text-sm font-medium">Tailwind</span>
                <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs sm:text-sm font-medium">TypeScript</span>
              </div>
            </Card>
          </motion.div>

          {/* Card 2: Mission Card */}
          <motion.div
            className="sm:col-span-2 lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full min-h-[180px] bg-gradient-to-br from-[#1e3a8a] to-[#0c4a6e] border-0 shadow-lg hover:shadow-2xl transition-all p-6 flex items-center justify-center text-center">
              <div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="white" />
                </div>
                <h3 className="text-white mb-2 text-lg sm:text-xl">Mission</h3>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                  Building inclusive EdTech solutions for everyone
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Card 3: Location Card */}
          <motion.div
            className="sm:col-span-1 lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5, rotate: 2 }}
          >
            <Card className="h-full min-h-[160px] bg-white border-0 shadow-lg hover:shadow-2xl transition-all p-6 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center mb-3">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mb-1">Based in</div>
              <div className="font-bold text-[#0a0f2c] text-sm sm:text-base">Vietnam</div>
            </Card>
          </motion.div>

          {/* Card 4: Personality/Interests Card */}
          <motion.div
            className="sm:col-span-1 lg:col-span-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full min-h-[160px] bg-white border-0 shadow-lg hover:shadow-2xl transition-all p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="flex-1 text-center sm:text-left">
                <h4 className="text-[#0a0f2c] font-semibold mb-1 text-sm sm:text-base">Beyond Code</h4>
                <p className="text-xs sm:text-sm text-gray-600">Gamer & Music Enthusiast</p>
              </div>
              <div className="flex gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center transform hover:scale-110 transition-transform shadow-md">
                  <Gamepad2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center transform hover:scale-110 transition-transform shadow-md">
                  <Music className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Additional Stats Card */}
          <motion.div
            className="sm:col-span-2 lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full min-h-[160px] bg-gradient-to-br from-teal-50 to-cyan-50 border-0 shadow-lg hover:shadow-2xl transition-all p-6 flex flex-col justify-center">
              <div className="text-2xl sm:text-3xl font-bold text-teal-600 mb-1">B2</div>
              <div className="text-xs sm:text-sm text-gray-600">English Level</div>
              <div className="text-xs text-gray-500 mt-1">Professional Working</div>
            </Card>
          </motion.div>

          {/* Skills Grid Card */}
          <motion.div
            className="sm:col-span-2 lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all p-6">
              <h3 className="text-[#0a0f2c] mb-4 sm:mb-6 text-lg sm:text-xl">Tech Stack</h3>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { name: "React", emoji: "⚛️", color: "from-cyan-400 to-blue-500" },
                  { name: "Tailwind", emoji: "💨", color: "from-teal-400 to-cyan-500" },
                  { name: "Deno", emoji: "🦕", color: "from-gray-700 to-gray-900" },
                  { name: "Kotlin", emoji: "🔷", color: "from-purple-500 to-pink-500" },
                  { name: "TypeScript", emoji: "📘", color: "from-blue-600 to-blue-700" },
                  { name: "SQL", emoji: "🗄️", color: "from-orange-500 to-red-500" },
                ].map((tech, idx) => (
                  <motion.div
                    key={tech.name}
                    className="bg-gray-50 rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center text-center hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + idx * 0.05 }}
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-xl sm:text-2xl mb-2`}>
                      {tech.emoji}
                    </div>
                    <div className="text-xs font-semibold text-gray-700">{tech.name}</div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Education & Certifications Card */}
          <motion.div
            className="sm:col-span-2 lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all p-6">
              <h3 className="text-[#0a0f2c] mb-4 text-lg sm:text-xl">Education</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-lg sm:text-xl flex-shrink-0">
                      🎓
                    </div>
                    <div>
                      <div className="font-semibold text-[#0a0f2c] text-sm sm:text-base">IT Student</div>
                      <div className="text-xs text-gray-600">GPA 2.85</div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700">Tra Vinh University</p>
                </div>
                
                <div className="p-3 sm:p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-lg sm:text-xl flex-shrink-0">
                      📜
                    </div>
                    <div>
                      <div className="font-semibold text-[#0a0f2c] text-sm sm:text-base">Google UX Design</div>
                      <div className="text-xs text-gray-600">2025</div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700">Coursera Certification</p>
                </div>

                <div className="p-3 sm:p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-lg sm:text-xl flex-shrink-0">
                      👥
                    </div>
                    <div>
                      <div className="font-semibold text-[#0a0f2c] text-sm sm:text-base">ITHub Club</div>
                      <div className="text-xs text-gray-600">2024 - Present</div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700">Full-Stack & DevOps</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
