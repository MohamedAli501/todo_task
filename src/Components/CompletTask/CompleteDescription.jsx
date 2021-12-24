import React from "react";

const CompleteDescription = ({ tItem, index }) => {
  return (
    <>
      <tr>
        <td className="table-border bg-gray-100 dark:bg-slate-400 border text-center">
          {index + 1}
        </td>

        <td
          className={`${
            !tItem.complete && "text-red-600"
          } table-border bg-gray-100 dark:bg-slate-400 border`}
          title={tItem.desription}
        >
          {tItem.desription}
        </td>
      </tr>
    </>
  );
};

export default CompleteDescription;
