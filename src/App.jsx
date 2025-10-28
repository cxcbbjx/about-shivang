import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";



import AboutShivang from "./components/AboutShivang";
import Her from "./components/Her";
import Poetry from "./components/Poetry";
import Journey from "./components/Journey";
import ChapterPage from "./components/ChapterPage";
import Intro from "./components/Intro";
import SceneTransition from "./components/SceneTransition";
import MusicController from "./components/MusicController";
import Research from "./components/Research";


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <SceneTransition locationKey={location.pathname}>
        <Routes location={location} key={location.pathname}>
          <Route path="/research" element={<Research />} />

          <Route path="/" element={<AboutShivang />} />
          <Route path="/her" element={<Her />} />
          <Route path="/poetry" element={<Poetry />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/journey/:id" element={<ChapterPage />} />
        </Routes>
      </SceneTransition>
    </AnimatePresence>
  );
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const played = sessionStorage.getItem("introPlayed");
    if (played) setShowIntro(false);
  }, []);

  const handleFinish = () => {
    sessionStorage.setItem("introPlayed", "true");
    setShowIntro(false);
  };

  if (showIntro) return <Intro onFinish={handleFinish} />;

  return (
    <Router>
      <MusicController />
      <AnimatedRoutes />
    </Router>
  );
}
