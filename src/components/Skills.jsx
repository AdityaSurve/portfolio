import React, { useState, useEffect, useRef } from "react";
import { skills } from "../data";
import { Tooltip } from "react-tooltip";

const Skills = ({ theme }) => {
  return (
    <div
      className={`flex flex-col  justify-center ${
        theme === "light" ? "bg-white" : "bg-[#191919]"
      } items-center p-5 lg:p-20 transition-all duration-500`}
    >
      <div className="text-[#42446E] text-3xl font-bold text-center">
        My Tech Stack
      </div>
      <div className="text-[#666666] text-center text-lg mt-2">
        Technologies & Tools I’ve worked on
      </div>
      <div className="grid grid-cols-4 lg:grid-cols-12 mt-5 gap-2 w-full relative overflow-hidden">
        {skills.map((skill, index) => (
          <div key={skill.name}>
            <div
              className="flex items-center justify-center hover:bg-gray-100 rounded-full p-2 transition-all duration-500"
              data-tooltip-id="skill-name"
              data-tooltip-content={skill.name}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-16 w-16 object-contain"
              />
            </div>
            <Tooltip id="skill-name" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
