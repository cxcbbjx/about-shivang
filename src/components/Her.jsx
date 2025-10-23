import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Her() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = () => setLoaded(true);
    const handleError = () => console.warn("Audio failed to load.");

    audio.addEventListener("canplaythrough", handleCanPlay);
    audio.addEventListener("error", handleError);
    return () => {
      audio.removeEventListener("canplaythrough", handleCanPlay);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  const tryAutoplay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.25;
    audio.muted = muted;
    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  useEffect(() => {
    tryAutoplay();
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  const gallery = [
    { src: "/her/1.jpeg", line: "She smiled — and silence found its purpose." },
    { src: "/her/2.jpeg", line: "Those eyes held a galaxy the world ignored." },
    { src: "/her/3.jpeg", line: "Even her absence hums louder than sound." },
    { src: "/her/4.jpeg", line: "Some souls never leave — they just become light." },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#120910] via-[#1b0e16] to-[#08060a] text-[#f5e6ea]">
      {/* Background Audio */}
      <audio ref={audioRef} src="/her-bg.mp3" loop preload="auto" />

      {/* Floating Music Controls */}
      <div className="fixed top-5 right-6 z-50 flex items-center gap-3 bg-black/40 backdrop-blur-lg rounded-full px-4 py-2 border border-white/10 shadow-lg">
        <button
          onClick={togglePlay}
          className="text-sm px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          {playing ? "Pause" : "Play"}
        </button>
        <button
          onClick={toggleMute}
          className="text-sm px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          {muted ? "Unmute" : "Mute"}
        </button>
        <span className="text-xs text-slate-300">{loaded ? "♫ Ready" : "Loading..."}</span>
      </div>

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,183,197,0.12),transparent_70%)] pointer-events-none animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,192,203,0.15),transparent_70%)] opacity-60 blur-3xl" />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center py-24"
      >
        <h1
          className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 drop-shadow-md"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Her.
        </h1>
        <p className="mt-5 text-lg md:text-xl text-slate-300 italic font-light">
          “Some people stay in memories — not in life, but forever in the soul.”
        </p>
      </motion.section>

      {/* Gallery Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-6xl mx-auto px-6 pb-24"
      >
        <h2 className="text-center text-3xl font-semibold text-pink-400 mb-10">
          Her Gallery
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
          {gallery.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="relative group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-pink-500/20 transition-all"
            >
              <img
                src={g.src}
                alt="her memory"
                className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <p className="text-sm md:text-base text-pink-200 italic px-4 text-center leading-snug">
                  {g.line}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="text-center text-slate-500 pb-10 text-sm space-y-2">
        <p>© {new Date().getFullYear()} — A memory by Shivang</p>
        <p className="text-slate-400 italic">
          “Her presence still hums in the silence.”
        </p>
        <Link
          to="/"
          className="inline-block mt-3 px-4 py-2 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition"
        >
          ← Back Home
        </Link>
      </footer>
    </div>
  );
}
