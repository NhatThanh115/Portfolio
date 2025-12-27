import React from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Mai-Tran-Thanh-Nhat-CV.pdf';
    link.download = 'Mai-Tran-Thanh-Nhat-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-[#0a0f2c] via-[#1e3a8a] to-[#0c4a6e]">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 -left-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 -right-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full py-20 lg:py-0">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 sm:mb-6 text-xs sm:text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-teal-400" />
            <span className="text-teal-300">Available for opportunities</span>
          </motion.div>

          <motion.p
            className="text-teal-400 mb-2 sm:mb-3 tracking-wider uppercase text-xs sm:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Front-End Developer
          </motion.p>
          
          <h1 className="text-white mb-4 sm:mb-6 leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
              Mai Tran Thanh Nhat
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-lg leading-relaxed">
            A UI/UX Enthusiast passionate for inclusive{" "}
            <span className="text-teal-400 font-semibold">Education Technology</span>
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white shadow-lg shadow-teal-500/50 border-0 w-full sm:w-auto"
              onClick={scrollToProjects}
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm w-full sm:w-auto"
              onClick={downloadCV}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">2+</div>
              <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">5+</div>
              <div className="text-xs sm:text-sm text-gray-400">Projects Built</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">B2</div>
              <div className="text-xs sm:text-sm text-gray-400">English Level</div>
            </div>
          </div>
        </motion.div>

        {/* Right glassmorphism card with illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: 15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden lg:block"
        >
          <motion.div
            className="relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Glassmorphism inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 p-6 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1727522974735-44251dfe61b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc29tZXRyaWMlMjBjb2RpbmclMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzYzNjMwNjA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Student coding illustration"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl">
                <div className="text-2xl font-bold text-[#1e3a8a]">EdTech</div>
                <div className="text-xs text-gray-600">Enthusiast</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl px-4 py-3 shadow-xl">
                <div className="text-sm font-semibold text-white">Building Accessible</div>
                <div className="text-xs text-white/80">Learning Experiences</div>
              </div>
            </div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="absolute -z-10 inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl blur-2xl opacity-30"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-teal-400 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
