// src/components/Poetry.jsx
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const poems = [
  {
    id: 1,
    title: "The Quiet Path We Share",
    lines: [
      "I took a walk through woods today.",
      "Not dark, nor deep, but soft and still,",
      "The birch trees bent a gentle sway,",
      "Their leaves obeyed your quiet will.",
      "",
      "You walked beside me, hand in hand,",
      "No need for words, no need for why—",
      "Our silence spoke what hearts had planned,",
      "Like clouds that drift across the sky.",
      "",
      "We've known the storms that frost the pane,",
      "And watched them melt with morning light;",
      "You've stayed through joy, you've stayed through rain—",
      "A heat that warms the coldest night.",
      "",
      "I once believed that roads diverge,",
      "But now I see two paths converge,",
      "Where love has paved a better way.",
      "",
      "So let the world go where it must,",
      "With all its turns, both steep and wide—",
      "I have no fear, no loss, no lust,",
      "For you, my love, walk by my side."
    ],
  },
  {
    id: 2,
    title: "Magic is Contained in Everyone’s Life",
    lines: [
      "Tumhari kahani me bhi,",
      "jadoo bharmar hai,",
      "",
      "Bas aaj se khud ko,",
      "dekhna zara tum pyaar se.",
      "Khud pe umeed harna mat,",
      "Apni zindagi ke jadoo ko kam aakna mat.",
      "",
      "Yehi tumhe aage lekar jayega,",
      "Khud ko kuch samjhoge,",
      "Tabhi toh ye jahaan tumhe samajh payega.",
      "",
      "Toh giro kitni hi dafa tum,",
      "Phir uthna aur sabko kehna,",
      "Ki mai hi aag, mai hi paani,",
      "Aur mere hi andar chhupi vaayu hai.",
      "",
      "Tumhe na ho to na ho,",
      "Mujhe yakeen hai,",
      "Ki meri zindagi jadoo hai,",
      "Meri zindagi jadoo hai."
    ],
  },
  {
    id: 3,
    title: "Why People Hide",
    lines: [
      "Some speak in half, some not at all,",
      "They fear the truth, they fear the fall.",
      "Their smiles are kind, their words are sweet,",
      "But hollow echoes, incomplete.",
      "",
      "I ask them plain, they turn aside,",
      "They say they care, yet never bide.",
      "For truth, my friend, is cold and wide,",
      "And few will walk it side by side.",
      "",
      "Yet I shall take that lonely mile,",
      "Where hearts are few, but words beguile.",
      "For peace is found — not where crowds lied,",
      "But where the soul stands, undenied."
    ],
  },
];

export default function Poetry() {
  const heroRef = useRef(null);

  // 🌀 Mouse-based parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 15;
      const y = (e.clientY / innerHeight - 0.5) * 15;
      heroRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0C10] via-[#12161C] to-[#0B0C10] text-[#C5C6C7] relative overflow-hidden">
      {/* 🎵 Background Music */}
      <audio autoPlay loop src="/bg-music.mp3" volume="0.2" className="hidden" />

      {/* 🌌 Gradient + Glow Layers */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.25),transparent_70%)] blur-3xl"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_60%_40%,rgba(255,192,203,0.1),transparent_70%)] animate-pulse-slow"></div>

      {/* ✨ HERO SECTION */}
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center text-center py-40 overflow-hidden"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          transition: "transform 0.3s ease-out",
        }}
      >
        {/* Floating Glow Orb */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-blue-400/20 blur-3xl -z-10"
        />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text 
          bg-gradient-to-r from-pink-500 via-purple-400 to-orange-300 drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] select-none"
          style={{
            fontFamily: "'Playfair Display', serif",
            textShadow:
              "0 0 20px rgba(255, 105, 180, 0.4), 0 0 40px rgba(138, 43, 226, 0.3), 0 0 60px rgba(255, 165, 0, 0.3)",
          }}
        >
          My Poetry
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 text-slate-300 italic text-lg md:text-xl"
        >
          “Where every line is a heartbeat, and silence becomes rhythm.”
        </motion.p>

        {/* Scroll Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10"
        >
          <a
            href="#poems"
            className="px-6 py-3 text-sm md:text-base rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md text-slate-300 transition-all"
          >
            Read My Words ↓
          </a>
        </motion.div>

        {/* Back to Home */}
        <Link
          to="/"
          className="absolute top-10 left-10 text-slate-400 text-sm hover:text-slate-200 transition"
        >
          ← Back Home
        </Link>
      </section>

      {/* 💌 POEMS SECTION */}
      <div id="poems" className="max-w-4xl mx-auto px-6 space-y-20 pb-24">
        {poems.map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-pink-400 mb-6 tracking-wide">
              {p.title}
            </h2>
            <div className="space-y-3 text-lg text-slate-200 leading-relaxed font-light">
              {p.lines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="whitespace-pre-line"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.1rem",
                  }}
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center text-slate-500 pb-10">
        <p>© {new Date().getFullYear()} Shivang • Poetry flows like code, silence speaks like sound.</p>
      </footer>
    </div>
  );
}
