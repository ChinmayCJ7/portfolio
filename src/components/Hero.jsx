import { useNavigate } from "react-router-dom";

import profile from "../assets/profile.jpg";

const Hero = () => {

  const navigate = useNavigate();
  
  return (
    <section  className="relative min-h-screen flex items-center justify-center px-6 pt-32 bg-cornsilk-50">
      
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hello, I'm <span className="text-light-bronze-600">Chinmay</span>
          </h1>

          <p className="text-lg md:text-xl text-tea-green-700">
            I build modern web applications using React, Node.js and clean UI design.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-tea-green-900 text-cornsilk-50 rounded-full hover:bg-tea-green-800 hover:scale-105 transition"
            onClick={() => navigate("/projects")}>
              View Work
            </button>

            <button className="px-6 py-3 border border-tea-green-900 rounded-full hover:bg-tea-green-900 hover:text-cornsilk-50 transition" 
            onClick={() => navigate("/contact")}>
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src={profile}
              alt="Profile"
              className="w-72 md:w-96 rounded-2xl shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
