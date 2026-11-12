import React from "react";
import HeroBg from "../../../assets/pinkroom.png";
import { Link } from "wouter";
import Image1 from "../../../assets/Image1.png";
import Image10 from "../../../assets/Image10.png";
import Image8 from "../../../assets/Image8.png";
import Image15 from "../../../assets/Image15.png";

const HeroSection = () => (
  <section className="min-h-screen bg-[#FAF7F2] w-full ">
    {/* Hero Background Image Section */}
    <section
      className="flex w-full min-h-[70vh] bg-fit bg-right bg-no-repeat overflow-hidden  "
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className="flex items-center w-full p-4 sm:p-8  ">
        {/* Dark Overlay */}
        {/* <div className=""></div> */}

        {/* Hero Text */}
        <p className="text-[#E36A6A]/70 text-center font-serif font-bold text-base text-[30px] md:text-4xl max-w-3xl leading-snug">
          I am an architect passionate about creating bold, intense, and modern
          designs that leave a lasting impression.
        </p>
      </div>
    </section>
    {/* #explanation */}
    <section className="flex flex-col sm:flex-row justify-around items-center min-h-[300px] bg-[#FF9D9D] px-[60px] sm:py-12 px-[60px]  ">
      {/* container for logo  */}
      <div className="flex flex-col justify-center items-center lg:self-start  px-10 lg:px-1  font-poppins">
        {/* welcome     */}
        <h1 className="text-[54px] lg:text-[45px] font-bold text-center pt-[30px] text-[#E36A6A]">
          Welcome
        </h1>
        <p className="text-[34px] lg:text-[30px] font-bold text-center text-[#E36A6A]">
          to
        </p>
        <h3 className="text-[40px] lg:text-[45px] font-bold text-[#E36A6A]">
          HaykoDesigns
        </h3>
      </div>
      {/* container for para and some texts */}
      <div className="space-y-6 sm:space-y-8 flex flex-col justify-center items-center w-full max-w-4xl  py-6 px-4 sm:px-6 text-center">
        <p className="font-JetBrains Mono text-sm sm:text-base md:text-xl text-[#D45060] leading-relaxed tracking-wide">
          My work blends creativity, structure, and innovation to transform
          spaces into powerful visual experiences. Every project is designed
          with precision, emotion, and a unique architectural identity that
          stands out from the ordinary.
        </p>
        <div className="flex ">
          <p>
            One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
            consequuntur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, hic.
          </p>
        </div>
      </div>
    </section>
    {/* Feature Collections Section */}
    <section className="w-full py-8 sm:py-10 px-10 sm:px-[60px] md:px-6 min-h-[300px] bg-primary-light-pink ">
      <div className="mx-auto md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* === Card 1 === */}
        <div className="bg-white rounded-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1">
          <div className="w-full h-40 bg-gray-100 overflow-hidden">
            <img
              src={Image1}
              alt="Architecture Art 1"
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="p-4 bg-[#FFE2E2] text-center sm:text-left">
            <p className="font-semibold text-gray-800 text-base sm:text-lg">
              New arts here
            </p>
            <p className="text-xs text-gray-400 mt-1">Creative Architecture</p>
          </div>
        </div>

        {/* === Card 2 === */}
        <div className="bg-white rounded-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1">
          <div className="w-full h-40  bg-gray-100 overflow-hidden">
            <img
              src={Image10}
              alt="Architecture Art 2"
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="p-4 bg-[#FFE2E2] text-center sm:text-left">
            <p className="font-semibold text-gray-800 text-base sm:text-lg">
              New arts here
            </p>
            <p className="text-xs text-gray-400 mt-1">Modern Concepts</p>
          </div>
        </div>

        {/* === Card 3 === */}
        <div className="bg-white rounded-sm overflow-hidden  transition-transform duration-300 hover:-translate-y-1">
          <div className="w-full h-40  bg-gray-100 overflow-hidden">
            <img
              src={Image8}
              alt="Architecture Art 3"
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="p-4 bg-[#FFE2E2] text-center sm:text-left">
            <p className="font-semibold text-gray-800 text-base sm:text-lg">
              New arts here
            </p>
            <p className="text-xs text-gray-400 mt-1">Studio Portfolio</p>
          </div>
        </div>
        {/* === Card 4 === */}
        <div className="bg-white rounded-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1">
          <div className="w-full h-40  bg-gray-100 overflow-hidden">
            <img
              src={Image15}
              alt="Architecture Art 4"
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="p-4 bg-[#FFE2E2] text-center sm:text-left">
            <p className="font-semibold text-gray-800 text-base sm:text-lg">
              New arts here
            </p>
            <p className="text-xs text-gray-400 mt-1">Studio Portfolio</p>
          </div>
        </div>
      </div>
    </section>
    {/* Icons & Inspired Section */}
    <section className="w-full mx-auto px-4 sm:px-[60px] py-3 pb-1 md:py-10 min-h-[300px] bg-[#FFE2E2] font-poppins">
      {/* container */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full">
        {/* Left Side Title */}
        <div className="flex flex-col lg:text-left justify-center items-center gap-3 lg:pl-10  text-center ">
          <h2 className="mb-1 text-xl sm:text-2xl md:text-3xl  text-gray-700  font-sans  font-bold text-center">
            Inspired from reality
          </h2>
          <p className="text-xs sm:text-sm text-[#6F756B] uppercase tracking-wider">
            passionate
          </p>
          <Link href="/about">
            <button className="font-sans bg-[#E36A6A] text-stone-200 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:bg-stone-900 hover:text-white hover:scale-105 active:scale-95 shadow-md rounded-lg cursor-pointer">
              Contact Me
            </button>
          </Link>
        </div>
        {/* Right Side Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-[#FF9D9D]/60 w-full">
          {/* container 1 */}
          <div className="flex flex-col items-center text-center px-3 py-8 sm:py-3">
            <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-700">
              Thoughtful design
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-[#6F756B]">
              I blend creativity and functionality to craft spaces tailored to
              your vision.
            </p>
          </div>

          {/* container 2 */}
          <div className="flex flex-col items-center  text-center px-3 py-8 sm:py-3 ">
            <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-700">
              Smart Planning
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-[#6F756B]">
              Every detail is carefully planned for efficiency and purpose.
            </p>
          </div>

          {/* container 3 */}
          <div className="flex flex-col items-center  text-center  px-3 py-8 sm:py-3 ">
            <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-700">
              Timeless Spaces
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-[#6F756B]">
              My designs are built to inspire today and remain relevant for
              generations.
            </p>
          </div>

          {/* container 4 */}
          <div className="flex flex-col items-center text-center  px-3 py-8 sm:py-3">
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
    <section className="px-4 py-6 sm:py-10 bg-[#FFDDDD]">
      <div className="flex flex-wrap gap-4 sm:gap-12 md:gap-20 justify-center items-center text-center text-[15px] sm:text-sm md:text-xl font-poppins text-[#6F756B]">
        <p className="text-[#E36A6A] font-semibold">10+ Completed Projects</p>
        <p className="text-[#E36A6A] font-semibold">5 Years Experience 2026</p>
        <p className="text-[#E36A6A] font-semibold">Founded Studio</p>
      </div>
    </section>
    {/* Paragraph & Contact Button Section */}
  </section>
);

export default HeroSection;
