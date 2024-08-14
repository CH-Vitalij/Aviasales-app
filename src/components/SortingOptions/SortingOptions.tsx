import { useAppDispatch } from "../../hooks/useAppDispatch";

import classes from "./SortingOptions.module.scss";

const SortingOptions = () => {
  const dispatch = useAppDispatch();

  return (
    <ul className={`${classes.aviasalesAppSortingOptions} ${classes.sortingOptions}`}>
      <li>
        <button
          className={`${classes.sortingOptionsItem} ${classes.sortingOptionsItemLeft} ${classes.sortingOptionsItemActive}`}
          onClick={() => dispatch({ type: "SORTING_PRICE", payload: "price" })}
        >
          САМЫЙ ДЕШЕВЫЙ
        </button>
      </li>
      <li>
        <button
          className={`${classes.sortingOptionsItem}`}
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
