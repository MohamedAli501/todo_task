import React from "react";
import { ArabicNumber, languages } from "../../Controls/language";

const CompleteDescription = ({ tItem, index }) => {
  return (
    <>
      <tr>
        <td className="table-border text-[10px] md:text-sm bg-gray-100 dark:bg-slate-400 border text-center">
          {languages(index + 1, ArabicNumber(index + 1))}
        </td>

        <td
          className={`${
            !tItem.complete && "text-red-600"
          } table-border bg-gray-100 dark:bg-slate-400 border text-[10px] md:text-sm break-all`}
          title={tItem.desription}
        >
          {tItem.desription}
        </td>
      </tr>
    </>
  );
};

export default CompleteDescription;
