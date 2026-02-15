import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-32">
      
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hello, I'm <span className="text-blue-500">Chinmay</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
            I build modern web applications using React, Node.js and clean UI design.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition">
              View Work
            </button>

            <button className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
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
