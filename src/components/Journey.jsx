// src/components/Journey.jsx
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

/**
 * 🎞️ The Cinematic Journey Hub
 * - 3D tilt hover cards
 * - Smooth glow and lighting effects
 * - Ambient background soundtrack
 * - Morph animation into ChapterPage
 */

const CHAPTERS = [
  {
    id: "starting-point",
    title: "The Starting Point",
    summary: "Where a stubborn spark turned into a lifelong flame.",
    mood: "from-indigo-900 via-purple-900 to-black",
    cover: "/images/starting-cover.jpg",
  },
  {
    id: "past-life",
    title: "Past Life",
    summary: "The walls, the silence, and the patience that followed.",
    mood: "from-gray-800 via-gray-900 to-black",
    cover: "/images/past-cover.jpg",
  },
  {
    id: "suicidal-thoughts",
    title: "Suicidal Thoughts",
    summary: "Dark nights that taught me the meaning of small victories.",
    mood: "from-black via-purple-950 to-black",
    cover: "/images/dark-cover.jpg",
  },
  {
    id: "present-life",
    title: "Present Life",
    summary: "Where I explore the human side of technology and art.",
    mood: "from-indigo-800 via-blue-800 to-black",
    cover: "/images/present-cover.jpg",
  },
  {
    id: "books",
    title: "Books I Read",
    summary: "Stories that rewired how I saw the world.",
    mood: "from-orange-700 via-yellow-600 to-black",
    cover: "/images/books-cover.jpg",
  },
];

export default function Journey() {
  const nav = useNavigate();

  // 🎵 Ambient background music setup
  useEffect(() => {
    const bgMusic = new Audio("/journey_bg.mp3");
    bgMusic.loop = true;
    bgMusic.volume = 0.2;
    bgMusic.play().catch(() => {});
    window._journeyMusic = bgMusic;

    // preload subtle sounds
    window.hoverSound = new Audio("/ui_hover.mp3");
    window.hoverSound.volume = 0.25;
    window.clickSound = new Audio("/ui_click.mp3");
    window.clickSound.volume = 0.35;

    return () => {
      try {
        bgMusic.pause();
      } catch {}
    };
  }, []);

  // 🎬 On click — fade out bg music + play click sound + navigate
  const handleClick = (id) => {
    try {
      window.clickSound?.play();
      if (window._journeyMusic) {
        const fadeOut = setInterval(() => {
          if (window._journeyMusic.volume > 0.02) {
            window._journeyMusic.volume -= 0.02;
          } else {
            window._journeyMusic.pause();
            clearInterval(fadeOut);
          }
        }, 80);
      }
    } catch {}
    nav(`/journey/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen relative bg-gradient-to-b from-[#040409] via-[#0b0d10] to-[#040409] text-slate-100 overflow-hidden"
    >
      {/* ✨ Background Lighting Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -left-72 -top-40 w-[900px] h-[900px] rounded-full bg-gradient-to-tr from-[#3b0066] to-[#ff6fb1] opacity-10 blur-3xl"
          animate={{
            opacity: [0.08, 0.15, 0.08],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-[-200px] top-32 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#0ea5ff] to-[#7c3aed] opacity-8 blur-3xl"
          animate={{
            opacity: [0.05, 0.12, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* 🎥 Intro Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center pt-24 pb-12 z-10 relative"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300"
          animate={{ textShadow: ["0px 0px 10px #b26bff", "0px 0px 30px #e38cff", "0px 0px 10px #b26bff"] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          The_Chapters
        </motion.h1>
        <motion.p
          className="mt-4 text-slate-400 max-w-xl mx-auto"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          A cinematic timeline of life —.
        </motion.p>
      </motion.div>

      {/* 📖 Chapter Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-32 relative z-10">
        {CHAPTERS.map((c, i) => (
          <TiltCard key={c.id} data={c} index={i} onClick={() => handleClick(c.id)} />
        ))}
      </div>

      <footer className="text-center text-slate-500 pb-16">
        © 2025 Shivang • 
      </footer>
    </motion.div>
  );
}

// 🎴 Individual TiltCard component
function TiltCard({ data, index, onClick }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleHoverStart = () => {
    try {
      window.hoverSound.currentTime = 0;
      window.hoverSound.play();
    } catch {}
  };

  return (
    <motion.div
      layoutId={`chapter-${data.id}`} // morph animation link
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      onHoverStart={handleHoverStart}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      onClick={onClick}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative rounded-2xl cursor-pointer bg-gradient-to-br ${data.mood} border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.05)] overflow-hidden transform-gpu`}
    >
      {/* Card background */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url(${data.cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay",
        }}
      />
      <div
        className="relative z-10 p-6 flex flex-col justify-between min-h-[220px]"
        style={{ transform: "translateZ(40px)" }}
      >
        <div>
          <h3 className="text-2xl font-semibold">{data.title}</h3>
          <p className="mt-2 text-slate-300 text-sm line-clamp-3">
            {data.summary}
          </p>
        </div>
        <div className="flex items-center justify-between mt-6 text-xs text-slate-400">
          <span>Scene • {index + 1}</span>
          <span>Open →</span>
        </div>
      </div>

      {/* Border glow pulse */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        style={{
          boxShadow:
            "inset 0 0 40px rgba(147,51,234,0.08), 0 10px 50px rgba(147,51,234,0.08)",
          border: "1px solid rgba(147,51,234,0.08)",
        }}
      />
    </motion.div>
  );
}
