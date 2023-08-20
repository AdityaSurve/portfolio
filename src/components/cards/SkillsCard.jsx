import React from "react";
import { Tooltip } from "react-tooltip";
const SkillsCard = ({ title, description, skills }) => {
  return (
    <div className="card-container bg-[#fff1] backdrop-blur-xl cursor-pointer bg-card bg-contain bg-center bg-fixed">
      <div className="card">
        <div className="front-content flex flex-col">
          <p className="text-xl h-12 bg-gradient-to-t from-[#915EFF10] to-[#915EFF] bg-clip-text text-transparent">
            {title}
          </p>
          <p className="text-sm px-6 mt-5 h-16 text-center">{description}</p>
        </div>
        <div className="content">
          <p className="heading h-10">Tech Stack: </p>
          <div className="w-full h-full flex flex-wrap justify-center">
            {skills.map((skill, index) => (
              <div key={index}>
                <div
                  className="h-10 lg:w-14 w-10 lg:h-14 p-1 m-2 rounded-full bg-[#fff3] backdrop-blur-2xl flex items-center justify-center"
                  style={{
                    zIndex: 1,
                    pointerEvents: "auto",
                  }}
                  data-tooltip-content={skill.name}
                  data-tooltip-id={skill.name}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <Tooltip
                  id={skill.name}
                  place="bottom"
                  effect="solid"
                  delayShow={100}
                  delayHide={100}
                  className="z-[1000]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
