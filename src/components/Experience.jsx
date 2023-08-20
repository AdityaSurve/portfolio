import React from 'react'
import { styles } from "../styles";
import { experiences } from "../constants";
const Experience = () => {
  return (
    <div className={`${styles.paddingX} w-full flex flex-col py-10`}>
      <div className="text-xl lg:text-3xl text-[#AAA6C3]">EXPERIENCE</div>
      <div className="text-5xl lg:text-7xl text-white font-bold mt-5 tracking-wide">
        Timeline.
      </div>
      <div className="-mt-8 lg:-mt-16">
        <section>
          <div className="text-white py-8">
            <div className="container justify-center mx-auto flex flex-col items-start md:flex-row">
              <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                <div className="container mx-auto w-full h-full">
                  <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="border-2-2 right-[90%] lg:right-[50%] border-[#C81470] rounded-[1%] absolute h-full border" />
                    <div className="border-2-2 border-yellow-555 absolute h-full border border-[#C81470] rounded-[1%] left-[10%] lg:left-[50%]" />
                    {experiences.map((experience, index) => (
                      <div
                        className={`mb-8 flex justify-between items-center w-full ${
                          index % 2 === 0 && "lg:flex-row-reverse"
                        }`}
                        key={index}
                      >
                        <div className="order-1 w-10 lg:w-5/12" />
                        <div
                          className={`order-1  ${
                            index % 2 !== 0
                              ? "text-left"
                              : "text-left lg:text-right"
                          } w-full lg:w-5/12 px-1 py-4`}
                        >
                          <p className="mb-3 text-base text-[#C81470]">
                            {experience.date}
                          </p>
                          <div
                            className={`mb-3 flex ${
                              index % 2 === 0
                                ? "flex-row lg:flex-row-reverse"
                                : "flex-row"
                            } items-center gap-5 font-bold text-lg md:text-2xl italic hover:underline cursor-pointer`}
                            onClick={() => {
                              window.open(experience.url, "_blank");
                            }}
                          >
                            <div className="w-14 h-14 rounded-full p-2 bg-white">
                              <img
                                src={experience.logo}
                                alt=""
                                className="w-full h-full object-contain rounded-full"
                              />
                            </div>
                            <span>{experience.company_name}</span>
                          </div>
                          <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                            {experience.cardDetailedText}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <img
                    className="mx-auto -mt-8 lg:-mt-16"
                    src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience