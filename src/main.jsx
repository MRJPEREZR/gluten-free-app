import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import ScanPage from "./pages/ScanPage";
import LandingPage from "./pages/LandingPage";

import "./index.css";
import RestaurantPage from "./pages/RestaurantPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/scan" element={<ScanPage />} />
        <Route path="/restaurants" element={<RestaurantPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
