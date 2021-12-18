import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const Darkmode = () => {
  const [modToggle, setModToggle] = React.useState(false);

  return (
    <div>
      <div
        onClick={() => setModToggle(!modToggle)}
        className="px-2 py-2 w-[75px] h-[30px] border border-gray-500 rounded-full relative cursor-pointer "
      >
        <FiMoon
          className={`d_mod ${
            modToggle
              ? "translate-x-10 rotate-[270deg] opacity-100 text-white"
              : "translate-x-0 opacity-0"
          }`}
        />
        <FiSun
          className={`d_mod text-gray-800 ${
            !modToggle
              ? "translate-x-0 rotate-[-270deg] opacity-100"
              : "translate-x-10 opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

export default Darkmode;
