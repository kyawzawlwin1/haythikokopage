import React from "react";
import HeroBg from "../../../assets/archiphoto.jpg";

const HeroSection = () => {
  return (
    /* flex-1 take the space between header and footer */
    <section className="min-h-screen bg-[#FFFBF1]">
      {/* layer one */}
      <div className="flex justify-center items-center text-gray-900 grid grid-cols-1 md:grid-cols-3 gap-20 w-full px-12 md:px-24 py-30 mx-auto max-w-none">
        {/* title box*/}
        <div className="flex flex-col justify-start md:col-span-">
          <h1 className="font-sans text-6xl font-bold tracking-tighter text-stone-700 mb-8 pl-10">
            Crafting Digital Spaces
          </h1>
        </div>

        {/* paragraph */}
        <div
          className="flex flex-col justify-start w-full md:col-span-2"
          // style={{ backgroundImage: `url(${heroBg})` }}
        >
          <p className="font-serif text-stone-700 leading-relaxed md:text-lg lg:text-3xl ">
            I am an architect passionate about creating bold, intense, and
            modern designs that leave a lasting impression. 
          </p>
          <p className="text-gray-900"></p>
        </div>
      </div>
          {/* layer two */}
      <div
        className="w-full h-[400px] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        {" "}
      </div>
      {/* layer three */}
      <div className="h-80">
        <p className="py-30 text-gray-900">
          My work blends
            creativity, structure, and innovation to transform spaces into
            powerful visual experiences. Every project is designed with
            precision, emotion, and a unique architectural identity that stands
            out from the ordinary.
        </p>
        <button className="bg-gray-900 ">Contact Me</button>
      </div>
    </section>
  );
};

export default HeroSection;
