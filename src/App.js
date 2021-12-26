/* eslint-disable*/
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content";
import Footer from "./Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { loadTaskList } from "./store/sliceList";
import { changeLanguage } from "./store/langSlice";
import { checkLanguage } from "./Controls/language";

function App() {
  const [addToLocal, setAddToLocal] = React.useState(false);
  const [reload, setReload] = React.useState(false);
  const [tasks] = React.useState(localStorage.getItem("tasks"));
  const [lang] = React.useState(localStorage.getItem("lang"));

  const getLang = useSelector((state) => state.language.lang);
  const dispatch = useDispatch();

  // Check if localstorage have tasks item
  React.useEffect(() => {
    if (tasks && !reload) {
      dispatch(loadTaskList(JSON.parse(tasks)));
      setReload(true);
    }
  }, []);

  // Check if localstorage have langeuage
  React.useEffect(() => {
    if (lang) {
      dispatch(changeLanguage(lang));
      document.documentElement.lang = lang;
      checkLanguage(lang);
    }
  }, []);

  // Load theme
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
    <Router>
      <div className="font-body rtl:font-arabic dark:bg-slate-700">
        <Navbar />

        <Content addToLocal={setAddToLocal} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
