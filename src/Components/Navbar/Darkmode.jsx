import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import useDarkMode from "../../Controls/useDarkMode";

const Darkmode = () => {
  const [theme, setTheme] = useDarkMode();

  return (
    <div>
      <div
        onClick={() => setTheme(theme)}
        className="px-2 py-2 w-[75px] h-[30px] border border-gray-300 rounded-full relative cursor-pointer "
        title="Light & Dark mode switch"
      >
        <FiMoon
          className={`d_mod ${
            theme === "light"
              ? "translate-x-10 rotate-[270deg] opacity-100 text-white"
              : "translate-x-0 opacity-0"
          }`}
        />
        <FiSun
          className={`d_mod text-yellow-500 ${
            theme === "dark"
              ? "translate-x-0 rotate-[-270deg] opacity-100"
              : "translate-x-10 opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

export default Darkmode;
