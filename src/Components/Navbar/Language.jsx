import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkLanguage, languages } from "../../Controls/language";
import { changeLanguage } from "../../store/langSlice";

const Language = () => {
  const currntLang = document.documentElement;
  const dispatch = useDispatch();

  // console.log(currntLang);

  const changeLang = (e) => {
    dispatch(changeLanguage(e.target.value));
    currntLang.lang = e.target.value;
    checkLanguage(currntLang.lang);
  };

  return (
    <div className="flex items-center">
      <select
        title={languages("Language switch", "تغيير اللغة")}
        value={currntLang.lang}
        id=""
        className="px-1 md:px-3 outline-none rounded-sm bg-blue-600 border dark:bg-slate-600 text-white cursor-pointer"
        onChange={(e) => changeLang(e)}
      >
        <option value="en">EN</option>
        <option value="ar">AR</option>
      </select>
    </div>
  );
};

export default Language;
