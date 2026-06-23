import { useEffect, useState } from "react";
import { Link } from "wouter";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  return (
    <header className="font-poppins sticky top-0 z-50 bg-[#FFFBF1] w-full border-b border-gray-300 ">
      {/* 🌟 CHANGED LINE: အပြင်ဘက်ဆုံး Div မှ flex-col များကို ဖယ်ရှားပြီး relative သီးသန့် ထားရှိခြင်း */}
      <div className="mx-auto w-full relative">
        {/* 🌟 CHANGED LINE: Nav ကြီးကို flex w-full ပေးပြီး ကလေးများကို items-center နှင့် justify-between ဖြင့် ညှိခြင်း */}
        <nav className="flex items-center justify-between w-full px-[4%] py-4 relative">
          {/* Logo Section */}
          <div>
            <a className="font-poppins font-extrabold text-gray-900 text-xl md:text-3xl tracking-tighter cursor-pointer hover:opacity-80 transition-opacity">
              PinkyKo
            </a>
          </div>

          {/* 🔐 Checkbox controller */}
          <input type="checkbox" className="peer hidden" id="navbar-open" />

          {/* 🌟 CHANGED LINE: Hamburger Label ကို absolute မသုံးတော့ဘဲ Flex box ထဲတွင် အလိုအလျောက် ညာဘက်သို့ ကပ်စေခြင်း */}
          <label
            className="cursor-pointer md:hidden select-none z-50 text-3xl"
            htmlFor="navbar-open"
          >
            <BiMenu className="text-gray-900" />
          </label>

          {/* =========================================================================
              💻 DESKTOP NAVIGATION (Laptop/Desktop View တွင်သာ ပေါ်မည့် သန့်ရှင်းသော Menu)
              ========================================================================= */}
          {/* 🌟 CHANGED LINE: peer-checked:block ကို ဖယ်ရှားပြီး Desktop အတွက် သီးသန့် hidden md:flex စနစ် သုံးထားခြင်း */}
          <div className="hidden md:flex items-center ml-auto mr-12">
            <ul className="flex gap-8 items-center">
              <li>
                <Link
                  href="/"
                  className="text-[#1a1a1a] font-bold tracking-tight hover:text-gray-500 transition-all duration-300 text-xl"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/Projects"
                  className="text-gray-800 text-lg border-l border-gray-400 pl-3 hover:text-gray-500 transition-all"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-800 text-lg hover:text-gray-500 transition-all"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-800 text-lg hover:text-gray-500 transition-all"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            =======
            <button className="bg-gray-900 text-stone-300 font-bold px-7 py-3 transition-all duration-300 hover:bg-stone-300 hover:text-gray-900 hover:broder  active:scale-95 focus:outline-none rounded-sm">
              b33c0a2feb286f587b0f6ebea8831d403d084ff9 Contact
            </button>
          </div>

          {/* =========================================================================
              📱 MOBILE DROPDOWN MENU (ဖုန်းတွင် ☰ နှိပ်မှ အပေါ်ကနေ Overlay အဖြစ် လျှောခနဲ ပွင့်လာမည့် စနစ်)
              ========================================================================= */}
          {/* 🌟 CHANGED LINE: အစ်ကို့ရဲ့ မူရင်းကုဒ်တွင် မပါဝင်သေးသော Mobile Dropdown သီးသန့် Container Box ကို ထည့်သွင်းခြင်း */}
          <div className="absolute top-[100%] left-0 w-full bg-[#FFFBF1] hidden peer-checked:flex flex-col items-center space-y-6 py-8 border-b border-gray-300 md:hidden z-40 shadow-md">
            <Link
              href="/"
              className="text-[#1a1a1a] font-bold text-xl hover:opacity-60><a "
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
            <button className="bg-gray-900 text-white font-bold px-10 py-3 tracking-wide uppercase text-sm w-[80%]">
              Contact
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
