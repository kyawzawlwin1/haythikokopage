import React from "react";

const Header = () => {
  return (
    <header className="flex w-full py-4 px-4">
      <div className="flex items-center w-full">
        <div>
          <a className="font-monstrous">Hay Thi Ko KO</a>
        </div>
        <div className="fles items-center gap-6 ml-auto pr-15">
          {" "}
          <nav className="ml-auto">
            <ul className="flex gap-6">
              <li className="flex gap-3">
                <a href="" className="p-3">Home</a>
                <a href="" className="p-3">Portfolio</a>
                <a href="" className="p-3 ">Expertise</a>
                <a href="" className="p-3">About</a>
              </li>
            </ul>
          </nav>
        </div>
        <button className="bg-white text-pink-700 rounded-lg p-1">Contact</button>
      </div>
    </header>
  );
};

export default Header;
