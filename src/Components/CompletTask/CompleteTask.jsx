import React from "react";
import { useSelector } from "react-redux";
import { languages } from "../../Controls/language";
import CompleteItem from "./CompleteItem";

const CompleteTask = () => {
  const tasks = useSelector((state) => state.taskList);
  return (
    <div className="container mt-4 p-4 border">
      <h1 className="p-4 text-center text-lg md:text-2xl font-bold dark:text-slate-100">
        {languages("Complete Tasks", "المهمات اللتى تم تنفيذها")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-6">
        {tasks.length <= 0 ? (
          <h2 className="text-center font-bold text-3xl dark:text-slate-500">
            {" "}
            {languages(
              " No task completed ....",
              "لا توجد مهمات تم تنفيذها ..."
            )}
          </h2>
        ) : (
          tasks
            .filter((ts) => ts.task_complete === true)
            .map((task, i) => <CompleteItem task={task} key={i} />)
        )}
      </div>
    </div>
  );
};

export default CompleteTask;
