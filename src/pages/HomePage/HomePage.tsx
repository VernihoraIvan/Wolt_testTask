// import React from "react";
import ThemeIcon from "../../assets/images/theme.svg?react";
// import { useThemeContext } from "../../utilities/useModalContext";
// import { ThemeProvider } from "../../utilities/themeContext";
import CalculatorModalWindow from "../../components/CalculatorModalWindow/CalculatorModalWindow";
// import { useState } from "react";
import { useThemeContext } from "../../utilities/useModalContext";

function HomePage() {
  // const [lightTheme, setLightTheme] = useState(true);

  // const toggleTheme = () => {
  //   setLightTheme(!lightTheme);
  // };

  // if (!lightTheme) {
  //   themeStyle = "bg-slate-700	text-slate-200";
  // }

  /////////////////////////////
  const { lightTheme, toggleTheme } = useThemeContext();
  let themeStyle: string = " bg-white";
  if (!lightTheme) {
    themeStyle = "bg-slate-700	text-slate-200";
  }
  console.log(themeStyle);

  return (
    <section
      className={`dark:bg-gray-800 dark:border-gray-700 pt-10 h-[90vh] bg-cover
        ${lightTheme && 'bg-[url("/src/assets/images/background.jpg")]'} ${
        !lightTheme && 'bg-[url("/src/assets/images/background-dark.jpg")]'
      } `}
    >
      <div
        className="w-8 h-8 bg-bluesp cursor-pointer absolute top-7 right-5 flex justify-center items-center rounded-lg"
        onClick={toggleTheme}
      >
        <ThemeIcon className="w-5 h-5" />
      </div>
      <CalculatorModalWindow />
    </section>
  );
}

export default HomePage;
