import React from "react";
import HeroBg from "../../../assets/archiphoto.jpg";

const HeroSection = () => {
  return (
    /* flex-1 take the space between header and footer */
    <section className="min-h-screen">
      <div className=" text-white flex flex-row items-center w-full px-12 md:px-24 justify-between bg-cover bg-no-repeat">
        {/* word box */}
        <div className="">
          <h1 className="font-Poppins text-6xl font-bold tracking-tighter text-gray-300 mb-8">
            Crafting Digital Spaces
          </h1>
         
        </div>

        {/* another paragraph */}
        <div
          className="w-64 h-64 rounded-xl w-96 h-96 md:w-[500px] md:h-[500px] shadow-lg bg-cover bg-center bg-no-repeat"
          // style={{ backgroundImage: `url(${heroBg})` }}
        ><p className="font-bold text-gray-800">
            I am an architect passionate about creating bold, intense, and
            modern designs that leave a lasting impression. My work blends
            creativity, structure, and innovation to transform spaces into
            powerful visual experiences. Every project is designed with
            precision, emotion, and a unique architectural identity that stands
            out from the ordinary.
          </p>
          <p className="text-gray-900"></p>
        </div>
      </div>
      <div
        className="w-full h-[400px] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${HeroBg})` }}
      > </div>
    </section>
  );
};

export default HeroSection;
