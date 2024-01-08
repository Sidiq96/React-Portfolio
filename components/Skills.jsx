import React from "react";

import HTML from '../assets/images/html.png';
import CSS from '../assets/images/css.png';
import JavaScript from '../assets/images/javascript.png';
import ReactImg from '../assets/images/react.png';
import Node from '../assets/images/node.png';
import Tailwind from '../assets/images/tailwind.png';

const Skills = () => {
    return (
        <div name='skills' className="bg-[#0a192f] text-white">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-red-600">Skills</p>
                    <p className="py-6">These are the different technologies I've worked with.</p>
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
                        <img className="w-20 mx-auto" src={JavaScript} alt="HTML Logo" />
                        <p>JavaScript</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
                        <img className="w-20 mx-auto" src={Node} alt="HTML Logo" />
                        <p>NodeJS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
                        <img className="w-20 mx-auto" src={ReactImg} alt="HTML Logo" />
                        <p>ReactJS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
                        <img className="w-20 mx-auto" src={Tailwind} alt="HTML Logo" />
                        <p>TailwindCSS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;
