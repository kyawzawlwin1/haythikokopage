import React from "react";
import HeroBg from "../../../assets/archiphoto.jpg";

const HeroSection = () => {
  return (
    /* flex-1 take the space between header and footer */
    <section className="min-h-screen">
      {/* layer one */}
      <div className="text-gray-900 grid grid-cols-1 md:grid-cols-2 gap-16 w-full px-12 md:px-24 py-16 max-w-7xl mx-auto">
        {/* title box*/}
        <div className="flex flex-col justify-start">
          <h1 className="font-Poppins text-6xl font-bold tracking-tighter text-gray-300 mb-8">
            Crafting Digital Spaces
          </h1>
        </div>

        {/* paragraph */}
        <div
          className="flex flex-col justify-start"
          // style={{ backgroundImage: `url(${heroBg})` }}
        >
          <p className="font-poppins text-gray-700 leading-relaxed text-base md:text-lg">
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
          {/* layer two */}
      <div
        className="w-full h-[400px] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        {" "}
      </div>
      {/* layer three */}
      <div className="h-80">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
          doloribus.
        </p>
        <button className="bg-gray-900">Contact Me</button>
      </div>
    </section>
  );
};

export default HeroSection;
