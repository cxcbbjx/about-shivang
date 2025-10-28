import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SceneTransition({ children, locationKey }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={locationKey}
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{
          duration: 1.1,
          ease: "easeInOut",
        }}
        className="relative min-h-screen"
      >
        {children}

        {/* black fade overlay for cinematic transitions */}
        <motion.div
          key="fade"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="fixed inset-0 bg-black pointer-events-none z-50"
        />
      </motion.div>
    </AnimatePresence>
  );
}
