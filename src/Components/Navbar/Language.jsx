import React from "react";
import { MdLanguage } from "react-icons/md";

const Language = () => {
  return (
    <div className="flex items-center">
      <MdLanguage className="text-2xl mx-2" />
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
