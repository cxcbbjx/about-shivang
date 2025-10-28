// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";      // ✅ this brings back your intro + router control
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App key={Date.now()} />  {/* ✅ Forces a clean intro render each time */}
  </React.StrictMode>
);
