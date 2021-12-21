import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content";
import Footer from "./Components/Footer/Footer";

function App() {
  React.useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.className = "dark";
    } else {
      document.documentElement.className = "light";
    }
  }, []);

  return (
    <div className="font-body  dark:bg-slate-700">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
