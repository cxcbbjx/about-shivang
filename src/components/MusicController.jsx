import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";

export default function MusicController() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.25);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const audio = new Audio("/bg_music.mp3"); // make sure this file exists in /public
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;
    audio.play().catch(() => {});
    return () => audio.pause();
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {/* 🎵 Music toggle button */}
      <motion.button
        onClick={togglePlay}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#0b0b13]/80 border border-purple-500/30 shadow-[0_0_20px_rgba(147,51,234,0.3)] rounded-full p-3 text-purple-300 hover:text-pink-400 transition-colors"
      >
        {isPlaying ? <Music size={22} /> : <VolumeX size={22} />}
      </motion.button>

      {/* 🎚️ Subtle volume slider on hover */}
      {showControls && (
        <motion.input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-24 h-1 bg-purple-400 rounded-full accent-purple-500 cursor-pointer transition-all"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "6rem" }}
          exit={{ opacity: 0, width: 0 }}
        />
      )}
    </motion.div>
  );
}
