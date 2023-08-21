const { animate } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        card: "url('/src/assets/cardbg.jpg')",
      },
      boxShadow: {
        card: "0 10px 20px rgba(0,0,0,0,2)",
      },
      keyframes: {
        "scroll": {
          "0%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(calc(-100%/6 * 6))" },
          "80%": { transform: "translateX(calc(-100%/6 * 6))" },
          "100%": { transform: "translateX(0)" },
        }
      },
      animation: {
        "scroll": "scroll 20s linear infinite",
      }
    },
  },
  plugins: [],
};
