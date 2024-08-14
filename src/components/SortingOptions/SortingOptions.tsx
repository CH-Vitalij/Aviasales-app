import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

import classes from "./SortingOptions.module.scss";

const SortingOptions = () => {
  const { sortingBy } = useAppSelector((state) => state.sortingData);
  const dispatch = useAppDispatch();

  const classActive = `${classes.sortingOptionsItemActive}`;

  return (
    <ul className={`${classes.aviasalesAppSortingOptions} ${classes.sortingOptions}`}>
      <li>
        <button
          className={`${classes.sortingOptionsItem} ${classes.sortingOptionsItemLeft} ${
            sortingBy === "price" ? classActive : ""
          }`}
          onClick={() => dispatch({ type: "SORTING_PRICE", payload: "price" })}
        >
          САМЫЙ ДЕШЕВЫЙ
        </button>
      </li>
      <li>
        <button
          className={`${classes.sortingOptionsItem} ${sortingBy === "duration" ? classActive : ""}`}
          onClick={() => dispatch({ type: "SORTING_DURATION", payload: "duration" })}
        >
          САМЫЙ БЫСТРЫЙ
        </button>
      </li>
      <li>
        <button className={`${classes.sortingOptionsItem} ${classes.sortingOptionsItemRight}`}>
          ОПТИМАЛЬНЫЙ
        </button>
      </li>
    </ul>
  );
};

export default SortingOptions;
