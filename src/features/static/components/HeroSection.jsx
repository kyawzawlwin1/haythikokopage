import React from "react";
import HeroBg from "../../../assets/archiphoto.jpg";
import { Link } from "wouter";
import Image1 from "../../../assets/Image1.png";
import Image10 from "../../../assets/Image10.png";
import Image8 from "../../../assets/Image8.png";
import Image15 from "../../../assets/Image15.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-[#FAF7F2] w-full text-[#A47251]">
      {/* Hero Background Image Section */}
      <section className="w-full">
        <div
          className="w-full h-[250px] sm:h-[380px] md:h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center shadow-sm p-4 sm:p-8 overflow-hidden"
          style={{ backgroundImage: `url(${HeroBg})` }}
        >
          {/* Dark Overlay */}
          <div className=""></div>

          {/* Hero Text */}
          <p className="text-[#1F2523] text-center font-serif font-bold text-base sm:text-xl md:text-4xl max-w-3xl leading-snug">
            I am an architect passionate about creating bold, intense, and
            modern designs that leave a lasting impression.
          </p>
        </div>
      </section>

      {/* Feature Collections Section */}
      <section className="w-full py-8 sm:py-12 px-10 sm:px-6 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* === Card 1 === */}
          <div className="bg-white rounded-sm overflow-hidden shadow-md border border-gray-100 transition-transform duration-300 hover:-translate-y-1">
            <div className="w-full h-40 sm:h-44 bg-gray-100 overflow-hidden">
              <img
                src={Image1}
                alt="Architecture Art 1"
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="p-4 bg-white text-center sm:text-left">
              <p className="font-semibold text-gray-800 text-base sm:text-lg">
                New arts here
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Creative Architecture
              </p>
            </div>
          </div>

          {/* === Card 2 === */}
          <div className="bg-white rounded-sm overflow-hidden shadow-md border border-gray-100 transition-transform duration-300 hover:-translate-y-1">
            <div className="w-full h-40 sm:h-44 bg-gray-100 overflow-hidden">
              <img
                src={Image10}
                alt="Architecture Art 2"
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="p-4 bg-white text-center sm:text-left">
              <p className="font-semibold text-gray-800 text-base sm:text-lg">
                New arts here
              </p>
              <p className="text-xs text-gray-400 mt-1">Modern Concepts</p>
            </div>
          </div>

          {/* === Card 3 === */}
          <div className="bg-white rounded-sm overflow-hidden shadow-md border border-gray-100 transition-transform duration-300 hover:-translate-y-1">
            <div className="w-full h-40 sm:h-44 bg-gray-100 overflow-hidden">
              <img
                src={Image8}
                alt="Architecture Art 3"
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="p-4 bg-white text-center sm:text-left">
              <p className="font-semibold text-gray-800 text-base sm:text-lg">
                New arts here
              </p>
              <p className="text-xs text-gray-400 mt-1">Studio Portfolio</p>
            </div>
          </div>

          {/* === Card 4 === */}
          <div className="bg-white rounded-sm overflow-hidden shadow-md border border-gray-100 transition-transform duration-300 hover:-translate-y-1">
            <div className="w-full h-40 sm:h-44 bg-gray-100 overflow-hidden">
              <img
                src={Image15}
                alt="Architecture Art 4"
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="p-4 bg-white text-center sm:text-left">
              <p className="font-semibold text-gray-800 text-base sm:text-lg">
                New arts here
              </p>
              <p className="text-xs text-gray-400 mt-1">Studio Portfolio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Icons & Inspired Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 font-poppins">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full">
          {/* Left Side Title */}
          <div className="text-center lg:text-left flex flex-col justify-center">
            <h2 className="text-gray-700 text-xl sm:text-2xl md:text-3xl font-bold mb-1">
              Inspired from reality
            </h2>
            <p className="text-xs sm:text-sm text-[#6F756B] uppercase tracking-wider">
              passionate
            </p>
          </div>

          {/* Right Side Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            <div className="flex flex-col items-center text-center p-5 bg-white/60 rounded-lg shadow-sm border border-stone-100">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-700">
                Thoughtful design
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#6F756B]">
                I blend creativity and functionality to craft spaces tailored to
                your vision.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-5 bg-white/60 rounded-lg shadow-sm border border-stone-100">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-700">
                Smart Planning
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#6F756B]">
                Every detail is carefully planned for efficiency and purpose.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-5 bg-white/60 rounded-lg shadow-sm border border-stone-100">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-700">
                Timeless Spaces
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#6F756B]">
                My designs are built to inspire today and remain relevant for
                generations.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-5 bg-white/60 rounded-lg shadow-sm border border-stone-100">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-700">
                Direct Partnership
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#6F756B]">
                You work directly with me for dedicated, one-on-one attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Stats Section */}
      <section className="px-4 py-6">
        <div className="flex flex-wrap gap-4 sm:gap-12 md:gap-20 justify-center items-center text-center text-xs sm:text-sm md:text-xl font-poppins text-[#6F756B]">
          <p className="font-semibold">10+ Completed Projects</p>
          <p className="font-semibold">5 Years Experience 2026</p>
          <p className="font-semibold">Founded Studio</p>
        </div>
      </section>

      {/* Paragraph & Contact Button Section */}
      <section className="bg-[#FAF7F2] pb-12 sm:pb-16">
        <div className="space-y-6 sm:space-y-8 flex flex-col justify-center items-center w-full max-w-4xl mx-auto py-6 px-4 sm:px-6 text-center">
          <p className="font-poppins text-sm sm:text-base md:text-xl text-[#6F756B] leading-relaxed tracking-wide">
            My work blends creativity, structure, and innovation to transform
            spaces into powerful visual experiences. Every project is designed
            with precision, emotion, and a unique architectural identity that
            stands out from the ordinary.
          </p>

          <Link href="/about">
            <button className="font-sans bg-[#6F756B] text-stone-200 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:bg-stone-900 hover:text-white hover:scale-105 active:scale-95 shadow-md rounded-lg cursor-pointer">
              Contact Me
            </button>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
