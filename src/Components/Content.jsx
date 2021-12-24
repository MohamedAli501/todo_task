import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const TaskForm = lazy(() => import("./Form/TaskForm"));
const Tasks = lazy(() => import("./TaskList/Tasks"));
const CompleteTask = lazy(() => import("./CompletTask/CompleteTask"));

const Content = ({ addToLocal }) => {
  return (
    <div className="content_h flex justify-center items-start my-6">
      <Suspense
        fallback={
          <div className="text-slate-700 dark:text-slate-50 text-3xl">
            Loading ....
          </div>
        }
      >
        <Routes>
          <Route exact path="/" element={<Tasks />} />
          <Route path="/add_task" element={<TaskForm addOk={addToLocal} />} />
          <Route path="/complet_task" element={<CompleteTask />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Content;
