import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        {/* Your content goes here */}
        <p className="text-pink-500">Hi, My Name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Sidiq Hersi
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          I'm a Front-end Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Passionate front-end web developer creating engaging and responsive
          user interfaces to bring digital experiences to life.{" "}
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600">
            View Work <FaArrowCircleRight className="ml-2"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;