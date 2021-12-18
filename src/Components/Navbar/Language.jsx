import React from "react";

const Language = () => {
  return (
    <div>
      <select
        defaultValue="en"
        id=""
        className="w-[75px] px-1 outline-none rounded-sm bg-gray-"
      >
        <option value="en">EN</option>
        <option value="ar">AR</option>
      </select>
    </div>
  );
};

export default Language;
