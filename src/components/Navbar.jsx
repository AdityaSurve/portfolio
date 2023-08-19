import React, { useState } from "react";
import { navbarLinks } from "../data";
import { socialMediaLinks } from "../data";

const Navbar = ({ activeLink, setActiveLink, theme }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div
      className={`flex justify-between font-dmsans px-10 ${
        theme === "light" ? "bg-white" : "bg-[#191919]"
      } items-center h-16 w-full fixed top-0 left-0`}
    >
      <div className="flex flex-col font-bold bg-gradient-to-r from-[#00C0FD] to-[#E70FAA] bg-clip-text text-transparent text-left">
        <div>Aditya Surve</div>
      </div>
      <div className="hidden lg:flex items-center justify-center gap-2">
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
      <div className="hidden lg:flex gap-4">
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
      <div
        className={`lg:hidden ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        {navbarOpen ? (
          <button
            className="text-2xl"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        ) : (
          <button
            className="text-2xl"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        )}
      </div>
      <div
        className={`${
          navbarOpen ? "flex" : "hidden"
        } flex-col absolute top-16 left-0 w-full ${
          theme === "light" ? `bg-gray-50` : `bg-[#191919]`
        } shadow-lg rounded-lg p-4 gap-4 lg:hidden`}
      >
        {navbarLinks.map((link) => (
          <button
            key={link.path}
            onClick={() => {
              setActiveLink(link.title);
              setNavbarOpen(false);
            }}
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
    </div>
  );
};

export default Navbar;
