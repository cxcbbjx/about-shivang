import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#0F172A]">
      {/* Background 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://my.spline.design/untitled-GixR8w3XHZLBvwwDJwTjTprN/" />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A80] to-[#0F172A] pointer-events-none" />

      {/* Foreground Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-6xl md:text-7xl font-bold drop-shadow-lg"
        >
          Hi, I'm <span className="text-blue-400">Shivang</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-4 text-gray-300 text-lg md:text-xl max-w-2xl"
        >
          A passionate developer, dreamer, and creator of digital art — blending
          code, creativity, and imagination into something unique.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5 }}
          className="mt-10 flex gap-6"
        >
          <a
            href="#about"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition duration-300"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white text-white rounded-xl hover:bg-white hover:text-black transition duration-300"
          >
            Connect with Me
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 text-gray-400 animate-bounce"
        >
          ↓ Scroll to know more
        </motion.div>
      </div>
    </section>
  );
}
