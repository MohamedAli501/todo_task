import React from "react";
import Darkmode from "./Darkmode";
import Language from "./Language";

const Navbar = () => {
  return (
    <header className=" bg-slate-400 shadow-xl">
      <div className="container py-6 flex justify-between items-center">
        <div className="uppercase">task todo</div>
        <nav className="flex items-center space-x-4">
          <Darkmode />
          <Language />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
