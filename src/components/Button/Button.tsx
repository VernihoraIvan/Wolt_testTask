import { useThemeContext } from "../../utilities/useModalContext";

interface ButtonProps {
  onClick: () => void;
}

function Button({ onClick }: ButtonProps) {
  const { lightTheme } = useThemeContext();
  let themeStyle: string = " bg-sky-400 hover:bg-sky-500	";
  if (!lightTheme) {
    themeStyle = "bg-buttonDark hover:bg-buttonDarkHov  ";
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className={` ${themeStyle} pr-3 pl-3 pt-1 pb-1 text-white    rounded-md   transition ease-in-out delay-250 active-sky-500 `}
    >
      Calculate delivery price
    </button>
  );
}

export default Button;
