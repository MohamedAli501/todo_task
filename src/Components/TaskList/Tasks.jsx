import React from "react";
import TaskItem from "./TaskItem";

import { useSelector } from "react-redux";

const Tasks = () => {
  const tasks = useSelector((state) => state.taskList);

  return (
    <div className="container mt-4 p-4 border">
      <h1 className="p-4 text-center text-2xl font-bold dark:text-slate-100">
        Task List
      </h1>
      {tasks.length <= 0 ? (
        <h2 className="text-center font-bold text-3xl dark:text-slate-500">
          {" "}
          No task ....
        </h2>
      ) : (
        tasks
          .filter((ts) => ts.task_complete === false)
          .map((task, i) => <TaskItem task={task} key={i} />)
      )}
    </div>
  );
};

export default Tasks;
