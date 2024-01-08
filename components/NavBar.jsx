import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/images/logo.png";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img
          src={Logo}
          alt="Logo Image"
          style={{ width: "110px", height: "110px" }}
        />
      </div>
      {/* menu */}
      <ul className="hidden md:flex ">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact Us</li>
      </ul>

      {/* dropdown Menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        <FaBars />
      </div>
      {/* Mobile menu */}
      <ul className={nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className="py6 text-4xl"> Home</li>
        <li className="py6 text-4xl">About</li>
        <li className="py6 text-4xl">Skills</li>
        <li className="py6 text-4xl">Projects</li>
        <li className="py6 text-4xl">Contact Us</li>
      </ul>
    </div>
  );
};

export default NavBar;
