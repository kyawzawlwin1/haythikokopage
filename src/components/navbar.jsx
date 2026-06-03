import React, { useState } from "react";

const Navbar = () => {
  // 🌟 ဖုန်းမှာ Menu ပွင့်/ပိတ်တာကို ထိန်းချုပ်မည့် State ဖြစ်ပါတယ်ရှင်
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-6 bg-[#FAF6EE]">
      {/* 👑 Logo ပိုင်း */}
      <div className="text-xl font-bold font-serif">HAY THI KO KO</div>

      {/* 💻 Desktop Menu: ကွန်ပျူတာမှာပဲ ပြပြီး (md:flex)၊ ဖုန်းမှာ ဖျောက်ထားမည် (hidden) */}
      <div className="hidden md:flex items-center space-x-8 font-serif">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <button className="bg-black text-white py-2 px-5 rounded">
          Contact
        </button>
      </div>

      {/* 📱 Mobile Hamburger Button: ဖုန်းမှာပဲ ပြပြီး (flex)၊ ကွန်ပျူတာမှာ ဖျောက်မည် (md:hidden) */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}{" "}
          {/* Open ဖြစ်ရင် အမြှောက်လက္ခဏာပြပြီး၊ ပိတ်ရင် မျဉ်း ၃ ကြောင်းပြမည် */}
        </button>
      </div>

      {/* 📱 Mobile Dropdown Menu: isOpen True ဖြစ်မှ ဖုန်း Screen ထဲတွင် အောက်သို့ ပွင့်ကျလာမည် */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#FAF6EE] flex flex-col items-center space-y-6 py-6 border-t md:hidden font-serif shadow-md z-50">
          <a href="#home" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <button className="bg-black text-white py-2 px-6 rounded">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
