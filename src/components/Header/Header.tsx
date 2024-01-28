/// <reference types="vite-plugin-svgr/client" />

import { NavLink } from "react-router-dom";
import WoltLogo from "../../assets/images/woltlogo.svg?react";
import { useThemeContext } from "../../utilities/useModalContext";

function Header() {
  const { lightTheme } = useThemeContext();
  let themeStyle: string = " bg-white";
  if (!lightTheme) {
    themeStyle = "bg-bgDarkTheme";
  }
  return (
    <header
      className={`shadow-xl ${themeStyle} w-full z-1 h-[10vh] flex items-center`}
    >
      <NavLink to="https://wolt.com/en/discovery">
        <WoltLogo className="h-14 w-14 ml-5 align-middle" />
      </NavLink>
    </header>
  );
}

export default Header;
