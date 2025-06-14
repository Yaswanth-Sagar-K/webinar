// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GoogleMeet from "./components/GoogleMeet";
import JitsiMeet from "./components/JitsiMeet";
import WebexMeeting from "./components/WebexMeetingEmbed";
import ZoomMeeting from "./components/ZoomMeeting";

function App() {
  return (
    <Router>
      <nav style={{ padding: "20px", background: "#eee" }}>
        <Link to="/google" style={{ marginRight: "20px" }}>Google Meet</Link>
        <Link to="/jitsi" style={{ marginRight: "20px" }}>Jitsi Meet</Link>
        <Link to="/webex" style={{ marginRight: "20px" }}>webex meet</Link>
        <Link to="/zoom" style={{ marginRight: "20px" }}>zoom meet</Link>
      </nav>

      <Routes>

        <Route path="/google" element={<GoogleMeet />} />
        <Route path="/jitsi" element={<JitsiMeet />} />
        <Route path="/webex" element={<WebexMeeting />} />
        <Route path="/zoom" element={<ZoomMeeting />} />

      </Routes>
    </Router>
  );
}

export default App;
