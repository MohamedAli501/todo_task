import React from "react";
import { Link, NavLink } from "react-router-dom";
import Darkmode from "./Darkmode";
import Language from "./Language";

const Navbar = () => {
  const [reset, setReset] = React.useState(false);

  const resetList = () => {
    if (reset) {
      localStorage.removeItem("tasks");
      window.location.reload();
    }
  };

  return (
    <header>
      <div className=" bg-blue-700 shadow-xl dark:bg-slate-800 text-slate-50">
        <div className="container py-6 flex justify-between items-center">
          <Link to="/">
            <h1 className="uppercase font-bold text-2xl md:text-4xl tracking-widest text-slate-50 hover:text-slate-200">
              task todo
            </h1>
          </Link>
          <nav className="flex items-center space-x-4">
            <div className="px-1 flex justify-between items-center bg-blue-700 hover:bg-blue-600 border border-slate-200 text-white dark:bg-slate-600 dark:hover:bg-slate-700 rounded-md shadow-md">
              <input
                type="checkbox"
                name="reset"
                id=""
                onChange={() => setReset(!reset)}
              />
              <button
                onClick={() => resetList()}
                className="px-2 bg-transparent uppercase font-semibold"
              >
                {" "}
                Reset
              </button>
            </div>
            <Darkmode />
            <Language />
          </nav>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <ul className="nav-links text-center">
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
