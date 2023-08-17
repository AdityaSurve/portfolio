import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ThemeToggler from "./components/ThemeToggler";
import Skills from "./components/Skills";

const App = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    console.log(activeLink);
  }, [activeLink]);
  return (
    <div className="font-pops w-screen">
      <Navbar
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        theme={theme}
      />
      <Banner theme={theme} />
      <Skills theme={theme} />
      <ThemeToggler theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
