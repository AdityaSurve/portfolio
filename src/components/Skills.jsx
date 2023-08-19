import React, { useState, useEffect, useRef } from "react";
import { skills } from "../data"; // Make sure to adjust the import path

const Skills = ({ theme }) => {
  return (
    <div className="flex flex-col h-screen justify-start p-20 items-center">
      <div className="text-[#42446E] text-3xl font-bold text-center">
        My Tech Stack
      </div>
      <div className="text-[#666666] text-center text-lg mt-2">
        Technologies & Tools I’ve worked on
      </div>
      <div className="grid grid-cols-12 mt-5 gap-2 w-full relative overflow-hidden">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg transition-all duration-500 ${
              theme === "light" ? "bg-white" : "bg-[#191919]"
            }`}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="h-16 w-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
