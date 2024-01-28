/// <reference types="vite-plugin-svgr/client" />

import { NavLink } from "react-router-dom";
import WoltLogo from "../../assets/images/woltlogo.svg?react";
import { useThemeContext } from "../../utilities/useModalContext";

function Header() {
  const { lightTheme } = useThemeContext();
  let headerStyle: string = " bg-white";
  let iconStyle: string = "h-14 w-14 ml-5 align-middle  fill-black ";
  if (!lightTheme) {
    headerStyle = "bg-bgDarkTheme  ";
    iconStyle = "h-14 w-14 ml-5 align-middle fill-slate-400";
  }
  return (
    <header
      className={`absolute   ${headerStyle} w-full z-1 h-[10vh] flex items-center`}
    >
      <NavLink to="https://wolt.com/en/discovery">
        <WoltLogo className={iconStyle} />
      </NavLink>
    </header>
  );
}

export default Header;
