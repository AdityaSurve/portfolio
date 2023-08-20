import React from "react";
import { Tooltip } from "react-tooltip";
const SkillsCard = ({ title, description, skills }) => {
  return (
    <div className="card-container bg-[#fff1] backdrop-blur-xl">
      <div className="card">
        <div className="front-content flex flex-col">
          <p className="text-lg h-12">{title}</p>
          <p className="text-xs px-6 mt-5 h-16 text-center">{description}</p>
        </div>
        <div className="content">
          <p className="heading">Tech Stack: </p>
          <div className="w-full grid grid-cols-4 gap-x-2 gap-y-3 justify-between">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="w-10 h-10 p-1 z-30 rounded-full bg-[#fff3] backdrop-blur-2xl"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  data-tooltip-id="skillName"
                  data-tooltip-content={skill.name}
                  className="h-full w-full object-contain"
                />
                <Tooltip id="skillName" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
