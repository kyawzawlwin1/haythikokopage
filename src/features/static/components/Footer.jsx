import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="flex w-full">
      <div></div>
      <div>
        <ul>
          <li>
            <a href="">
              <FaLinkedinIn className="" />
            </a>
          </li>
          <li>
            <a href="">
              <MdOutlineMailOutline />
            </a>
          </li>
          <li><a href=""><FaSquareInstagram />
</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
