import React from "react";
import heroBg from "../../../assets/Image.png";

const HeroSection = () => {
  return (
    /* flex-1 take the space between header and footer */
    <section 
      /* bg-cover, bg-center တို့က အစ်ကိုမေးတဲ့ CSS တွေရဲ့ Tailwind class တွေပါ */
      className="relative flex-1 w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-white">
        <h1>Architectural Excellence</h1>
      </div>
    </section>
  );
};

export default HeroSection;