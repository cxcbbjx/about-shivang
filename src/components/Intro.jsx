// src/components/Intro.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Intro({ onFinish }) {
  const [show, setShow] = useState(true);
  const [started, setStarted] = useState(false);
  const [audio, setAudio] = useState(null);

  // 🎵 Prepare intro audio
  useEffect(() => {
    const bgMusic = new Audio("/intro.mp3");
    bgMusic.volume = 0.4;
    bgMusic.loop = false;
    setAudio(bgMusic);

    return () => {
      bgMusic.pause();
      bgMusic.currentTime = 0;
    };
  }, []);

  // ⏳ Timer starts after click
  useEffect(() => {
    if (!started) return;

    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    }, 5500);

    return () => clearTimeout(timer);
  }, [started, onFinish, audio]);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#01010a] text-white overflow-hidden"
      onClick={() => {
        if (!started) {
          setStarted(true);
          if (audio) {
            audio.currentTime = 0;
            audio.play().catch((err) => {
              console.warn("Playback blocked until user gesture:", err);
            });
          }
        }
      }}
    >
      {/* 👆 Tap to Begin */}
      {!started && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.6, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 text-slate-400 text-sm"
        >
          Tap anywhere to begin the intro 🎵
        </motion.div>
      )}

      {/* 🌌 Background Gradient Motion */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.25),transparent_70%)] blur-3xl"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 💫 Blooming Energy Core */}
      <motion.div
        className="absolute w-[250px] h-[250px] bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-400 rounded-full blur-[120px] opacity-50"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* 🪩 Text Animation */}
      {started && (
        <>
          {/* ✴️ Shivang Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 tracking-wider drop-shadow-[0_0_25px_rgba(147,51,234,0.6)]"
          >
            Shivang
          </motion.h1>

          {/* ✨ Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 2 }}
            className="mt-6 text-lg md:text-xl text-slate-300 italic"
          >
            “Where code became emotion, and emotion became art.”
          </motion.p>

          {/* 🌘 Fade to black transition */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1] }}
            transition={{ delay: 4.5, duration: 1.2 }}
            className="absolute inset-0 bg-black"
          />

          {/* ⚙️ Footer Credit */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.3, duration: 1 }}
            className="absolute bottom-10 text-xs text-slate-500 tracking-widest"
          >
            © 2025 Shivang Productions
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
