import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="contact"
      className="relative mt-28 py-24 px-6 text-center overflow-hidden"
    >
      {/* 🌈 Soft Gradient Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,182,193,0.1),transparent_70%)] blur-3xl" />

      {/* ✨ Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 opacity-20"
            style={{
              width: Math.random() * 6 + 2 + "px",
              height: Math.random() * 6 + 2 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.6, 0.2],
              translateX: (cursor.x - window.innerWidth / 2) * 0.01,
              translateY: (cursor.y - window.innerHeight / 2) * 0.01,
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* 💎 Main Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-10"
      >
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 mb-6">
          Get in Touch
        </h2>

        <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
          Have an idea, want to collaborate, or just share your story?  
          Let’s build something that connects logic with emotion, and code with art.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="mailto:hello@shivang.dev"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 font-medium text-white hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 transition-all"
          >
            Email Me
          </a>

          <a
            href="https://github.com/cxcbbjx"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 text-slate-300 font-medium transition-all hover:scale-105"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/shivang-sagar-264249314/"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 text-slate-300 font-medium transition-all hover:scale-105"
          >
            LinkedIn
          </a>

          <a
            href="/poetry"
            className="px-6 py-3 rounded-xl border border-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-400 text-slate-300 font-medium transition-all hover:scale-105"
          >
            My Poetry
          </a>

          <a
            href="/her"
            className="px-6 py-3 rounded-xl border border-white/10 hover:bg-gradient-to-r hover:from-rose-400 hover:to-orange-400 text-slate-300 font-medium transition-all hover:scale-105"
          >
            About Her
          </a>
         
         <a
          href="/journey"
          className="px-6 py-3 rounded-xl border border-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-400 text-slate-300 font-medium transition-all hover:scale-105"
        >
          My Journey
        </a>

        

        </div>

      </motion.div>

      {/* 🌙 Footer Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 mt-16 text-slate-400 text-sm space-y-2"
      >
        <p className="italic">“In the Vanity of my code.” — Shivang</p>
        <p className="text-slate-500">
          Built with ❤️ using React, TailwindCSS, and Spline.
        </p>
      </motion.div>
    </section>
  );
}
