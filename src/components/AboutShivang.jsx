// src/components/AboutShivang.jsx
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import FloatingParticles from "./FloatingParticles";
import ContactSection from "./ContactSection";

export default function AboutShivang() {
  useEffect(() => {
    // Inject Spline viewer script
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.10.85/build/spline-viewer.js";
    document.body.appendChild(script);

    // Parallax motion effect for Spline scene
    const container = document.getElementById("spline-container");
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (e.clientX / innerWidth - 0.5) * 30;
      const offsetY = (e.clientY / innerHeight - 0.5) * 30;
      container.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.02)`;
    };
    const reset = () =>
      (container.style.transform = "translate(0px,0px) scale(1)");
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", reset);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", reset);
    };
  }, []);

  const projects = [
    {
      title: "Sketchify",
      desc: "AI-powered pencil-style sketch generator — realistic, hand-drawn sketches from photos.",
      tags: ["AI", "Node.js", "React", "Art"],
      link: "https://euphonious-crepe-b41389.netlify.app/",
    },
    {
      title: "Pulse",
      desc: "A home for new artists who want to showcase their talent.",
      tags: ["Creative Coding", "Audio React", "Video React"],
      link: "https://pulse-b.netlify.app/",
    },
  ];

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      {/* ✨ Floating background particles */}
      <FloatingParticles count={60} />

      {/* 🌌 Spline 3D Background */}
      <div
        id="spline-container"
        className="absolute inset-0 -z-10 opacity-90 transition-transform duration-500"
      >
        <spline-viewer
          url="https://prod.spline.design/mnA88ZvSa0nH7p9Y/scene.splinecode"
          style={{ width: "100%", height: "100%", border: "none" }}
        ></spline-viewer>
      </div>

      {/* 🌓 Theme Toggle Button */}
      <button
        onClick={() => document.documentElement.classList.toggle("light")}
        className="absolute top-6 right-6 z-20 px-4 py-2 rounded-xl bg-white/10 text-sm text-slate-300 hover:bg-white/20 transition"
      >
        Toggle Mode
      </button>

      {/* 🦋 Hero Section */}
<section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-12 px-6 pt-32 md:pt-40 relative max-w-6xl mx-auto">
  {/* 🖼️ Shivang’s Image */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    className="relative md:w-1/2 flex justify-center"
  >
    <div className="relative group">
      <img
        src="/your-image.jpg" // <-- replace this with your actual image path
        alt="Shivang"
        className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-3xl border-2 border-white/20 shadow-[0_0_40px_rgba(147,51,234,0.4)] transition-transform duration-700 group-hover:scale-105 group-hover:shadow-[0_0_60px_rgba(236,72,153,0.6)]"
      />
      {/* Glowing circle backdrop */}
      <div className="absolute -inset-5 rounded-full bg-gradient-to-r from-purple-600/40 to-pink-500/30 blur-3xl opacity-60 group-hover:opacity-80 transition-all"></div>
    </div>
  </motion.div>

  {/* 🌈 Text Section */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="md:w-1/2 relative z-10"
  >
    <div className="absolute -inset-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 blur-3xl rounded-full animate-flow-gradient"></div>

    <h1
      className="relative text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text
       bg-[length:400%_400%] bg-gradient-to-r 
       from-[#6EE7B7] via-[#3B82F6] via-[#9333EA] to-[#F59E0B]
       animate-flow-gradient drop-shadow-[0_0_20px_rgba(147,51,234,0.6)] font-[Orbitron]"
      style={{ fontFamily: "'Orbitron', sans-serif" }}
    >
      Hi, I’m Shivang
    </h1>

    <p className="text-slate-300 mt-6 text-lg leading-relaxed">
      A passionate developer, dreamer, and creator of digital art — blending
      math, AI, and music into expressive visual experiences.
    </p>

    <div className="mt-8 flex gap-4 justify-center md:justify-start">
      <a
        href="#projects"
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 transition-transform"
      >
        Explore My Work
      </a>
      <a
        href="#contact"
        className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition-all"
      >
        Connect
      </a>
    </div>
  </motion.div>
</section>


      {/* 💼 Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-32">
        <h2 className="text-4xl font-bold text-center mb-14">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-transparent bg-clip-text">
            Selected Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 overflow-hidden"
            >
              {proj.title === "Pulse" && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] animate-soundwave opacity-50"></div>
              )}
              <h3 className="font-semibold text-2xl mb-2">{proj.title}</h3>
              <p className="text-slate-300 text-sm mb-4">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white/10 px-3 py-1 rounded-full text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 💌 Contact Section */}
      <ContactSection />
    </div>
  );
}
