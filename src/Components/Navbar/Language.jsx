import React from "react";

const Language = () => {
  return (
    <div>
      <select
        defaultValue="en"
        id=""
        className="w-[75px] px-1 outline-none rounded-sm bg-blue-600 border text-white"
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
