import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { ExternalLink, ArrowUpRight } from "lucide-react";

export function FeaturedProjects() {
  return (
    <section id="projects" className="min-h-screen py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50 flex items-center overflow-y-auto">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold mb-4">
            Featured Work
          </div>
          <h2 className="text-[#0a0f2c] mb-4 text-3xl sm:text-4xl lg:text-5xl">Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Real-world solutions built with passion for education and accessibility
          </p>
        </motion.div>

        <div className="space-y-16 sm:space-y-20 max-w-6xl mx-auto">
          {/* Project 1: Web App */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                {/* Laptop mockup */}
                <motion.div
                  className="relative order-2 lg:order-1"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Laptop device frame */}
                  <div className="relative bg-gray-900 rounded-t-2xl p-2 sm:p-3 shadow-2xl">
                    <div className="bg-white rounded-lg overflow-hidden shadow-inner">
                      <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 p-3 sm:p-6">
                        <img
                          src="https://images.unsplash.com/photo-1587902673915-631e5ba4488f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBtb2NrdXAlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzNTY4NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="English Learning Web App"
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                    </div>
                    {/* Laptop notch */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-1 bg-gray-800 rounded-t-full" />
                  </div>
                  {/* Laptop base */}
                  <div className="w-full h-2 bg-gradient-to-b from-gray-800 to-gray-700 rounded-b-2xl shadow-lg" />
                  <div className="w-[110%] h-1 bg-gray-600 rounded-b-3xl -ml-[5%] shadow-2xl" />

                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 blur-2xl -z-10 rounded-3xl" />
                </motion.div>

                {/* Info card */}
                <div className="order-1 lg:order-2">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-[#0a0f2c] text-xl sm:text-2xl">English Learning Platform</h3>
                    <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-teal-500 flex-shrink-0 ml-2" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                    Web application designed for Khmer learners featuring multilingual support, 
                    offline capabilities, and an intuitive interface to make English learning accessible.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-700 border-0">React</Badge>
                    <Badge className="bg-cyan-100 text-cyan-700 border-0">Tailwind CSS</Badge>
                    <Badge className="bg-purple-100 text-purple-700 border-0">Deno</Badge>
                    <Badge className="bg-green-100 text-green-700 border-0">SQL</Badge>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 2: Mobile App */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                {/* Info card */}
                <div className="order-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-[#0a0f2c] text-xl sm:text-2xl">Attendance Application</h3>
                    <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-teal-500 flex-shrink-0 ml-2" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                    Offline-first mobile solution for classroom management, enabling teachers to track 
                    student attendance efficiently even without internet connectivity.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-100 text-purple-700 border-0">Kotlin</Badge>
                    <Badge className="bg-orange-100 text-orange-700 border-0">SQLite</Badge>
                    <Badge className="bg-green-100 text-green-700 border-0">Android Studio</Badge>
                  </div>
                </div>

                {/* Mobile mockup */}
                <motion.div
                  className="relative order-2 flex justify-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Phone device frame */}
                  <div className="relative bg-gray-900 rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl w-64 sm:w-72">
                    <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
                      {/* Notch */}
                      <div className="relative bg-gray-900 h-5 sm:h-6 flex items-center justify-center">
                        <div className="w-24 sm:w-32 h-4 sm:h-5 bg-gray-900 rounded-b-2xl" />
                      </div>
                      
                      {/* Screen content */}
                      <div className="aspect-[9/16] bg-gradient-to-br from-gray-50 to-gray-100 p-3 sm:p-4">
                        <img
                          src="https://images.unsplash.com/photo-1603015269169-225cb700e29a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9ja3VwJTIwbWluaW1hbHxlbnwxfHx8fDE3NjM2MzA2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="Student Attendance App"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-2xl -z-10 rounded-3xl" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* View all projects link */}
        <motion.div
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold group text-sm sm:text-base">
            View All Projects
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
