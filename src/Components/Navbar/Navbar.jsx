import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaDatabase } from "react-icons/fa";
import { GoArrowDown } from "react-icons/go";
import Darkmode from "./Darkmode";
import Language from "./Language";

const Navbar = () => {
  const [reset, setReset] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const resetList = () => {
    if (reset) {
      localStorage.removeItem("tasks");
      window.location.reload();
    }
  };

  return (
    <header>
      <div className=" bg-blue-700 shadow-xl dark:bg-slate-800 text-slate-50 z-30">
        <div className="container py-6 flex justify-between items-center ">
          <Link to="/">
            <h1 className="uppercase font-bold text-xl md:text-4xl tracking-widest text-slate-50 hover:text-slate-200">
              task todo
            </h1>
          </Link>
          <nav className="flex justify-center items-center space-x-1 md:space-x-4">
            <div
              className="p-1 flex justify-between items-center hover:bg-blue-600  text-white  dark:hover:bg-slate-700 rounded-md shadow-md"
              title="Reset data"
            >
              <input
                type="checkbox"
                name="reset"
                id=""
                onChange={() => setReset(!reset)}
              />
              <button
                onClick={() => resetList()}
                className="bg-transparent uppercase font-semibold"
              >
                {" "}
                <FaDatabase className="text-xl md:text-2xl mx-2" />
              </button>
            </div>

            <Darkmode />
            <Language />
          </nav>
        </div>
      </div>
      <div className="w-full flex justify-center relative overflow-hidden">
        <span
          title="Link menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className={`text-xl animate-bounce text-slate-50 absolute left-1/2 z-30 md:hidden transform cursor-pointer ${
            menuOpen ? "rotate-180 bottom-0" : "bottom-16 rotate-0"
          }`}
        >
          <GoArrowDown className={`${menuOpen && "rotate-180"}`} />
        </span>
        <ul
          className={`nav-links text-center transform  md:translate-y-0 ${
            menuOpen ? "translate-y-0" : "-translate-y-16"
          }`}
        >
          <li className="py-1 px-4 text-slate-50">
            <NavLink active="true" to="/">
              Tasks
            </NavLink>
          </li>
          <li className="py-1 px-4 text-slate-50">
            <NavLink to="/complet_task">Complete Task</NavLink>
          </li>
          <li className="py-1 px-4 text-slate-50">
            <NavLink to="/add_task">Add Task</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
