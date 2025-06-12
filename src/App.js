// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GoogleMeet from "./components/GoogleMeet";
import JitsiMeet from "./components/JitsiMeet";

function App() {
  return (
    <Router>
      <nav style={{ padding: "20px", background: "#eee" }}>
        <Link to="/google" style={{ marginRight: "20px" }}>Google Meet</Link>
        <Link to="/jitsi">Jitsi Meet</Link>
      </nav>

      <Routes>
        <Route path="/google" element={<GoogleMeet />} />
        <Route path="/jitsi" element={<JitsiMeet />} />
      </Routes>
    </Router>
  );
}

export default App;
