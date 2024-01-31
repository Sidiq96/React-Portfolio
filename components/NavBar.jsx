import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../public/assets/images/logo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  const handleClickLink = () => {
    window.location.href = "/";
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 ">
      <div>
        <img
          className="cursor-pointer"
          src={Logo}
          alt="Logo Image"
          style={{ width: "110px", height: "110px" }}
          onClick={handleClickLink}
        />
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex">
        <li className="hover:text-red-500">
          <NavLink to="/" end> Home</NavLink>
        </li>
        <li className="hover:text-red-500">
        <NavLink to="/about" end> About</NavLink>
        </li>
        <li className="hover:text-red-500">
        <NavLink to="/skills" end> Skills</NavLink>
        </li>
        <li className="hover:text-red-500">
        <NavLink to="/work" end> Projects</NavLink>
        </li>
        <li className="hover:text-red-500">
        <NavLink to="/contact" end> Contact</NavLink>
        </li>
      </ul>

      {/* Mobile menu */}
      <div onClick={handleClick} className="z-10 md:hidden hover:text-red-500">
        <FaBars />
      </div>

      {/* Mobile dropdown menu */}
      {nav && (
        <ul className="md:hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center">
          <li className="py-6 text-4xl hover:text-red-500">
            <NavLink to="/" end onClick={handleClick}> Home</NavLink>
          </li>
          <li className="py-6 text-4xl hover:text-red-500">
            <NavLink to="/about" end onClick={handleClick}> About</NavLink>
          </li>
          <li className="py-6 text-4xl hover:text-red-500">
            <NavLink to="/skills" end onClick={handleClick}> Skills</NavLink>
          </li>
          <li className="py-6 text-4xl hover:text-red-500">
            <NavLink to="/work" end onClick={handleClick}> Projects</NavLink>
          </li>
          <li className="py-6 text-4xl hover:text-red-500">
            <NavLink to="/contact" end onClick={handleClick}> Contact</NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
