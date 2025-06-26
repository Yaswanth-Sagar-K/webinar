import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReactHooks from "./components/ReactHooks";

function App() {
  return (
    <Router>
      <nav style={{ padding: "20px", background: "#eee" }}>
        <Link to="/react-hooks" style={{ marginRight: "20px" }}>React hooks</Link>
      </nav>

      <Routes>
        <Route path="/react-hooks" element={<ReactHooks />} />
      </Routes>
    </Router>
  );
}

export default App;
