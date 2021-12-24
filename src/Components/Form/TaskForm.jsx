/*eslint-disable*/
import React from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addTask } from "../../store/sliceList";
import Description from "./Description";

const TaskForm = ({ addOk }) => {
  const currentDate = new Date().toLocaleString();

  let options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  const taskId = nanoid(10);

  const dispatch = useDispatch();

  const [desriptionCount, setDesriptionCount] = React.useState(1);

  const [taskName, setTaskName] = React.useState("");

  const [values, setValues] = React.useState([
    { desription: "", complete: false },
  ]);

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
      taskInputName.current.nextElementSibling.className =
        "text-red-500 dark:text-red-400 block";
      taskInputName.current.focus();
      return;
    } else {
      taskInputName.current.className = "task_name border-gray-400";
      taskInputName.current.nextElementSibling.className =
        "text-red-500 hidden";
    }

    // Description input validate
    for (let x = 0; x < values.length; x++) {
      let inputEle = document.querySelectorAll(".input_length");
      let descriptionError = document.querySelector("#description_filld");
      if (values[x].desription.length < 10 || !values[x].desription.trim()) {
        inputEle[x].className = "input_length border-red-600";
        descriptionError.className = "text-red-500 dark:text-red-600 block";
        inputEle[x].focus();
        return;
      } else {
        descriptionError.className = "text-red-500 dark:text-red-600 hidden";
        inputEle[x].className = "input_length";
      }
    }
    dispatch(
      addTask({
        task_id: taskId,
        task_name: taskName,
        task_description: values,
        task_Date: currentDate,
        task_complete: false,
      })
    );

    addOk(true);

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
      if (values[x].desription.length < 10 || !values[x].desription.trim())
        return;
    }

    setValues((old) => [...old, { desription: "", complete: false }]);
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
      <form className="form-style bg-white dark:text-slate-800 dark:bg-slate-500 dark:border-slate-700 ">
        <div className="w-full flex flex-col  space-y-2">
          <label
            htmlFor="task_name"
            className="text-xl font-normal text-gray-800 dark:text-white"
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
            title="Task name input"
            autoComplete="off"
          />
          <small className="text-red-500 hidden">
            Task name mast be 5 characters or more..
          </small>
        </div>
        <div className="w-full space-y-2">
          <label
            htmlFor="task_description"
            className="text-xl font-normal text-gray-800 dark:text-white"
          >
            Task description :{" "}
          </label>
          <div className="flex justify-between items-start py-4 mb-20 shadow-xl border rounded-md border-slate-200  outline-none bg-gray-100 overflow-hidden dark:bg-slate-400 dark:border-slate-500">
            <Description
              inputCount={desriptionCount}
              addDescription={addDescription}
            />

            <span
              className=" p-2 text-2xl cursor-pointer  text-sky-700 hover:text-sky-800 dark:text-white dark:hover:text-slate-200"
              title="Add more task"
              onClick={() => addInput()}
            >
              <BsPlusCircleDotted />
            </span>
          </div>
        </div>
        <button
          className="bg-blue-700 hover:bg-blue-600 text-white dark:bg-slate-600 dark:hover:bg-slate-700 w-1/2 py-2 uppercase font-semibold rounded-md shadow-md"
          title="Add new task"
          onClick={(e) => submitForm(e)}
        >
          {" "}
          Add Task{" "}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
