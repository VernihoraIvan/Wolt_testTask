import ThemeIcon from "../../assets/images/theme.svg?react";
import CalculatorModalWindow from "../../components/CalculatorModalWindow/CalculatorModalWindow";
import { useThemeContext } from "../../utilities/useModalContext";

function HomePage() {
  const { lightTheme, toggleTheme } = useThemeContext();
  let sectionStyle: string = 'bg-[url("/src/assets/images/background.jpg")]';
  let buttonStyle: string = "bg-sky-400 hover:bg-sky-500 fill-iconDark";
  if (!lightTheme) {
    sectionStyle = 'bg-[url("/src/assets/images/background-dark1.jpg")]';
    buttonStyle = "bg-buttonDark hover:bg-buttonDarkHov fill-darkSecondText";
  }

  return (
    <section className={`  py-10 bg-cover ${sectionStyle}`}>
      <div
        className={` w-8 h-8 ${buttonStyle}  cursor-pointer absolute xs:top-1 top-7 right-5 flex justify-center items-center rounded-lg`}
        onClick={toggleTheme}
      >
        <ThemeIcon className="w-5 h-5 " />
      </div>
      <CalculatorModalWindow />
    </section>
  );
}

export default HomePage;
