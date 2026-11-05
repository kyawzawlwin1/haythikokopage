import React from "react";
import HeroBg from "../../../assets/archiphoto.jpg";
import { Link } from "wouter";
import Image1 from "../../../assets/Image1.png";
import Image10 from "../../../assets/Image10.png";
import Image8 from "../../../assets/Image8.png";
import Image15 from "../../../assets/Image15.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-[#FAF7F2] w-full text-[#A47251] ">
      {/* Hero Background Image Section */}
      <section
        className="flex  w-full min-h-[70vh] bg-cover bg-center bg-no-repeat overflow-hidden  "
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="flex items-center w-full p-4 sm:p-8  ">
          {/* Dark Overlay */}
          {/* <div className=""></div> */}

          {/* Hero Text */}
          <p className="text-[#1F2523] text-center font-serif font-bold text-base sm:text-xl md:text-4xl max-w-3xl leading-snug">
            I am an architect passionate about creating bold, intense, and
            modern designs that leave a lasting impression.
          </p>
        </div>
      </section>
      {/* #explanation */}
      <section className="flex flex-col sm:flex-row justify-center items-center min-h-[300px] bg-[#BFE7EA] px-[60px] py-12 sm:py-12  ">
        {/* container */}
        <div className="flex items-center">
          {/* welcome     */}
          <div className="self-start pt-10">
            <p className="text-4xl font-bold font-sans ">
              Welcome to HaykoDesigns
            </p>
          </div>
          {/* container for para and some texts */}
          <div className="space-y-6 sm:space-y-8 flex flex-col justify-center items-center w-full max-w-4xl mx-auto py-6 px-4 sm:px-6 text-center">
            <p className="font-poppins text-sm sm:text-base md:text-xl text-[#6F756B] leading-relaxed tracking-wide">
              My work blends creativity, structure, and innovation to transform
              spaces into powerful visual experiences. Every project is designed
              with precision, emotion, and a unique architectural identity that
              stands out from the ordinary.
            </p>
            <div className="flex">
              <p>
                One Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Hic, consequuntur.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                hic.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Collections Section */}
      <section className="w-full py-8 sm:py-10 px-10 sm:px-[60px] md:px-6 min-h-[300px] bg-[#FAF7F2] ">
        <div className="mx-auto md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* === Card 1 === */}
          <div className="bg-white rounded-sm overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-1">
            <div className="w-full h-40 bg-gray-100 overflow-hidden">
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
          <div className="bg-white rounded-sm overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-1">
            <div className="w-full h-40  bg-gray-100 overflow-hidden">
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
          <div className="bg-white rounded-sm overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-1">
            <div className="w-full h-40  bg-gray-100 overflow-hidden">
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
          <div className="bg-white rounded-sm overflow-hidden  border border-gray-100 transition-transform duration-300 hover:-translate-y-1">
            <div className="w-full h-40  bg-gray-100 overflow-hidden">
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
      <section className="w-full mx-auto px-4 sm:px-[60px] py-10 md:py-10 min-h-[300px] bg-[#BFE7EA] font-poppins">
        {/* container */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full">
          {/* Left Side Title */}
          <div className="flex flex-col lg:text-left justify-center items-center gap-3 pl-10  text-center ">
            <h2 className="mb-1 text-xl sm:text-2xl md:text-3xl  text-gray-700  font-sans  font-bold text-center">
              Inspired from reality
            </h2>
            <p className="text-xs sm:text-sm text-[#6F756B] uppercase tracking-wider">
              passionate
            </p>
            <Link href="/about">
              <button className="font-sans bg-[#6F756B] text-stone-200 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:bg-stone-900 hover:text-white hover:scale-105 active:scale-95 shadow-md rounded-lg cursor-pointer">
                Contact Me
              </button>
            </Link>
          </div>
          {/* Right Side Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full min-h-[200px]">
            <div className="flex flex-col items-center p-5  bg-white/60 text-center rounded-lg shadow-sm border border-stone-100">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-700">
                Thoughtful design
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#6F756B]">
                I blend creativity and functionality to craft spaces tailored to
                your vision.
              </p>
            </div>
            <div className="flex flex-col items-center  p-5 bg-white/60 text-center rounded-lg shadow-sm border border-stone-100">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-700">
                Smart Planning
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#6F756B]">
                Every detail is carefully planned for efficiency and purpose.
              </p>
            </div>
            <div className="flex flex-col items-center  p-5 bg-white/60 text-center rounded-lg shadow-sm border border-stone-100">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-700">
                Timeless Spaces
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#6F756B]">
                My designs are built to inspire today and remain relevant for
                generations.
              </p>
            </div>
            <div className="flex flex-col items-center  p-5 bg-white/60 text-center rounded-lg shadow-sm border border-stone-100">
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
      <section className="px-4 py-6 sm:py-10 ">
        <div className="flex flex-wrap gap-4 sm:gap-12 md:gap-20 justify-center items-center text-center text-xs sm:text-sm md:text-xl font-poppins text-[#6F756B]">
          <p className="font-semibold">10+ Completed Projects</p>
          <p className="font-semibold">5 Years Experience 2026</p>
          <p className="font-semibold">Founded Studio</p>
        </div>
      </section>
      {/* Paragraph & Contact Button Section */}
    </section>
  );
};

export default HeroSection;
