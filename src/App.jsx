import { Routes, Route } from "react-router-dom";
import MouseGridBackground from "./components/MouseGridBackground.jsx";
import Navbar from "./components/Navbar.jsx";


import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import InProgress from "./pages/InProgress.jsx";
function App() {
  return (
    <div className="relative min-h-screen bg-cornsilk-50 text-tea-green-900">
      <MouseGridBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/in-progress" element={<InProgress />} />
      </Routes>
    </div>
  );
}

export default App;
