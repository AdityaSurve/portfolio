import React, { useState, useRef } from "react";
import { tech } from "../constants";
import { Tooltip } from "react-tooltip";

const TechCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const visibleItems = tech.slice(currentIndex, currentIndex + 7);

  const handleNext = () => {
    if (currentIndex + 1 <= tech.length - 7) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full px-20 py-10 flex justify-center items-center">
      <div className="flex gap-2 items-center" ref={carouselRef}>
        {visibleItems.map((t) => (
          <div
            className="h-16 w-16 rounded-full p-4 bg-[#ffffff40]"
            key={t.id}
          >
            <div className="item-content">
              <div className="item-image">
                <img src={t.icon} alt={t.name} />
              </div>
              <Tooltip
                id={t.name}
                place="bottom"
                effect="solid"
                delayShow={100}
                delayHide={100}
                className="z-[1000]"
              />
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button left" onClick={handlePrev}>
        &#8249;
      </button>
      <button className="carousel-button right" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default TechCarousel;
