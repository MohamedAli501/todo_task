import React from "react";

const Language = () => {
  return (
    <div>
      <select
        title="Language switch"
        defaultValue="en"
        id=""
        className="w-[75px] px-1 outline-none rounded-sm bg-blue-600 border dark:bg-slate-600 text-white cursor-pointer"
      >
        <option className="" value="en">
          EN
        </option>
        <option className="" value="ar">
          AR
        </option>
      </select>
    </div>
  );
};

export default Language;
