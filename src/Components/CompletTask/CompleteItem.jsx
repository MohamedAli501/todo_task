import React from "react";
import CompleteDescription from "./CompleteDescription";

const CompleteItem = ({ task }) => {
  const [completed, setCompleted] = React.useState(0);
  // Get description complete length
  React.useEffect(() => {
    const completeLength = task.task_description.filter(
      (comp) => comp.complete === true
    );

    setCompleted(completeLength.length);
  }, [task]);
  return (
    <table className="border-collapse border w-full border-gray-600 dark:bg-slate-300 mb-12 shadow-lg shadow-slate-600 dark:shadow-slate-500">
      <thead>
        <tr>
          <th>
            <div className="head_taskname flex justify-between">
              <div className="flex items-center">
                <span className="text-sm font-normal normal-case">Name : </span>{" "}
                <h2 className="mx-2 text-center capitalize text-slate-200 dark:text-yellow-500 text-sm md:text-lg">
                  {" "}
                  {task.task_name}
                </h2>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-normal normal-case">
                  Created :{" "}
                </span>{" "}
                <h2 className="mx-2 text-center capitalize text-slate-200 dark:text-yellow-500 text-sm md:text-lg">
                  {" "}
                  {task.task_Date}
                </h2>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <table className="border-collapse w-full ">
              <thead>
                <tr className="bg-slate-300 dark:bg-slate-600 dark:text-slate-100">
                  <th className="table-border dark:border-slate-300 border text-center w-20">
                    Number
                  </th>

                  <th className="table-border dark:border-slate-300 border">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {task.task_description.map((ti, i) => (
                  <CompleteDescription
                    tItem={ti}
                    id={task.task_id}
                    index={i}
                    key={i}
                  />
                ))}
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>
            <div className="foot_taskname flex justify-center">
              {" "}
              <span className="text-sm md:text-lg font-normal normal-case">
                Complete :{" "}
              </span>{" "}
              <h4 className="ml-2 rtl:mr-2 capitalize text-slate-800 dark:text-slate-100 text-lg font-normal">
                {" "}
                <span className="text-slate-100 dark:text-cyan-500">
                  {" "}
                  {completed}
                </span>{" "}
                from{" "}
                <span className="text-slate-50 dark:text-yellow-500">
                  {task.task_description.length}
                </span>
              </h4>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CompleteItem;
