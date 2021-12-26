import React from "react";
import { ArabicNumber, languages } from "../../Controls/language";

const Description = ({ inputCount, addDescription }) => {
  return (
    <div className="w-full flex justify-between flex-col items-center">
      {Array(inputCount)
        .fill("")
        .map((el, i) => (
          <div
            key={i}
            className="w-full flex justify-between items-center px-2 mb-2 relative bg-slate-100 dark:bg-slate-400"
          >
            <span className="font-bold dark:text-white">
              {languages(i + 1, ArabicNumber(i + 1))}-
            </span>
            <input
              autoComplete="off"
              count={i}
              className={`input_length`}
              type="text"
              id="task_description"
              placeholder={languages(
                "Enter task description ...",
                "أضف وصف جديد ..."
              )}
              onChange={(e) => {
                addDescription(e, i);
              }}
              // title= {`Task description number ${i + 1}`}
              title={languages(
                `Task description number ${i + 1}`,
                `وصف المهمة رقم ${ArabicNumber(i + 1)}`
              )}
            />
          </div>
        ))}
      <small
        id="description_filld"
        className="text-red-500 text-sm dark:text-red-600 hidden"
      >
        {languages(
          "Description inputs mast be 10 characters or more...",
          "الوصف يجب أن لا يقل عن 10 أحرف ...."
        )}
      </small>
    </div>
  );
};

export default Description;
