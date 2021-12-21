import React from "react";
import Darkmode from "./Darkmode";
import Language from "./Language";

const Navbar = () => {
  return (
    <header className=" bg-blue-700 shadow-xl dark:bg-slate-800 text-slate-50">
      <div className="container py-6 flex justify-between items-center">
        <h1 className="uppercase font-bold text-2xl md:text-4xl tracking-widest text-slate-50 hover:text-slate-200">
          task todo
        </h1>
        <nav className="flex items-center space-x-4">
          <Darkmode />
          <Language />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
