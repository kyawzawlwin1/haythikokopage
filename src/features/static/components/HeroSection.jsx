import React from "react";
import heroBg from "../../../assets/Image1.png";

const HeroSection = () => {
  return (
    /* flex-1 take the space between header and footer */
    <section className=" flex bg-cover bg-center min-h-screen">
      <div className=" text-white flex flex-row items-center w-full px-12 md:px-24 justify-between">
        {/* word box */}
        <div className="">
          <h1 className="font-Poppins text-6xl font-bold tracking-tighter text-gray-300">
            Crafting Digital Spaces
          </h1>
          <p className="font-bold text-gray-800">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
            sapiente?
          </p>
        </div>
        {/* another paragraph */}
        <div
          className="w-64 h-64 rounded-xl w-96 h-96 md:w-[500px] md:h-[500px] shadow-lg bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          {/* <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis distinctio rem cum numquam quisquam est aperiam
            corporis vitae illum necessitatibus! Perferendis animi doloribus
            consectetur inventore aperiam unde aut numquam placeat.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
