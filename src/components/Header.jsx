import { useEffect, useState } from "react";
import { Link } from "wouter";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 🔄 ၂။ Screen အကျယ်ကြီး ရောက်သွားပါက ဖွင့်ထားမိသော ဖုန်း Menu ကို အလိုအလျောက် ပြန်ပိတ်ပေးမည့် စနစ်
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header className="font-poppins Mono sticky top-0 z-50 bg-[#FFFBF1] w-full deep-black mx-auto border-b border-gray-300">
      {/* =========================================================================
          📌 အပိုင်း (က) - NAVBAR SECTION (ကွန်ပျူတာနှင့် ဖုန်းအတွက် Responsive ဖြစ်စေမည့် နေရာ)
          ========================================================================= */}
      <nav className="flex justify-between items-center p-6 md:px-12 max-w-7xl mx-auto w-full border-b border-black/5">
        {/* 🏛️ Logo */}
        <div className="text-xl font-bold font-serif tracking-wider">
          HAY THI KO KO
        </div>

        {/* 💻 Desktop Menu Links (ကွန်ပျူတာမှာပဲပြပြီး၊ ဖုန်းမှာ ဖျောက်ထားမည်) */}
        <div className="hidden md:flex items-center space-x-12 font-serif text-sm tracking-wide">
          <a href="#home" className="hover:opacity-60 transition-opacity">
            Home
          </a>
          <a href="#about" className="hover:opacity-60 transition-opacity">
            About
          </a>
          <a href="#projects" className="hover:opacity-60 transition-opacity">
            Projects
          </a>
          <button className="bg-black text-white text-xs py-2.5 px-6 rounded-none tracking-widest hover:bg-black/80 transition-colors uppercase">
            Contact
          </button>
        </div>

        {/* 📱 Mobile Hamburger Icon (ဖုန်းမှာပဲပြပြီး၊ ကွန်ပျူတာမှာ ဖျောက်ထားမည်) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl focus:outline-none transition-transform duration-300"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* 📱 Mobile Dropdown Menu Links (ဖုန်းမှာ Hamburger နှိပ်မှ အောက်သို့ ပွင့်ကျလာမည့် စနစ်) */}
      {isOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-[#FAF6EE] flex flex-col items-center space-y-8 py-10 border-b border-black/10 md:hidden font-serif text-base tracking-wide z-50 shadow-sm animate-fade-in">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="hover:opacity-60"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:opacity-60"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="hover:opacity-60"
          >
            Projects
          </a>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-black text-white text-xs py-3 px-8 rounded-none tracking-widest uppercase"
          >
            Contact
          </button>
        </div>
      )}
      {/* bg-white/10 backdrop-blur-md: mirror effect */}
      <div className="mx-auto px-1 w-full">
        {" "}
        <nav
          className="flex items-center justify-between px-[4%] py-3 
                       backdrop-blur-md 
                      
                      "
        >
          <div className="">
            <a
              className="
    font-poppins font-extrabold text-gray-900 text-3xl tracking-tighter cursor-pointer hover:opacity-80 transition-opacity 
  "
            >
              Hay Thi Ko Ko
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block ml-auto mr-12">
            <ul className="flex gap-6">
              <li>
                <Link
                  href="/"
                  className="
    text-[#1a1a1a] font-bold tracking-tight
    hover:text-[#333333] 
    
    transition-all duration-300 text-lg"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-800 text-lg border-l border-gray-400 pl-3"
                  href="/Projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link className="text-gray-800 text-lg" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-gray-800 text-lg" href="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <button
            className="
  
  bg-gray-900 backdrop-blur-lg
  text-stone-300 font-bold px-7 py-3
 

  transition-all duration-300
 hover:bg-stone-900
  hover:border-black/20
  hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]
  hover:scale-105
hover:text-white
  /* Focus & Active */
  focus:outline-none focus:ring-2 focus:ring-black/10
  active:scale-95
"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
