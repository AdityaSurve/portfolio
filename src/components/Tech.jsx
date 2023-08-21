import React from "react";
import { tech } from "../constants";
import { Tooltip } from "react-tooltip";

const Tech = () => {
  return (
    <div className="w-full py-10 lg:px-20 gap-10 flex flex-wrap justify-center items-center">
      {tech.map((t) => (
        <div
          className="w-16 h-16 bg-[#ffffff30] rounded-full p-1"
          data-tooltip-id={t.name}
          data-tooltip-content={t.name}
          key={t.id}
        >
          <img src={t.icon} alt="" className="w-full h-full" />
          <Tooltip
            id={t.name}
            place="bottom"
            effect="solid"
            delayShow={100}
            delayHide={100}
            className="z-[1000]"
          />
        </div>
      ))}
    </div>
  );
};

export default Tech;
