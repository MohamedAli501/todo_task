import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="font-body  dark:bg-slate-700">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
