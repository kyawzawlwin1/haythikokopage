import React from "react";
import heroBg from "../../../assets/Image.png";

const HeroSection = () => {
  return (
    /* flex-1 take the space between header and footer */
    <section
      className="relative flex-1 w-full bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* <div className="absolute inset-0 bg-black/1"></div> */}
      <div className="relative z-10 text-white">
        <h1 className="text-gray-800">Welcometomyportfolio</h1>
      </div>
    </section>
  );
};

export default HeroSection;
