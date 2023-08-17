import React from "react";

const ThemeToggler = ({ theme, setTheme }) => {
  return (
    <div className="fixed bottom-5 right-5">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="rounded-full h-12 w-12 flex justify-center items-center bg-gray-100"
      >
        {theme}
      </button>
    </div>
  );
};

export default ThemeToggler;
