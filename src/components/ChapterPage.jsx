import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CHAPTERS = {
  "starting-point": {
    title: "The Starting Point",
    bgClass: "bg-gradient-to-b from-indigo-900 via-purple-900 to-black",
    image: "/images/starting-bg.jpg",
    paragraphs: [
      "So I started where I was about to give up — when I got 40% in grade 7th.",
      "There were no mentors, no fancy resources — only sheer persistence.",
      "I was told dreams like mine don’t belong to kids who found it difficult to even pass in grade 7th.",
      "So I carved my story with tired hands, teary nights, and stubborn will."
    ],
    music: "/chapter_starting.mp3",
  },
  "past-life": {
    title: "Past Life",
    bgClass: "bg-gradient-to-b from-gray-800 via-gray-900 to-black",
    image: "/images/past-bg.jpg",
    paragraphs: [
      "Before I built apps, I was always sleeping, lazy, and a guy with no traits.",
      "I was the kind of person you wouldn’t talk to because I was doing nothing.",
      "But I learned many things. I had no friends till 11th grade, but in 12th I found some — they were like brothers.",
      "Our goals were the same — to get into the IITs.",
      "Then in the same year, I made my first ever talk to a girl — eventually we became friends, and the rest is history.",
      "Then my counseling messed up, and I came into this college."
    ],
    music: "/chapter_past.mp3",
  },
  "suicidal-thoughts": {
    title: "Suicidal Thoughts",
    bgClass: "bg-gradient-to-b from-black via-purple-950 to-black",
    image: "/images/dark-bg.jpg",
    paragraphs: [
      "There were nights when I was alone — terrified, because in 12th it was like ‘IIT or nothing.’",
      "I even tried to end my life... I don’t know how many times. But somehow, I’m still alive.",
      "Back then, I was afraid of the results. And maybe I still am — but now, I don’t want to die.",
      "Because I know how much I’m worth, and how much light I can give to others."
    ],
    music: "/chapter_dark.mp3",
  },
  "present-life": {
    title: "Present Life",
    bgClass: "bg-gradient-to-b from-indigo-800 via-purple-800 to-blue-900",
    image: "/images/present-bg.jpg",
    paragraphs: [
      "Now I explore how machines perceive art, emotion, and beauty.",
      "My goal is to make technology human — to give AI the soul of an artist.",
      "These days, I’m more curious than ever — I love meeting new minds through projects or collaboration.",
      "I’ve learned that connecting with good minds doesn’t just inspire efficiency — it transforms you."
    ],
    music: "/chapter_present.mp3",
  },
  books: {
    title: "Books I Read",
    bgClass: "bg-gradient-to-b from-orange-700 via-yellow-600 to-rose-500",
    image: "/images/books-bg.jpg",
    paragraphs: [
      "‘The Alchemist’ taught me to follow omens.",
      "‘Kafka on the Shore’ taught me that chaos can be poetry.",
      "‘Sapiens’ taught me everything is a story — and I’m still writing mine."
    ],
    music: "/chapter_books.mp3",
  },
};

export default function ChapterPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const chapterKeys = Object.keys(CHAPTERS);
  const currentIndex = chapterKeys.indexOf(id);
  const nextId = currentIndex < chapterKeys.length - 1 ? chapterKeys[currentIndex + 1] : null;

  const chapter = CHAPTERS[id];
  const nextChapter = nextId ? CHAPTERS[nextId] : null;

  const [visible, setVisible] = useState([]);

  // 🎵 Ambient + Text reveal
  useEffect(() => {
    if (!chapter) return;
    const audio = new Audio(chapter.music);
    audio.loop = true;
    audio.volume = 0.25;
    audio.play().catch(() => {});
    window._audio = audio;

    let i = 0;
    const timer = setInterval(() => {
      setVisible((prev) => [...prev, chapter.paragraphs[i]]);
      i++;
      if (i >= chapter.paragraphs.length) clearInterval(timer);
    }, 2000);

    return () => {
      clearInterval(timer);
      try {
        window._audio?.pause();
      } catch {}
    };
  }, [chapter]);

  if (!chapter)
    return (
      <div className="text-center mt-24 text-slate-400">
        404 Chapter Not Found
      </div>
    );

  return (
    <motion.div
      layoutId={`chapter-${id}`}
      className={`min-h-screen relative text-slate-100 ${chapter.bgClass} overflow-hidden`}
    >
      {/* Background */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.25 }}
        transition={{ duration: 1.8 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${chapter.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center py-28 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300 mb-12"
        >
          {chapter.title}
        </motion.h1>

        <div className="space-y-8 text-slate-200 text-lg leading-relaxed">
          {visible.map((line, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>

      {/* 🌌 Next Chapter Preview */}
      {nextChapter && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="relative z-20 mt-24 overflow-hidden"
        >
          <div
            className="relative h-[400px] flex flex-col items-center justify-center text-center"
          >
            <div
              className="absolute inset-0 bg-cover bg-center brightness-[0.4] blur-[2px] scale-110"
              style={{ backgroundImage: `url(${nextChapter.image})` }}
            ></div>
            <div className="relative z-10 max-w-2xl mx-auto px-6">
              <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-4">
                Next Chapter — {nextChapter.title}
              </h3>
              <p className="text-slate-300 italic text-lg mb-8">
                “{nextChapter.paragraphs[0]}”
              </p>
              <motion.button
                onClick={() => navigate(`/journey/${nextId}`)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium shadow-lg hover:shadow-pink-500/30 transition-all"
              >
                Continue Journey →
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}

      <footer className="text-center text-slate-500 pb-12 text-sm mt-8">
        © 2025 Shivang • Cinematic Journey
      </footer>
    </motion.div>
  );
}
