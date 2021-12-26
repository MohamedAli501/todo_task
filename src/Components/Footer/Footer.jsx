import React from "react";
import { ArabicNumbers, languages } from "../../Controls/language";

const Footer = () => {
  return (
    <footer className="bg-blue-500  dark:bg-slate-800 text-white h-20 flex justify-center items-center">
      <p className="text-sm md:xl">
        {languages(
          "All copyright &copy; reserved by Hamada Mohamed 2021",
          ` جميع حقوق النشر محفوظة بواسطة حمادة محمد ${ArabicNumbers(2021)} `
        )}
      </p>
    </footer>
  );
};

export default Footer;
