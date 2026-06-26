import React from "react";
import HeroBg from "../../../assets/archiphoto.jpg";
import futureimage from "../../../assets/futureimagefortesting.jpg";
import { Link } from "wouter";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-[#FAF7F2] w-full text-[#A47251]">
      {/* image bg div */}
      <div
        className="w-full h-[210px] sm:h-[450px] md:h-[380px] bg-cover bg-center bg-no-repeat relative shadow-sm flex justify-center items-center text-xl md:text-4xl"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <p className="text-[#FAF7F2] text-center font-serif font-bold text-xl md:text-6xl">Welcome to my world</p>
      </div>
      {/* 🏛️ LAYER ONE: Title & Main Intro Paragraph */}
      <div className=" bg-[#6F756B] px-10 py-3 md:py-20 md:px-60 ">
        <p className="font-poppins text-xl sm:text-2xl md:text-3xl md:px-30 text-white leading-relaxed font-light tracking-wide">
          I am an architect passionate about creating bold, intense, and modern
          designs that leave a lasting impression.
        </p>
      </div>

      {/* 🖼️ LAYER TWO: Big Hero Banner Image */}
      {/* <div
        className="w-full h-[300px] sm:h-[450px] md:h-[380px] bg-cover bg-center bg-no-repeat relative shadow-sm"
        style={{ backgroundImage: `url(${futureimage})` }}
      ></div> */}
      {/* 📝 LAYER THREE: Sub-description & Contact CTA */}
      <div className="flex gap-10 md:gap-30 justify-center items-center text-sm md:text-xl font-sans mx-10 pt-10 text-[#6F756B]">
        <p>10+ Completed Projects</p> <p>5 Years Experience 2026</p>{" "}
        <p>Founded Studio</p>
      </div>
      {/* paragraph and contact button */}
      <div className="md:col-span-2 space-y-8 flex flex-col justify-center items-center w-full mx-auto py-12 md:py-10">
        <p className="font-poppins text-base sm:text-lg text-[#6F756B] leading-relaxed tracking-wide text-center max-w-4xl mx-auto mt-3 md:text-2xl">
          My work blends creativity, structure, and innovation to transform
          spaces into powerful visual experiences. Every project is designed
          with precision, emotion, and a unique architectural identity that
          stands out from the ordinary.
        </p>

        <Link href="/about">
          <button className="font-sans bg-[#6F756B] text-stone-200 font-bold text-lg px-8 py-4 transition-all duration-300 hover:bg-stone-900 hover:text-white hover:scale-105 active:scale-95 shadow-md rounded-lg">
            Contact Me
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
