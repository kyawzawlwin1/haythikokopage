import { Link } from "wouter";

const Header = () => {
  return (
      <header className="fixed top-6 inset-x-0 z-50 mx-auto w-[90%] max-w-6xl">
      {/* bg-white/10 backdrop-blur-md: mirror effect */}
      <nav className="flex items-center justify-between px-6 py-3 
                      bg-white/10 backdrop-blur-md 
                      border border-white/20 rounded-[2rem] 
                      shadow-xl shadow-black/10">
        
         <div className="flex-shrink-0">
  <a className="
    font-poppins font-extrabold text-2xl tracking-tighter
    /* Metallic Black Gradient: အနက်ရောင်ကနေ ခဲရောင်ရင့်ရင့်ကို ပြေးထားတာ */
    bg-gradient-to-b from-[#0f0f0f] via-[#2d2d2d] to-[#000000]
    bg-clip-text text-transparent
    
    /* Silver Glow: အနောက်ကနေ ငွေရောင်အလင်းပါးပါးလေး ပေးထားလို့ စာသားက ကြွတက်နေမှာပါ */
    filter drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]
    
    cursor-pointer hover:opacity-80 transition-opacity
  ">
    Hay Thi Ko Ko
  </a>
</div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex gap-6">
          <li>
            <Link href="/" className="
    text-[#1a1a1a] font-bold tracking-tight
    hover:text-[#333333] 
    drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]
    transition-all duration-300"  >Home</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/expertise">Expertise</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
        </div>

    <button className="
  /* Base Style: Crystal Glass (ပန်းရောင်မပါတော့ဘဲ ငွေရောင်သန်းတဲ့ မှန်ကြည်) */
  bg-white/10 backdrop-blur-lg
  text-[#0f0f0f] font-bold rounded-full px-7 py-2 
  border-2 border-white/30
  
  /* Metallic Black Text Shadow: စာသားကို ပြောင်လက်စေဖို့ အောက်က အလင်းလွှတ်ထားတာ */
  drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]
  
  transition-all duration-300
  
  /* Hover State: အနက်ရောင်မှန် (Obsidian Glass) ပုံစံမျိုး ပြောင်းသွားမယ် */
  hover:bg-black/10
  hover:border-black/20
  hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]
  hover:scale-105

  /* Focus & Active */
  focus:outline-none focus:ring-2 focus:ring-black/10
  active:scale-95
">
  Contact
</button>
      </nav>
    </header>
  );
};

export default Header;
