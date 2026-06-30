import React from "react";
import HeroBg from "../../../assets/archiphoto.jpg";
import futureimage from "../../../assets/futureimagefortesting.jpg";
import { Link } from "wouter";
import Image1 from "../../../assets/Image1.png";
import Image10 from "../../../assets/Image10.png";
import Image8 from "../../../assets/Image8.png";
import Image15 from "../../../assets/Image15.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-[#FAF7F2] w-full text-[#A47251]">
      {/* image bg div */}
      <section className="flex flex-col items-center">
        <div
          className="w-full h-[210px] sm:h-[450px] md:h-[380px] bg-cover bg-center bg-no-repeat relative shadow-sm text-xl md:text-4xl"
          style={{ backgroundImage: `url(${HeroBg})` }}
        >
          <p className="text-[#FAF7F2] text-center font-serif font-bold text-xl md:text-6xl">
            I am an architect passionate about creating bold, intense, and
            modern designs that leave a lasting impression.
          </p>
        </div>
        <div></div>
      </section>
      {/* 🏛️ LAYER ONE: Title & Main Intro Paragraph */}
      {/* <div className=" bg-[#6F756B] px-10 py-3 md:py-20 md:px-60 ">
        <p className="font-poppins text-xl sm:text-2xl md:text-3xl md:px-30 text-white leading-relaxed font-light tracking-wide">
        
        </p>
      </div> */}

      {/* <div
        className="w-full h-[300px] sm:h-[450px] md:h-[380px] bg-cover bg-center bg-no-repeat relative shadow-sm"
        style={{ backgroundImage: `url(${futureimage})` }}
      ></div> */}
      {/* feature collections section for projects page*/}
      <section className="w-full md:m-10  md:mb-3 pt-10 px-10  bg-[#FAF7F2]">
        {/* 💡 ပြင်ဆင်ချက် ၂: Outer div တွင် flex နှင့် gap စနစ်ကို ကျနစွာ ထည့်သွင်းပေးလိုက်ပါသည် */}
        <div className="max-w-[95%] md:max-w-[92%] mx-auto flex flex-col md:flex-row gap-8 px-1 ">
          {/* === Card 1 === */}
          <div className="flex-1 bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 transition-transform duration-300 hover:-translate-y-1">
            <div className="w-full h-30 md:h-30 relative bg-gray-100 overflow-hidden">
              <img
                src={Image1}
                alt=""
                className="w-full h-full object-cover block"
              />
            </div>
            {/* 💡 ပြင်ဆင်ချက် ၃: စာသားများကို h-56 Div ရဲ့ အပြင်ဘက် သီးခြား p-4 div ထဲသို့ ထုတ်ပေးလိုက်ပါသည် */}
            <div className="p-4 bg-white text-center md:text-left">
              <p className="font-semibold text-gray-800 text-lg">
                New arts here
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Creative Architecture
              </p>
            </div>
          </div>

          {/* === Card 2 === */}
          <div className="flex-1 bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 transition-transform duration-300 hover:-translate-y-1">
            <div className="w-full h-30 md:h-30 relative bg-gray-100 overflow-hidden">
              <img
                src={Image10}
                alt=""
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="p-4 bg-white text-center md:text-left">
              <p className="font-semibold text-gray-800 text-lg">
                New arts here
              </p>
              <p className="text-xs text-gray-400 mt-1">Modern Concepts</p>
            </div>
          </div>

          {/* === Card 3 === */}
          <div className="flex-1 bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 transition-transform duration-300 hover:-translate-y-1">
            <div className="w-full h-30 md:h-30 relative bg-gray-100 overflow-hidden">
              <img
                src={Image8}
                alt=""
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="p-4 bg-white text-center md:text-left">
              <p className="font-semibold text-gray-800 text-lg">
                New arts here
              </p>
              <p className="text-xs text-gray-400 mt-1">Studio Portfolio</p>
            </div>
          </div>
          {/* card 4  */}
          <div className="flex-1 bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 transition-transform duration-300 hover:-translate-y-1">
            <div className="w-full h-30 md:h-30 relative bg-gray-100 overflow-hidden">
              <img
                src={Image15}
                alt=""
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="p-4 bg-white text-center md:text-left">
              <p className="font-semibold text-gray-800 text-lg">
                New arts here
              </p>
              <p className="text-xs text-gray-400 mt-1">Studio Portfolio</p>
            </div>
          </div>
        </div>
      </section>
      {/* icons section with bold words and picture  */}
      <section className="max-w-[92%] md:max-w-[92%] mx-auto p-3 md:p-10">
        {/* မိဘ Wrapper ကြီးတစ်ခုလုံး (items-stretch ရှိနေပါသည်) */}
        <div className="flex flex-col md:flex-row items-stretch justify-start md:justify-between md:gap-10 w-full font-poppins">
          {/* 📝 Left Side: Inspired text */}
          <div className="font-medium whitespace-nowrap mt-10 flex flex-col items-center justify-center gap-8 ">
            <h1 className=" text-gray-700 text-xl md:text-2xl font-poppins font-bold">
              Inspired from reality
            </h1>
            <p className="h-10 md:h-20">passionate</p>
          </div>

          {/* 🎴 Right Side Wrapper */}
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-3 md:gap-4 w-full">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center flex-1 py-6 px-6 md:px-12 min-h-0 md:min-h-[220px] justify-center bg-transparent">
              <h3 className="text-lg font-bold mb-3 text-gray-700">
                Thoughtful design
              </h3>
              <p className="text-sm leading-relaxed text-[#6F756B]">
                I blend creativity and functionality to craft spaces tailored to
                your vision.
              </p>
            </div>

            {/* ➖ မျဉ်းတံတို ၁ */}
            <div className="hidden md:block w-[2px] h-16 bg-gray-300 self-center"></div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center flex-1 py-6 px-6 md:px-12 min-h-0 md:min-h-[220px] justify-center bg-transparent">
              <h3 className="text-lg font-bold text-gray-700 mb-3">
                Smart Planning
              </h3>
              <p className="text-sm leading-relaxed  text-[#6F756B]">
                Every detail is carefully planned for efficiency and purpose.
              </p>
            </div>

            {/* ➖ မျဉ်းတံတို ၂ */}
            <div className="hidden md:block w-[2px] h-16 bg-gray-300 self-center"></div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center flex-1 py-6 px-6 md:px-12 min-h-0 md:min-h-[220px] justify-center bg-transparent">
              <h3 className="text-lg font-bold text-gray-700 mb-3">
                Timeless Spaces
              </h3>
              <p className="text-sm leading-relaxed text-[#6F756B]">
                My designs are built to inspire today and remain relevant for
                generations.
              </p>
            </div>

            {/* ➖ မျဉ်းတံတို ၃ */}
            <div className="hidden md:block w-[2px] h-16 bg-gray-300 self-center"></div>

            {/* Card 4 */}
            <div className="flex flex-col items-center text-center flex-1 py-6 px-6 md:px-12 min-h-0 md:min-h-[220px] justify-center bg-transparent">
              <h3 className="text-lg font-bold text-gray-700 mb-3">
                Direct Partnership
              </h3>
              <p className="text-sm leading-relaxed text-[#6F756B]">
                You work directly with me. I provide dedicated, one-on-one
                attention to shape your dream spaces.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* experience section with details  */}
      <section className="px-10 md:px-20">
        <div className="flex gap-10 md:gap-30 justify-center items-center text-sm md:text-xl font-poppins mx-10 text-[#6F756B]">
          <p>10+ Completed Projects</p> <p>5 Years Experience 2026</p>{" "}
          <p>Founded Studio</p>
        </div>
      </section>

      {/* paragraph and contact button */}
      <section className="bg-[#FAF7F2] ">
        <div className="md:col-span-2 space-y-8 flex flex-col justify-center items-center w-full mx-auto py-8 md:py-10">
          <p className="px-10 pt-3 font-poppins text-base sm:text-lg text-[#6F756B] leading-relaxed tracking-wide text-center max-w-4xl mx-auto mt-3 md:text-2xl">
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
    </section>
  );
};

export default HeroSection;
