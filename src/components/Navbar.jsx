import React from "react";
import { navbarLinks } from "../data";
import { socialMediaLinks } from "../data";

const Navbar = ({ activeLink, setActiveLink, theme }) => {
  return (
    <div className="flex justify-between font-dmsans px-10 items-center bg-transparent backdrop-blur-md h-16 w-full fixed top-0 left-0">
      <div className="flex flex-col font-bold bg-gradient-to-r from-[#00C0FD] to-[#E70FAA] bg-clip-text text-transparent text-left">
        <div>Aditya Surve</div>
      </div>
      <div className="flex items-center justify-center gap-2">
        {navbarLinks.map((link) => (
          <button
            key={link.path}
            onClick={() => setActiveLink(link.title)}
            className={`px-4 py-2 transition-all duration-500 rounded-lg ${
              theme === "light" ? "hover:bg-gray-100" : "hover:bg-[#ffffff10]"
            } ${
              activeLink === link.title
                ? theme === "light"
                  ? "text-[#333] bg-gray-100"
                  : "text-white bg-[#ffffff10]"
                : theme === "light"
                ? "text-[#666]"
                : "text-white"
            } text-sm`}
          >
            {link.title}
          </button>
        ))}
      </div>
      <div className="flex gap-4">
        {socialMediaLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            className="rounded-full hover:ring-4 transition-all duration-500 hover:ring-gray-100 bg-gray-50 h-6 w-6 flex items-center justify-center"
          >
            <img
              src={link.icon}
              alt={link.name}
              className="h-full w-full object-cover"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
