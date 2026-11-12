import { useEffect, useState } from "react";
import { Link } from "wouter";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  return (
    <header className="font-poppins sticky top-0 z-50 bg-[#FFCED8] w-full   px-[30px] lg:px-[60px] ">
      {/* relative div */}
      <div className="mx-auto w-full relative">
        {/* nav bar */}
        <nav className="flex items-center justify-between w-full py-4 relative">
          {/* Logo Section */}
          <div>
            <a className="font-poppins font-extrabold text-[#D45060] text-xl md:text-2xl tracking-tighter cursor-pointer hover:opacity-80 transition-opacity">
              HAYKO DESIGNS
            </a>
          </div>

          {/* 🔐 Checkbox controller */}
          <input type="checkbox" className="peer hidden" id="navbar-open" />

          {/* 🌟 CHANGED LINE: Hamburger Label not using absolute and sticking to right */}
          <label
            className="cursor-pointer md:hidden select-none z-50 text-3xl"
            htmlFor="navbar-open"
          >
            <BiMenu className="text-gray-900" />
          </label>

          {/* =========================================================================
              💻 DESKTOP NAVIGATION (Laptop/Desktop View Menu)
              ========================================================================= */}
          {/* 🌟 CHANGED LINE: peer-checked:block removed and desktop hidden md: flex */}
          <div className="hidden md:flex items-center ml-auto mr-12">
            <ul className="flex gap-8 items-center">
              <li>
                <Link
                  href="/"
                  className="text-[#E36A6A] font-JetBrains Mono font-bold tracking-tight hover:text-[gray-500] transition-all duration-300 text-xl"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/Projects"
                  className="text-[#E36A6A] text-lg font-JetBrains Mono border-l border-gray-400 pl-3 hover:text-gray-500 transition-all"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#E36A6A] text-lg font-JetBrains Mono hover:text-gray-500 transition-all"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#E36A6A] text-lg font-JetBrains Mono hover:text-gray-500 transition-all"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <button className="bg-[#D45060] text-[#FFCED8] font-bold px-7 py-3 border border-transparent transition-all duration-300 hover:bg-[#FFCED8] hover:text-gray-900 hover:border-[#D45060] hover:scale-105 active:scale-95 focus:outline-none rounded-sm">
              Contact
            </button>
          </div>

          {/* =========================================================================
              📱 MOBILE DROPDOWN MENU
              ========================================================================= */}
          {/* 🌟 CHANGED LINE: mobile nav bar */}
          <div className="w-full h-[100vh] pt-4 px-[7%] fixed top-0 right-0 bg-[#FFCED8] hidden peer-checked:flex flex-col gap-3 border-b border-gray-300 md:hidden z-40 transform -translate-x-full peer-checked:translate-x-0 transition-transform duration-300 ease-in-out">
            <Link
              href="/"
              className="text-[#E36A6A] font-bold text-xl hover:opacity-60"
            >
              Home
            </Link>
            <Link
              href="/Projects"
              className="text-gray-800 font-bold text-xl hover:opacity-60"
            >
              Projects
            </Link>
            <Link
              href="/services"
              className="text-gray-800 font-bold text-xl hover:opacity-60"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-800 font-bold text-xl hover:opacity-60"
            >
              About
            </Link>
            <button className="self-start px-6 py-2.5 bg-gray-900 text-white text-center font-bold tracking-wide uppercase text-sm rounded-sm hover:bg-[#FFFBF1] hover:text-gray-900 transition-colors">
              Contact
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
