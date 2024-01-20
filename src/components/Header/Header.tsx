/// <reference types="vite-plugin-svgr/client" />

import { NavLink } from "react-router-dom";
import WoltLogo from "../../assets/images/WoltLogoVector.svg?react";

function Header() {
  return (
    <div>
      <header className="shadow-xl">
        <NavLink to="/">
          <WoltLogo className="h-14 w-14 ml-5" />
        </NavLink>
      </header>
    </div>
  );
}

export default Header;
