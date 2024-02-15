import React from "react";
import endlessEmporium from "../src/assets/images/Endless-Emporium.png";
import dataFinance from "../src/assets/images/data-finance.png";
import flixClone from "../src/assets/images/FlixClone.png";
import restaurantTracker from "../src/assets/images/restaurant-tracker.png";
import weatherDashboard from "../src/assets/images/weather-dashboard.png";
import dailyPlanner from "../src/assets/images/daily-planner.png";
import codeQuiz from "../src/assets/images/code-quiz.png";
import passwordGenerator from "../src/assets/images/Password-Generator.png";

const Work = () => {
  const projects = [
    {
      name: "Endless-Emporium",
      image: endlessEmporium,
      github: "https://github.com/Aleks-Ianu/Endless-Emporium",
      live: "https://endless-emporium.netlify.app/",
    },
    {
      name: "data-finance",
      image: dataFinance,
      github: "https://github.com/Sidiq96/data-finance",
      live: "https://github.com/Sidiq96/data-finance",
    },
    {
      name: "FlixClone",
      image: flixClone,
      github: "https://github.com/Sidiq96/FlixClone",
      live: "https://sidiq96.github.io/",
    },
    {
      name: "Restaurant Tracker",
      image: restaurantTracker,
      github: "https://github.com/Sidiq96/restaurant-tracker/",
      live: "https://sidiq96.github.io/restaurant-tracker/",
    },
    {
      name: "Weather Dashboard",
      image: weatherDashboard,
      github: "https://github.com/Sidiq96/Weather-Dashboard",
      live: "https://sidiq96.github.io/Weather-Dashboard",
    },
    {
      name: "Daily Planner",
      image: dailyPlanner,
      github: "https://github.com/Sidiq96/Daily-Planner-App",
      live: "https://sidiq96.github.io/Daily-Planner-App/",
    },
    {
      name: "Code Quiz",
      image: codeQuiz,
      github: "https://github.com/Sidiq96/Code_Quiz",
      live: "https://sidiq96.github.io/Code_Quiz",
    },
    {
      name: "Password Generator",
      image: passwordGenerator,
      github: "https://github.com/Sidiq96/Password_Generator",
      live: "https://sidiq96.github.io/Password_Generator/",
    },
  ];

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1400px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container for projects */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
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
                    <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                      Code
                    </button>
                  </a>
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                      Live
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

export default Work;
