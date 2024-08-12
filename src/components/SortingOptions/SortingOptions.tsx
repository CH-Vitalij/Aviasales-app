import classes from "./SortingOptions.module.scss";

const SortingOptions = () => {
  return (
    <ul className={`${classes.aviasalesAppSortingOptions} ${classes.sortingOptions}`}>
      <li>
        <button
          className={`${classes.sortingOptionsItem} ${classes.sortingOptionsItemLeft} ${classes.sortingOptionsItemActive}`}
        >
          САМЫЙ ДЕШЕВЫЙ
        </button>
      </li>
      <li>
        <button className={`${classes.sortingOptionsItem}`}>САМЫЙ БЫСТРЫЙ</button>
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
