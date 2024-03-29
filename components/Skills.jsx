import React from "react";

import HTML from "../src/assets/images/html.png";
import CSS from "../src/assets/images/css.png";
import BootStrap from "../src/assets/images/bootstrap.png";
import JavaScript from "../src/assets/images/javascript.png";
import JQuery from "../src/assets/images/jquery.png";
import ReactImg from "../src/assets/images/react.png";
import Node from "../src/assets/images/node.png";
import Tailwind from "../src/assets/images/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-white">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-red-600">
            Skills
          </p>
          <p className="py-6">
            These are the different technologies I've worked with.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={HTML} alt="HTML Logo" />
            <p>HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={CSS} alt="HTML Logo" />
            <p>CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img
              className="w-25 h-20 mx-auto"
              src={BootStrap}
              alt="HTML Logo"
            />
            <p>Bootstrap</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML Logo" />
            <p>JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-25 h-20 mx-auto" src={JQuery} alt="HTML Logo" />
            <p>JQuery</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={Node} alt="HTML Logo" />
            <p>Node.JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML Logo" />
            <p>React.JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML Logo" />
            <p>Tailwind.CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
