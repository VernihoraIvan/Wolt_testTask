/// <reference types="vite-plugin-svgr/client" />

import { NavLink } from "react-router-dom";
import WoltLogo from "../../assets/images/woltlogo.svg?react";

function Header() {
  return (
    <header className="shadow-xl bg-white w-full z-1 h-[10vh] flex items-center">
      <NavLink to="https://wolt.com/en/discovery">
        <WoltLogo className="h-14 w-14 ml-5 align-middle" />
      </NavLink>
    </header>
  );
}

export default Header;
