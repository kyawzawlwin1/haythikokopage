import React from "react";
import heroBg from "../../../assets/Image1.png";

const HeroSection = () => {
  return (
    /* flex-1 take the space between header and footer */
    <section
      className="relative flex w-full bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* <div className="absolute inset-0 bg-black/1"></div> */}
      <div className="relative z-10 text-white flex flex-col items-center justify-center">
        {/* beauty paragraph */}
        <div className="flex">
          <p className="font-bold text-gray-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, sapiente?</p>
        </div>
        {/* another paragraph */}
        <div>
          <p></p>
        </div>
        <h1 className="text-gray-800"></h1>
      </div>
    </section>
  );
};

export default HeroSection;
