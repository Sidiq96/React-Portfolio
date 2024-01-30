import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import {NavLink} from "react-router-dom";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        {/* Your content goes here */}
        <p className="text-red-500">Hi, My Name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ffffff]">
          Sidiq Hersi
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#ffffff]">
          I'm a Front-end Developer
        </h2>
        <p className="text-[#e7ebf6] py-4 max-w-[700px]">
          Passionate front-end web developer creating engaging and responsive
          user interfaces to bring digital experiences to life.{" "}
        </p>
        <div>
        <NavLink to="/work" className="flex items-center px-6 py-3 my-2 text-white border-2 group hover:bg-red-600 hover:scale-150 hover:duration-300" style={{ maxWidth: "150px" }}>
            View Work <FaArrowCircleRight className="ml-2"/>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
