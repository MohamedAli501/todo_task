import React from "react";
import { useDispatch } from "react-redux";
import { completedescription } from "../../store/sliceList";

const TaskItemDescription = ({ tItem, index, id }) => {
  const [complet, setComplet] = React.useState(tItem.complete);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(
      completedescription({ id, descIndex: index, checkComplete: complet })
    );
  }, [complet]);

  return (
    <>
      <tr>
        <td className="table-border bg-gray-100 dark:bg-slate-400 border text-center">
          {index + 1}
        </td>
        <td className="table-border bg-gray-100 dark:bg-slate-400 border text-center">
          <input
            type="checkbox"
            name=""
            id=""
            checked={complet}
            onChange={() => setComplet(!complet)}
          />
        </td>
        <td
          className={`${
            complet && "line-through decoration-violet-600 "
          } table-border bg-gray-100 dark:bg-slate-400 border`}
          title={tItem.desription}
        >
          {tItem.desription}
        </td>
      </tr>
    </>
  );
};

export default TaskItemDescription;
