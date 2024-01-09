import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/images/logo.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img
          className="cursor-pointer"
          src={Logo}
          alt="Logo Image"
          style={{ width: "110px", height: "110px" }}
        />
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex">
        <li className="hover:text-red-500">Home</li>
        <li className="hover:text-red-500">About</li>
        <li className="hover:text-red-500">Skills</li>
        <li className="hover:text-red-500">Projects</li>
        <li className="hover:text-red-500">Contact Us</li>
      </ul>

      {/* Mobile menu */}
      <div onClick={handleClick} className="md:hidden z-10 hover:text-red-500">
        <FaBars />
      </div>

      {/* Mobile dropdown menu */}
      {nav && (
        <ul className="md:hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center">
          <li className="py-6 text-4xl hover:text-red-500">Home</li>
          <li className="py-6 text-4xl  hover:text-red-500">About</li>
          <li className="py-6 text-4xl  hover:text-red-500">Skills</li>
          <li className="py-6 text-4xl  hover:text-red-500">Projects</li>
          <li className="py-6 text-4xl  hover:text-red-500">Contact Us</li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
