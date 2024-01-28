import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { useThemeContext } from "../../utilities/useModalContext";

function Layout() {
  const { lightTheme } = useThemeContext();
  let themeStyle: string = " bg-white";
  if (!lightTheme) {
    themeStyle = "bg-slate-700	text-slate-400";
  }

  return (
    <>
      <main className={`h-screen ${themeStyle} overflow-y-hidden`}>
        <Header />
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
