import Hero from "./components/Hero.jsx";
import MouseGridBackground from "./components/MouseGridBackground.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="relative min-h-screen bg-gray-100 text-gray-900">
      <MouseGridBackground />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
