import React from "react";
import BannerImage from "../assets/banner-image.png";
const Banner = ({ theme }) => {
  return (
    <div
      className={`flex justify-center ${
        theme === "light" ? "bg-white" : "bg-[#191919]"
      } items-center p-24 gap-10 h-screen w-full transition-all duration-500`}
    >
      <div
        className={`h-full flex justify-center gap-2 items-start flex-col font-extrabold w-full ${
          theme === "light" ? "text-[#42446E]" : "text-white"
        } text-4xl transition-all duration-500`}
      >
        <div>Hi👋,</div>
        <div>My name is</div>
        <div className="bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent">
          Aditya Surve
        </div>
        <div>I build things for web</div>
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <img src={BannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
