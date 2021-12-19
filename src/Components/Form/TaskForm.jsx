import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import Description from "./Description";

const TaskForm = () => {
  const [desriptionCount, setDesriptionCount] = React.useState(1);

  const [taskName, setTaskName] = React.useState("");

  const [values, setValues] = React.useState([{ desription: "" }]);

  // Focus new description input
  React.useEffect(() => {
    let nextEle = document.querySelectorAll(".input_length");
    nextEle[desriptionCount - 1].focus();
  }, [desriptionCount]);

  const taskInputName = React.useRef();

  // Dispatch form value
  const submitForm = (e) => {
    e.preventDefault();

    // Task name validate
    if (!taskName.trim() || taskName.length < 5) {
      taskInputName.current.className = "task_name border-red-600";
      return;
    } else {
      taskInputName.current.className = "task_name border-gray-400";
    }

    // Description input validate
    for (let x = 0; x < values.length; x++) {
      let inputEle = document.querySelectorAll(".input_length");
      if (values[x].desription.length <= 5 || !values[x].desription.trim()) {
        inputEle[x].className = "input_length border-red-600";
        return;
      } else {
        inputEle[x].className = "input_length";
      }
    }

    setDesriptionCount(1);
    setTaskName("");
    setValues([{ desription: "" }]);
    document.querySelectorAll(".input_length")[0].value = "";
    taskInputName.current.value = "";
    taskInputName.current.focus();
  };

  // Add new description input
  const addInput = () => {
    for (let x = 0; x < values.length; x++) {
      if (values[x].desription.length <= 5 || !values[x].desription.trim())
        return;
    }

    setValues((old) => [...old, { desription: "" }]);
    setDesriptionCount(desriptionCount + 1);
  };

  // Add task name value
  const addTaskName = (e) => {
    setTaskName(e.target.value);
  };

  // Add description values
  const addDescription = (e, index) => {
    let updateValue = [...values, (values[index].desription = e.target.value)];
    setValues(updateValue.filter((el) => typeof el === "object"));
  };

  return (
    <div className="container mt-6 flex justify-center">
      <form onSubmit={(e) => submitForm(e)} className=" form-style ">
        <div className="w-full flex flex-col  space-y-2">
          <label
            htmlFor="task_name"
            className="text-xl font-normal text-gray-800"
          >
            Task name :{" "}
          </label>
          <input
            className="task_name"
            type="text"
            id="task_name"
            placeholder="Enter task name ..."
            onChange={(e) => addTaskName(e)}
            ref={taskInputName}
          />
        </div>
        <div className="w-full space-y-2">
          <label
            htmlFor="task_description"
            className="text-xl font-normal text-gray-800"
          >
            Task description :{" "}
          </label>
          <div className="flex justify-between items-start py-4 mb-20 shadow-xl border rounded-md border-gray-400 outline-none bg-gray-100 overflow-hidden">
            <Description
              inputCount={desriptionCount}
              addDescription={addDescription}
            />

            <span
              className=" p-2 text-2xl cursor-pointer bg-sky-700 text-white"
              title="Add more task"
              onClick={() => addInput()}
            >
              <FiPlusCircle />
            </span>
          </div>
        </div>
        <button className="bg-green-700 text-white w-1/2 py-2 uppercase font-semibold rounded-md shadow-md">
          {" "}
          Add Task{" "}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
