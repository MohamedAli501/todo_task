import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { languages } from "../../Controls/language";
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
        className="p-2 text-2xl cursor-pointer"
        title={languages("Light & Dark mode switch", "تغيير الوضع")}
      >
        <FiMoon
          className={`d_mod ${
            theme === "light" ? "opacity-100 text-white" : "hidden opacity-0"
          }`}
        />
        <FiSun
          className={`d_mod text-yellow-500 ${
            theme === "dark" ? "" : "hidden opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

export default Darkmode;
