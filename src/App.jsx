import Hero from "./components/Hero";
import MouseGridBackground from "./components/MouseGridBackground";
import Navbar from "./components/Navbar";

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
