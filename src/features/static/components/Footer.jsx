import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    // bg-pink-500/10: ပန်းရောင်ဖျော့ဖျော့ glass effect
    // border-pink-200/20: အနားသတ်ကိုလည်း ပန်းရောင်နုနုလေး သုံးထားပါတယ်
    <footer className="w-full py-12 bg-gradient-to-br from-pink-500/20 via-rose-400/10 to-purple-500/20 backdrop-blur-2xl border-t border-pink-300/30">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand Name with Metallic Gradient Text */}
        <div className="font-poppins">
          <span className="bg-gradient-to-r from-pink-200 via-white to-pink-200 bg-clip-text text-transparent text-xl font-black uppercase tracking-widest drop-shadow-[0_2px_10px_rgba(255,182,193,0.5)]">
            Hay Thi Ko Ko
          </span>
          <p className="text-pink-100/50 text-xs mt-1">© 2026 All Rights Reserved.</p>
        </div>

        {/* Metallic Social Icons */}
        <ul className="flex items-center gap-8">
          <li>
            <a href="#" className="group relative p-3 bg-white/5 rounded-full border border-pink-200/20 hover:border-pink-300/60 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
              <FaLinkedinIn className="text-pink-200 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] text-2xl transition-all" />
            </a>
          </li>
          <li>
            <a href="#" className="group relative p-3 bg-white/5 rounded-full border border-pink-200/20 hover:border-pink-300/60 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
              <MdOutlineMailOutline className="text-pink-200 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] text-2xl transition-all" />
            </a>
          </li>
          <li>
            <a href="#" className="group relative p-3 bg-white/5 rounded-full border border-pink-200/20 hover:border-pink-300/60 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
              <FaSquareInstagram className="text-pink-200 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] text-2xl transition-all" />
            </a>
          </li>
        </ul>

      </div>
    </footer>
  );
};

export default Footer;