import React from "react";
import haythikoko from "../assets/about.jpg";
const AboutPage = () => {
  return (
    <section className="min-h-screen px-6 py-12 bg-[#FFE2E2]">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* 1. PHOTO & BIO FIRST (Top on mobile, side-by-side on desktop) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={haythikoko}
              alt="Hayko Designs"
              className="w-full max-w-[400px] lg:max-w-[500px] h-auto rounded-xl object-cover shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-4 text-gray-900">
            <h2 className="text-3xl font-bold text-[#E36A6A]">About Me</h2>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum numquam repellat aperiam eum incidunt nemo ab odit
              culpa totam facilis perspiciatis soluta quod fuga modi alias est,
              commodi doloribus saepe!
            </p>
          </div>
        </div>

        {/* 2. CONTACT FORM SECOND (Cleanly stacked inputs) */}
        <div className="w-full max-w-lg mx-auto bg-white/60 p-6 sm:p-8 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Get in Touch
          </h3>
          <form action="" className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-900 text-white placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E36A6A]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-900 text-white placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E36A6A]"
            />
            <button
              type="submit"
              className="bg-[#E36A6A] hover:bg-[#d15858] text-white font-medium rounded-lg px-6 py-3 mt-2 transition-colors self-start"
            >
              Contact
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
