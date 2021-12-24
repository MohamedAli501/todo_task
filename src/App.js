import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content";
import Footer from "./Components/Footer/Footer";
import { useDispatch } from "react-redux";
import { loadTaskList } from "./store/sliceList";

function App() {
  const [addToLocal, setAddToLocal] = React.useState(false);
  const [reload, setReload] = React.useState(false);
  const [tasks] = React.useState(localStorage.getItem("tasks"));

  const dispatch = useDispatch();

  // Check if localstorage have tasks item
  React.useEffect(() => {
    if (tasks && !reload) {
      dispatch(loadTaskList(JSON.parse(tasks)));
      setReload(true);
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
      <div className="font-body  dark:bg-slate-700">
        <Navbar />

        <Content addToLocal={setAddToLocal} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
