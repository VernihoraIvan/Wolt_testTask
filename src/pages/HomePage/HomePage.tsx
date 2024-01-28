import ThemeIcon from "../../assets/images/theme.svg?react";
import CalculatorModalWindow from "../../components/CalculatorModalWindow/CalculatorModalWindow";
import { useThemeContext } from "../../utilities/useModalContext";

function HomePage() {
  const { lightTheme, toggleTheme } = useThemeContext();
  let sectionStyle: string = " bg-white";
  let buttonStyle: string = "bg-sky-400 hover:bg-sky-500";
  if (!lightTheme) {
    sectionStyle = "bg-slate-700	text-slate-400";
    buttonStyle = "bg-buttonDark hover:bg-buttonDarkHov fill-white";
  }
  console.log(sectionStyle);

  return (
    <section
      className={`  pt-10 h-[90vh] bg-cover
        ${lightTheme && 'bg-[url("/src/assets/images/background.jpg")]'} ${
        !lightTheme && 'bg-[url("/src/assets/images/background-dark.jpg")]'
      } `}
    >
      <div
        className={`w-8 h-8 ${buttonStyle}  cursor-pointer absolute top-7 right-5 flex justify-center items-center rounded-lg`}
        onClick={toggleTheme}
      >
        <ThemeIcon className="w-5 h-5 " />
      </div>
      <CalculatorModalWindow />
    </section>
  );
}

export default HomePage;
