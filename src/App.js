import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import TaskForm from "./Components/Form/TaskForm";

function App() {
  return (
    <div className="font-body">
      <Navbar />
      <TaskForm />
    </div>
  );
}

export default App;
