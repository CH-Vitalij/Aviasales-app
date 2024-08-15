import { useAppSelector } from "../../hooks/useAppSelector";
import { useSorting } from "../../hooks/useSorting";

import classes from "./SortingOptions.module.scss";

const SortingOptions = () => {
  const { dataSorting } = useAppSelector((state) => state.sortingData);
  const { sortingAction } = useSorting();

  const classActive = `${classes.sortingOptionsItemActive}`;

  const elements = dataSorting.map((el) => {
    return (
      <li key={el.id}>
        <button
          className={`${classes.sortingOptionsItem} ${classes.sortingOptionsItemLeft} ${
            el.active ? classActive : ""
          }`}
          onClick={() => sortingAction(el.sortingBy, el.id)}
        >
          {el.sortingBy}
        </button>
      </li>
    );
  });

  return (
    <ul className={`${classes.aviasalesAppSortingOptions} ${classes.sortingOptions}`}>
      {elements}
    </ul>
  );
};

export default SortingOptions;
