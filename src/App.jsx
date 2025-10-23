// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutShivang from "./components/AboutShivang";
import Poetry from "./components/Poetry";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutShivang />} />
        <Route path="/poetry" element={<Poetry />} />
      </Routes>
    </Router>
  );
}
