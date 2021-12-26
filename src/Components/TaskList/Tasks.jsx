import React from "react";
import TaskItem from "./TaskItem";

import { useSelector } from "react-redux";
import { languages } from "../../Controls/language";

const Tasks = () => {
  const tasks = useSelector((state) => state.taskList);

  const [completed, setCompleted] = React.useState(false);
  const [deleted, setDeleted] = React.useState(false);

  return (
    <div className="container mt-4 p-4 border relative">
      <div
        className={`alert top-44 md:top-36 transition duration-150  bg-cyan-400 text-cyan-900 ring-cyan-500 border-cyan-500 ${
          completed ? "block" : "hidden"
        } `}
      >
        {languages(
          "Task has been completed ...",
          "... تهانينا تم تنفيذ المهمة بنجاح"
        )}
      </div>
      <div
        className={`alert top-44 md:top-36 transition duration-150  bg-red-300 text-red-900 ring-red-400 border-red-400 ${
          deleted ? "block" : "hidden"
        } `}
      >
        {languages("Task has been deleted ...", "... تم حذف المهمة")}
      </div>
      <h1 className="p-4 text-center text-lg md:text-2xl font-bold dark:text-slate-100">
        {languages("Task List", "قائمة المهمات")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tasks.length <= 0 ? (
          <h2 className="text-center font-bold text-3xl dark:text-slate-500">
            {" "}
            {languages("No task ....", "لا توجد مهمات ...")}
          </h2>
        ) : (
          tasks
            .filter((ts) => ts.task_complete === false)
            .map((task, i) => (
              <TaskItem
                task={task}
                key={i}
                comp={setCompleted}
                dele={setDeleted}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default Tasks;
