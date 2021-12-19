import React from "react";

const Description = ({ inputCount, addDescription }) => {
  return (
    <div className="w-full flex justify-between flex-col items-center">
      {Array(inputCount)
        .fill("")
        .map((el, i) => (
          <div
            key={i}
            className="w-full flex justify-between items-center pl-2 mb-2 relative bg-slate-100"
          >
            <span>{i + 1}-</span>
            <input
              autoComplete="off"
              count={i}
              className={`input_length`}
              type="text"
              id="task_description"
              placeholder="Enter task description ..."
              onChange={(e) => {
                addDescription(e, i);
              }}
            />
          </div>
        ))}
    </div>
  );
};

export default Description;
