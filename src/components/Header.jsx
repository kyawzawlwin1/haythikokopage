import { Link } from "wouter";

const Header = () => {
  return (
    <header className="font-poppins Mono sticky top-0 z-50 bg-soft-coffee w-full deep-black mx-auto">
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
    font-poppins font-extrabold text-gray-900 text-2xl tracking-tighter cursor-pointer hover:opacity-80 transition-opacity 
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
    drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]
    transition-all duration-300 text-lg"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-gray-800 text-lg" href="/Projects">
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
  
  bg-new-form2 backdrop-blur-lg
  text-[#0f0f0f] font-bold rounded-full px-7 py-2 
  border-2 border-white/30
  drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]
  transition-all duration-300
 hover:bg-black/10
  hover:border-black/20
  hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]
  hover:scale-105

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
