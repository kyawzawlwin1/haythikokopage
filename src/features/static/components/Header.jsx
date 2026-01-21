import React from "react";

const Header = () => {
  return (
   <header className="fixed top-6 inset-x-0 z-50 mx-auto w-[90%] max-w-6xl">
      {/* bg-white/10 backdrop-blur-md: မှန်ကြည် effect ရစေဖို့ */}
      <nav className="flex items-center justify-between px-6 py-3 
                      bg-white/10 backdrop-blur-md 
                      border border-white/20 rounded-[2rem] 
                      shadow-xl shadow-black/10">
        
        <div className="flex-shrink-0">
          <a className="font-poppins text-white font-bold text-lg tracking-tight">
            Hay Thi Ko Ko
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex gap-2">
            <li><a href="#" className="text-white/80 hover:text-white px-4 py-2 transition-all">Home</a></li>
            <li><a href="#" className="text-white/80 hover:text-white px-4 py-2 transition-all">Portfolio</a></li>
            <li><a href="#" className="text-white/80 hover:text-white px-4 py-2 transition-all">Expertise</a></li>
            <li><a href="#" className="text-white/80 hover:text-white px-4 py-2 transition-all">About</a></li>
          </ul>
        </div>

        <button className="bg-white text-pink-700 font-semibold rounded-full px-6 py-2 hover:bg-opacity-90 transition-all">
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header;
