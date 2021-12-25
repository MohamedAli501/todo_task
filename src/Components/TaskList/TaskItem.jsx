import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskItemDescription from "./TaskItemDescription";
import { MdOutlineDoneOutline, MdDeleteOutline } from "react-icons/md";
import { deleteTask, doneTask } from "../../store/sliceList";

const TaskItem = ({ task }) => {
  const [completed, setCompleted] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const [deleted, setDeleted] = React.useState(false);

  const loasTasks = useSelector((state) => state.taskList);
  const dispatch = useDispatch();

  // Get description complete length
  React.useEffect(() => {
    const completeLength = task.task_description.filter(
      (len) => len.complete === true
    );

    setCompleted(completeLength.length);
  }, [task]);

  // Delete task
  const taskDelete = () => {
    if (deleted) {
      dispatch(deleteTask(task.task_id));
    }
  };

  // Done task
  const taskDone = () => {
    if (done) {
      dispatch(doneTask(task.task_id));
    }
  };

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
                <h2 className="mx-2 text-center  capitalize text-slate-200 dark:text-yellow-500 text-sm md:text-lg">
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
                  <th className="table-border dark:border-slate-300 border text-center w-20">
                    Done
                  </th>
                  <th className="table-border dark:border-slate-300 border">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {task.task_description.map((ti, i) => (
                  <TaskItemDescription
                    tItem={ti}
                    id={task.task_id}
                    index={i}
                    key={i}
                  />
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3} className="p-2">
                    <div className="flex justify-center items-center space-x-6">
                      <div className="control-btn hover:text-cyan-500 ">
                        <input
                          type="checkbox"
                          name="done"
                          id="done"
                          className="indeterminate:bg-gray-300"
                          onChange={() => setDone(!done)}
                        />
                        <button
                          onClick={() => taskDone()}
                          className="flex justify-center items-center px-4 capitalize"
                        >
                          {" "}
                          <MdOutlineDoneOutline className="mx-2" /> done
                        </button>
                      </div>
                      <div className="control-btn hover:text-red-500">
                        <button
                          onClick={() => taskDelete()}
                          className="flex justify-center items-center px-4 capitalize"
                        >
                          {" "}
                          <MdDeleteOutline className="mx-2 " /> delete
                        </button>
                        <input
                          type="checkbox"
                          name="delete"
                          id="delete"
                          onChange={() => setDeleted(!deleted)}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              </tfoot>
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

export default TaskItem;
