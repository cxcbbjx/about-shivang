import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Research() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const papers = [
    {
      title: "AI-Driven Sketch Generation",
      desc: "Exploring artistic intelligence: transforming images into hand-drawn sketches using hybrid deep learning methods.",
      file: "/papers/sketchify_research.pdf",
    },
    {
      title: "Mathematical Face Generation",
      desc: "Study of equation-based generative art and real-time animation control via user input and audio feedback.",
      file: "/papers/math_face_study.pdf",
    },
  ];

  const projects = [
    {
      title: "Pulse — The Interactive Music World",
      desc: "A community for independent artists that visualizes music in real time through dynamic shaders and rhythm-based visuals.",
      status: "Currently in Development",
    },
    {
      title: "NeuroArt Engine",
      desc: "An open-source AI model for generating emotional art through text and sound prompts.",
      status: "Concept Stage",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#08080e] via-[#0f1118] to-[#08080e] text-slate-100 relative overflow-hidden">
      {/* 🎬 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-60 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-purple-800 to-pink-600 opacity-10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-700 to-purple-500 opacity-10 blur-[100px]" />
      </div>

      {/* 🔹 Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center pt-24 pb-16"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
          The Vision
        </h1>
        <p className="mt-4 text-slate-400 text-lg">
          A journey through ideas, research, and the pursuit of creation.
        </p>
      </motion.div>

      {/* 🧠 Research Papers */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-semibold mb-8 text-pink-400">
          Research Papers
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {papers.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-slate-300 text-sm mb-4">{p.desc}</p>
              <iframe
                src={p.file}
                title={p.title}
                className="w-full h-64 rounded-xl border border-white/10"
              />
              <a
                href={p.file}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:scale-105 transition-transform"
              >
                Read Full Paper
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 💡 Upcoming Projects */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-semibold mb-8 text-indigo-400">
          Upcoming Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
              className="p-6 rounded-3xl bg-gradient-to-br from-indigo-900/20 to-purple-900/10 border border-white/10 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.05)]"
            >
              <h3 className="text-xl font-bold text-slate-100 mb-2">
                {p.title}
              </h3>
              <p className="text-slate-300 text-sm mb-3">{p.desc}</p>
              <p className="text-xs text-pink-400 font-medium">{p.status}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📄 Resume & Collab */}
      <section className="max-w-5xl mx-auto px-6 mb-32 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-yellow-400">
          Resume & Collaboration
        </h2>
        <p className="text-slate-400 mb-6 max-w-xl mx-auto">
          If you believe in art, math, or meaningful tech — let's create
          something timeless.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:scale-105 transition-transform text-white font-medium"
          >
            View Resume
          </a>
          <a
            href="mailto:shivandsagar529@gmail.com?subject=Collaboration%20Inquiry"
            className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition-all text-slate-300 font-medium"
          >
            Collaborate with Me
          </a>
        </div>
      </section>

      {/* 🔻 Footer */}
      <footer className="text-center text-slate-500 pb-12">
        “Ideas are born in solitude, but shaped by connection.” — Shivang
      </footer>
    </div>
  );
}
