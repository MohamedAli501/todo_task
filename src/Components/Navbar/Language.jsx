import React from "react";

const Language = () => {
  return (
    <div className="flex items-center">
      <select
        title="Language switch"
        defaultValue="en"
        id=""
        className="px-1 md:px-3 outline-none rounded-sm bg-blue-600 border dark:bg-slate-600 text-white cursor-pointer"
      >
        <option value="en">EN</option>
        <option value="ar">AR</option>
      </select>
    </div>
  );
};

export default Language;
