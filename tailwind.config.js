/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "640px" },

        sm: { min: "640px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1200px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
      },
      spacing: {
        7: "1.5rem",
      },
      colors: {
        bluesp: "#0ea5e9",
        bgDarkTheme: "#1e293b",
        buttonDark: "#2f418a",
        buttonDarkHov: "#0f121b",
        inputDark: "#3c4155",
        darkSecondText: "#c2c8cf",
        iconDark: "#1e293b",
      },
    },
  },
  plugins: [],
};
