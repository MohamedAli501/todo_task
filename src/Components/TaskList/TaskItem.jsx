import React from "react";
import { useDispatch } from "react-redux";
import TaskItemDescription from "./TaskItemDescription";
import { MdOutlineDoneOutline, MdDeleteOutline } from "react-icons/md";
import { deleteTask, doneTask } from "../../store/sliceList";
import {
  ArabicDateTime,
  ArabicNumber,
  languages,
} from "../../Controls/language";

const TaskItem = ({ task, comp, dele }) => {
  const [completed, setCompleted] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const [deleted, setDeleted] = React.useState(false);

  const dispatch = useDispatch();

  console.log(task);

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
      dele(true);
      setTimeout(() => {
        dele(false);
      }, 1500);
      setDeleted(false);
    }
  };

  // Done task
  const taskDone = () => {
    if (done) {
      dispatch(doneTask(task.task_id));
      comp(true);
      setTimeout(() => {
        comp(false);
      }, 1500);
      setDone(false);
    }
  };

  return (
    <table className="border-collapse border w-full border-gray-600 dark:bg-slate-300 mb-12 shadow-lg shadow-slate-600 dark:shadow-slate-500">
      <thead>
        <tr>
          <th>
            <div className="head_taskname flex justify-between">
              <div className="flex items-center">
                <span className="text-[10px] md:text-sm font-normal normal-case">
                  {languages("Name ", "الأسم ")}
                </span>{" "}
                <h2 className="mx-2 text-center capitalize text-slate-200 dark:text-yellow-500 text-[10px] md:text-sm break-all">
                  {" "}
                  {task.task_name}
                </h2>
              </div>
              <div className="flex items-center">
                <span className="text-[10px] md:text-sm font-normal normal-case">
                  {languages("Created ", "إنشاء ")}
                </span>{" "}
                <h2 className="mx-2 text-center  capitalize text-slate-200 dark:text-yellow-500 text-[10px] md:text-sm break-all">
                  {" "}
                  {languages(task.task_Date, ArabicDateTime(task.task_Date))}
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
                  <th className="table-border dark:border-slate-300 border text-[10px] md:text-sm text-center w-20">
                    {languages("Number", "رقم")}
                  </th>
                  <th className="table-border dark:border-slate-300 border text-[10px] md:text-sm text-center w-20">
                    {languages("Done", "مكتمل")}
                  </th>
                  <th className="table-border dark:border-slate-300 border text-[10px] md:text-sm">
                    {languages("Description", "وصـــف المهمـة")}
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
                      <div
                        className="control-btn hover:text-cyan-500 "
                        title={languages("done", "إنهاء المهمة")}
                      >
                        <input
                          type="checkbox"
                          name="done"
                          id="done"
                          checked={done}
                          className="indeterminate:bg-gray-300"
                          onChange={() => setDone(!done)}
                        />
                        <button
                          onClick={() => taskDone()}
                          className="flex justify-center items-center px-2 md:px-4 capitalize"
                        >
                          {" "}
                          <MdOutlineDoneOutline className="mx-1" />{" "}
                          {languages("done", "إنهاء المهمة")}
                        </button>
                      </div>
                      <div
                        className="control-btn hover:text-red-500"
                        title={languages("delete", "حذف المهمة")}
                      >
                        <button
                          onClick={() => taskDelete()}
                          className="flex justify-center items-center px-2 md:px-4 capitalize"
                        >
                          {" "}
                          <MdDeleteOutline className="mx-1 " />{" "}
                          {languages("delete", "حذف المهمة")}
                        </button>
                        <input
                          type="checkbox"
                          name="delete"
                          checked={deleted}
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
              <span className="text-sm md:text-lg font-normal normal-case">
                {languages("Complete : ", "تم تنفيذ : ")}{" "}
              </span>{" "}
              <h4 className="ml-2 rtl:mr-2 capitalize text-slate-800 dark:text-slate-100 text-sm md:text-lg font-normal">
                {" "}
                <span className="text-slate-100 dark:text-cyan-500 mx-2">
                  {" "}
                  {languages(completed, ArabicNumber(completed))}
                </span>{" "}
                {languages("from", " من ")}
                <span className="text-slate-50 dark:text-yellow-500 mx-2">
                  {languages(
                    task.task_description.length,
                    ArabicNumber(task.task_description.length)
                  )}
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
