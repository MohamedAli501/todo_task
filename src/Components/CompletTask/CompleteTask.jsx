import React from "react";
import { useSelector } from "react-redux";
import CompleteItem from "./CompleteItem";

const CompleteTask = () => {
  const tasks = useSelector((state) => state.taskList);
  return (
    <div className="container mt-4 p-4 border">
      <h1 className="p-4 text-center text-2xl font-bold dark:text-slate-100">
        Complete Tasks
      </h1>
      {tasks.length <= 0 ? (
        <h2 className="text-center font-bold text-3xl dark:text-slate-500">
          {" "}
          No task completed ....
        </h2>
      ) : (
        tasks
          .filter((ts) => ts.task_complete === true)
          .map((task, i) => <CompleteItem task={task} key={i} />)
      )}
    </div>
  );
};

export default CompleteTask;
