import { useEffect, useState } from "react";

const useDarkMode = () => {
  let localTheme;
  if (localStorage.theme !== undefined) {
    localTheme = localStorage.theme;
  } else {
    localStorage.theme = "light";
    localTheme = localStorage.theme;
  }

  const [theme, setTheme] = useState(localTheme);

  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};

export default useDarkMode;
