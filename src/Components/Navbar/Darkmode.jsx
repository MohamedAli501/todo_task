import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import useDarkMode from "../../Controls/useDarkMode";

const Darkmode = () => {
  const [theme, setTheme] = useDarkMode();

  // Darkmode toggle
  const themeToggle = () => {
    setTheme(theme);
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  };

  return (
    <div>
      <div
        onClick={() => themeToggle()}
        className="px-2 py-2 w-[75px] h-[30px] border border-gray-300 rounded-full relative cursor-pointer "
        title="Light & Dark mode switch"
      >
        <FiMoon
          className={`d_mod ${
            theme === "light"
              ? "translate-x-10 rtl:-translate-x-10 rotate-[270deg] rtl:rotate-[-360deg] opacity-100 text-white"
              : "translate-x-0 opacity-0"
          }`}
        />
        <FiSun
          className={`d_mod text-yellow-500 ${
            theme === "dark"
              ? "translate-x-0 rotate-[-270deg] rtl:rotate-[270deg] opacity-100"
              : "translate-x-10 rtl:-translate-x-10 opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

export default Darkmode;
