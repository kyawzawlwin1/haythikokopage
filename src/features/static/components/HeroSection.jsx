import React from "react";
import HeroBg from "../../../assets/archiphoto.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-[#FFFBF1] w-full text-[#1a1a1a]">
      
      {/* 🏛️ LAYER ONE: Title & Main Intro Paragraph */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full px-[6%] py-16 md:py-24 mx-auto max-w-7xl items-start">
        
        {/* Title Box (1/3 Width on Desktop) */}
        <div className="md:col-span-1">
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-stone-800 leading-none">
            Crafting Digital Spaces
          </h1>
        </div>

        {/* Paragraph Box (2/3 Width on Desktop) */}
        <div className="md:col-span-2 md:pt-2">
          <p className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-stone-700 leading-relaxed font-light">
            I am an architect passionate about creating bold, intense, and
            modern designs that leave a lasting impression.
          </p>
        </div>
      </div>

      {/* 🖼️ LAYER TWO: Big Hero Banner Image */}
      <div
        className="w-full h-[300px] sm:h-[450px] md:h-[600px] bg-cover bg-center bg-no-repeat relative shadow-sm"
        style={{ backgroundImage: `url(${HeroBg})` }}
      />

      {/* 📝 LAYER THREE: Sub-description & Contact CTA */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-[6%] py-16 md:py-24 mx-auto max-w-7xl items-start">
        
        {/* Left space empty on desktop to push text nicely to the right */}
        <div className="hidden md:block md:col-span-1" />

        {/* Text and Button (Takes 2/3 Width just like the intro above) */}
        <div className="md:col-span-2 space-y-8">
          <p className="font-sans text-base sm:text-lg text-stone-600 leading-relaxed tracking-wide">
            My work blends creativity, structure, and innovation to transform spaces into
            powerful visual experiences. Every project is designed with
            precision, emotion, and a unique architectural identity that stands
            out from the ordinary.
          </p>
          
          <button className="bg-gray-900 text-stone-200 font-bold px-8 py-4 transition-all duration-300 hover:bg-stone-900 hover:text-white hover:scale-105 active:scale-95 shadow-md">
            Contact Me
          </button>
        </div>

      </div>

    </section>
  );
};

export default HeroSection;