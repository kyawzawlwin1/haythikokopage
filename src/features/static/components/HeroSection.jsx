import React from "react";
import HeroBg from "../../../assets/archiphoto.jpg";
import { Link } from "wouter";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-[#FFFBF1] w-full text-[#1a1a1a]">
      {/* 🏛️ LAYER ONE: Title & Main Intro Paragraph */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full py-16 md:py-10 mx-auto max-w-7xl items-center">
        {/* Title Box (1/3 Width on Desktop) */}
        <div className="m-14 pr-10 pl-0 ml-0">
          <h1 className="font-poppins text-xl sm:text-2xl md:text-6xl font-extrabold tracking-tighter text-stone-800 leading-none w-full">
            Crafting Modern Spaces
          </h1>
        </div>

        {/* Paragraph Box (2/3 Width on Desktop) */}
        <div className="md:col-span-3 md:pt-2 m-10">
          <p className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-stone-700 leading-relaxed font-light tracking-wide">
            I am an architect passionate about creating bold, intense, and
            modern designs that leave a lasting impression.
          </p>
        </div>
      </div>

      {/* 🖼️ LAYER TWO: Big Hero Banner Image */}
      <div
        className="w-full h-[300px] sm:h-[450px] md:h-[380px] bg-cover bg-center bg-no-repeat relative shadow-sm"
        style={{ backgroundImage: `url(${HeroBg})` }}
      />

      {/* 📝 LAYER THREE: Sub-description & Contact CTA */}
      <div className=" md:grid-cols-3 gap-8 w-full px-[6%] py-16 md:py-24 mx-auto max-w-7xl items-start">
        {/* Left space empty on desktop to push text nicely to the right */}

        {/* Text and Button (Takes 2/3 Width just like the intro above) */}
        <div className="md:col-span-2 space-y-8 flex flex-col justify-center items-center w-full mx-auto">
          <p className="font-sans text-base sm:text-lg text-stone-600 leading-relaxed tracking-wide text-center max-w-4xl mx-auto md:text-2xl">
            My work blends creativity, structure, and innovation to transform
            spaces into powerful visual experiences. Every project is designed
            with precision, emotion, and a unique architectural identity that
            stands out from the ordinary.
          </p>

          <Link href="/about">
            <button className="font-sans bg-gray-900 text-stone-200 font-bold text-lg px-8 py-4 transition-all duration-300 hover:bg-stone-900 hover:text-white hover:scale-105 active:scale-95 shadow-md rounded-lg">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
