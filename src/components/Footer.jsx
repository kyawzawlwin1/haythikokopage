import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    // bg-pink-500/10: soft pink glass effect
    // border-pink-200/20: adding soft pink at borders

    <footer className="flex justify-center bg-secondary-light-yello not-last-of-type:w-full py-12 backdrop-blur-2xl">
      <div className=" text-gray-700 max-w-8xl w-full mx-auto px-20 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand Name with Metallic Gradient Text */}
        <div className="font-poppins">
          <span className="text-gray-800 font-bold text-xl uppercase ">
            Hay Thi Ko Ko
          </span>

          <p className="text-pink-700 text-xs mt-1">
            © 2026 All Rights Reserved.
          </p>
        </div>
        {/* Metallic Social Icons */}
        <div>
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="#"
                className=""
              >
                <FaLinkedinIn className="text-gray-700 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] text-2xl transition-all" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className=""
              >
                <MdOutlineMailOutline className="text-gray-700 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] text-2xl transition-all" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className=""
              >
                <FaSquareInstagram className="text-gray-700 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] text-2xl transition-all" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
