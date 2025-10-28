// src/components/Her.jsx
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const questions = [
  {
    q: "How did we meet?",
    a: "It was unexpected — a random day in coaching, a random seat, and suddenly the world decided I should see her smile. That’s all it took.",
  },
  {
    q: "What made her special?",
    a: "She never tried to be perfect. She was just herself — honest, clumsy, and kind. And maybe that’s why everything about her felt real.",
  },
  {
    q: "How did she change me?",
    a: "She taught me that love isn’t always loud — sometimes it’s just quiet presence, shared silence, and an unspoken understanding.",
  },
  {
    q: "What’s your favorite memory?",
    a: "That one afternoon — when she fed me lunch with her hands. No words, just that moment. The world slowed down, and I wished time would too.",
  },
  {
    q: "Do you still miss her?",
    a: "Every day, in the smallest ways. But I’ve learned that missing someone doesn’t mean you’re weak — it just means your heart remembers beauty deeply.",
  },
  {
    q: "If you could tell her something now?",
    a: "I’d tell her — you’re still the softest part of my story, even if you’re no longer in its chapters.",
  },
];

// 💫 Each image has its own poetic caption
const galleryImages = [
  {
    img: "her1.jpeg",
    caption: "“Her smile — the kind that made the world forget its noise.”",
  },
  {
    img: "her2.jpeg",
    caption: "“Her eyes — where even silence learned to dream.”",
  },
  {
    img: "her3.jpeg",
    caption: "“That moment — when time paused just to watch her breathe.”",
  },
  {
    img: "her4.jpeg",
    caption: "“Her presence felt like a poem no words could write.”",
  },
];

export default function Her() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  // 🎵 Ambient piano background
  useEffect(() => {
    const audio = new Audio("/her-bg.mp3");
    audio.volume = 0.25;
    audio.loop = true;
    audio.play().catch(() => {});
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  // ✨ Mouse motion for particle interaction
  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const { scrollYProgress } = useScroll();
  const lightY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0114] text-[#f5e8ff]">
      {/* 🌈 Cinematic radial light */}
      <motion.div
        className="absolute top-0 left-1/2 w-[120vw] h-[120vh] -translate-x-1/2 bg-[radial-gradient(circle,rgba(147,51,234,0.12)_0%,transparent_70%)] blur-3xl -z-10"
        style={{ y: lightY }}
      ></motion.div>

      {/* 🌑 Vignette shading */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_65%,rgba(0,0,0,0.6)_100%)] z-0"></div>

      {/* 💫 Floating Memory Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"
            style={{
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.15 + Math.random() * 0.3,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 25, 0],
              opacity: [0.2, 0.6, 0.2],
              translateX: (cursor.x - window.innerWidth / 2) * 0.01,
              translateY: (cursor.y - window.innerHeight / 2) * 0.01,
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* 🌷 Intro line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="text-center pt-32 px-6"
      >
        <p className="text-slate-400 italic text-lg max-w-3xl mx-auto leading-relaxed">
          “Sometimes, the most beautiful stories... never get told aloud.”
        </p>
      </motion.div>

      {/* 💜 Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="text-7xl md:text-8xl font-extrabold text-center mt-16 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(147,51,234,0.6)]"
      >
        Her.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.6 }}
        className="text-center text-slate-300 mt-6 italic"
      >
        “She wasn’t a chapter. She was the entire meaning.”
      </motion.p>

      {/* 🖼️ Her Gallery */}
      <section className="max-w-6xl mx-auto px-6 mt-24 mb-24 relative z-10">
        <h2 className="text-3xl font-semibold text-center mb-10 text-pink-400">
          Her Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {galleryImages.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-3xl group cursor-pointer shadow-lg"
            >
              {/* 🌸 Image */}
              <img
                src={`/${photo.img}`}
                alt="her"
                className="w-full h-auto object-cover rounded-3xl transition-transform duration-500 group-hover:scale-110"
              />

              {/* 💜 Glow aura behind */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-70 bg-purple-600 blur-2xl transition-all duration-700 -z-10"></div>

              {/* ✨ Overlay text */}
              <div className="absolute inset-0 flex items-center justify-center text-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-lg md:text-xl text-pink-200 italic px-6 leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 💭 Memory Q&A */}
      <section className="max-w-3xl mx-auto space-y-28 px-6 pb-40 relative z-10">
        {questions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.2 + index * 0.25,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg shadow-[0_0_60px_rgba(147,51,234,0.15)]"
          >
            <motion.h3
              className="text-3xl font-semibold text-pink-300 mb-4"
              whileHover={{ scale: 1.03 }}
            >
              {item.q}
            </motion.h3>
            <p className="text-lg text-slate-200 leading-relaxed font-light">
              {item.a}
            </p>
          </motion.div>
        ))}
      </section>

      {/* 🌙 Ending Quote */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="text-center pb-20 px-6"
      >
        <p className="text-slate-300 text-lg italic">
          “Some stories don’t end. They just live quietly in one heart.”
        </p>
        <p className="text-slate-400 mt-3 text-sm">—lost_memories</p>
      </motion.div>

      {/* 🖤 Final cinematic fade */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
        className="text-center py-16 bg-gradient-to-t from-black/60 to-transparent text-slate-500 italic"
      >
        “And if she ever reads this... I hope she smiles.”
      </motion.div>
    </div>
  );
}
