import PropTypes from 'prop-types';
import React from "react";

const Work = ({ projects }) => {
  return (
    <div
      name="work"
      className="pt-20 w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1400px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="inline mt-20 text-4xl font-bold text-gray-300 border-b-4 border-pink-600">
            Projects
          </p>
          <p className="py-6">Check out some of my recent work.</p>
        </div>

        {/* Container for projects */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 ">
          {/* Grid Item */}
          {projects.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font-bold tracking-wider text-white ">
                  {item.name}
                </span>
                <div className="pt-8 text-center">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg hover:text-red-600">
                      GitHub Repo
                    </button>
                  </a>
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg hover:text-red-600">
                      Live Page
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Work.propTypes = {
  projects: PropTypes.array,
};

export default Work;

