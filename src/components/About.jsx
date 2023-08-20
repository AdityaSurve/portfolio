import React from 'react'
import { styles } from "../styles";
import SkillsCard from "./cards/SkillsCard";
import { skills } from "../constants";
const About = () => {
  return (
    <div className={`${styles.paddingX} w-full flex flex-col py-10`}>
      <div className="text-xl text-[#AAA6C3]">INTRODUCTION</div>
      <div className="text-5xl text-white font-bold mt-5 tracking-wide">
        Overview.
      </div>
      <div className="text-[#AAA6C3] mt-8 w-1/2">
        I'm a skilled full stack developer with expertise in TypeScript,
        JavaScript, and HTML, focused on frameworks like React, NodeJS, NextJS,
        and NestJS. Alongside libraries such as Tailwind CSS, Material UI, and
        Bootstrap, I have a deep-seated passion for harnessing the potential of
        Artificial Intelligence and Machine Learning. Let's work together to
        bring your ideas to life!
      </div>
      <div className="w-full mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5 gap-10">
        {skills.map((skill, index) => (
          <SkillsCard
            key={index}
            title={skill.title}
            description={skill.description}
            skills={skill.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default About