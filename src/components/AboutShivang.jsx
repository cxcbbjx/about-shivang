import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutShivang() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#02020a] via-[#08081a] to-[#02020a] text-white relative overflow-hidden">

      {/* ✨ Background gradient glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-150px] w-[600px] h-[600px] bg-purple-800/30 rounded-full blur-[200px]" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-pink-600/30 rounded-full blur-[180px]" />
      </div>

      {/* 🌠 Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-[90vh] px-6 md:px-16 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center md:items-start max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-[0_0_25px_rgba(147,51,234,0.6)]">
            Hi, I'm Shivang
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed">
            A passionate developer, dreamer, and creator of digital art — blending math,
            AI, and music into expressive visual experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/journey"
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              Explore My Journey
            </Link>
            <Link
              to="/her"
              className="px-6 py-3 bg-transparent border border-purple-400/50 hover:bg-purple-500/20 rounded-xl text-slate-300 font-medium transition-all"
            >
              Know About Her
            </Link>
          </div>
        </motion.div>

        {/* 🖼️ Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="mt-12 md:mt-0 md:ml-16"
        >
          <img
            src="/images/shivang.jpeg"
            alt="Shivang"
            className="rounded-3xl shadow-[0_0_60px_rgba(147,51,234,0.4)] w-[260px] md:w-[300px]"
          />
        </motion.div>
      </section>

      {/* 🚀 Projects Section */}
      <section className="px-8 md:px-20 py-24">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-16">
          Selected Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <ProjectCard
            title="Sketchify"
            description="AI-powered pencil-style sketch generator — transforming images into hand-drawn sketches using artistic intelligence."
            link="https://euphonious-crepe-b41389.netlify.app/"
          />
          <ProjectCard
            title="Pulse"
            description="A creative home for artists to share their songs and showcase their skills."
            link="https://pulse-b.netlify.app/"
          />
        </div>
      </section>

      {/* 🧠 Research Section */}
      <section className="px-8 md:px-20 py-20 bg-gradient-to-t from-[#0a0115] via-[#0b0012] to-[#06010d] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
        >
          My Research Work
        </motion.h2>

        <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
          Exploring Artistic Intelligence — where deep learning meets creativity.
          A study that transforms photographs into expressive, hand-drawn sketches.
        </p>

        <Link
          to="/research"
          className="mt-8 inline-block px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl font-semibold text-white hover:scale-105 transition-transform shadow-lg"
        >
          🔬 View My Research
        </Link>
      </section>

      {/* 💬 Get In Touch */}
      <section className="py-24 text-center px-8 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 mb-6">
          Get in Touch
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-8">
          Let’s build something beautiful together — whether it’s code, music, or art.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="mailto:shivangsagar529@gmail.com"
            className="px-5 py-3 border border-purple-500 rounded-xl hover:bg-purple-500/20 transition-all"
          >
            ✉️ Email
          </a>
          <a
            href="https://github.com/cxcbbjx"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 border border-indigo-500 rounded-xl hover:bg-indigo-500/20 transition-all"
          >
            💻 GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shivang-sagar-264249314/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 border border-pink-500 rounded-xl hover:bg-pink-500/20 transition-all"
          >
            🔗 LinkedIn
          </a>
        </div>

        
      </section>

      {/* 🩶 Footer */}
      <footer className="text-center text-slate-500 text-sm py-8 border-t border-white/10">
        © 2025 Shivang •
      </footer>
    </div>
  );
}

// 📦 Reusable Project Card
function ProjectCard({ title, description, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="bg-[#0b0b13]/60 border border-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-sm hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all"
    >
      <h3 className="text-2xl font-semibold text-purple-300">{title}</h3>
      <p className="text-slate-400 mt-3 mb-5">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:underline text-sm"
        >
          Visit Project →
        </a>
      )}
    </motion.div>
  );
}
