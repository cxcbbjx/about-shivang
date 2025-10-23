import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import AboutShivang from "./components/AboutShivang";
import Poetry from "./components/Poetry";
import Her from "./components/Her";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutShivang />} />
        <Route path="/poetry" element={<Poetry />} />
        <Route path="/her" element={<Her />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
