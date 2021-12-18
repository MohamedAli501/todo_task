import React from "react";
import { FiPlusCircle } from "react-icons/fi";

const TaskForm = () => {
  return (
    <div className="container mt-6 flex justify-center">
      <form
        action=""
        className=" bg-gray-50 p-6 flex flex-col justify-center items-center border-2 rounded-md shadow-lg space-y-4 w-full md:w-2/3 "
      >
        <div className="w-full flex flex-col  space-y-2">
          <label
            htmlFor="task_name"
            className="text-xl font-bold text-gray-800"
          >
            Task name :{" "}
          </label>
          <input
            className="p-2 rounded-md shadow-xl border border-gray-400 outline-none bg-gray-200"
            type="text"
            id="task_name"
            placeholder="Enter task name ..."
          />
        </div>
        <div className="w-full space-y-2">
          <label
            htmlFor="task_description"
            className="text-xl font-bold text-gray-800"
          >
            Task description :{" "}
          </label>
          <div className="flex justify-between mb-20 shadow-xl border rounded-md border-gray-400 outline-none bg-gray-200 overflow-hidden">
            <input
              className=" w-full p-2 border-none outline-none bg-transparent"
              type="text"
              id="task_description"
              placeholder="Enter task description ..."
            />
            <span
              className=" p-2 text-2xl cursor-pointer bg-sky-700 text-white"
              title="Add more task"
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
