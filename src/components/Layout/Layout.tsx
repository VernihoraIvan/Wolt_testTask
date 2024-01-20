// import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function Layout() {
  return (
    <>
      <main className=" h-screen">
        <Header />
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
