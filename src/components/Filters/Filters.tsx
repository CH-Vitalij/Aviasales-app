import { useAppSelector } from "../../hooks/useAppSelector";
import Filter from "../Filter/Filter";
import classes from "./Filters.module.scss";

const Filters = () => {
  const { filters } = useAppSelector((state) => state.filter);

  const elements = filters.map((filter) => {
    return (
      <li key={filter.id} className={classes.filterListItem}>
        <Filter {...filter} />
      </li>
    );
  });

  return (
    <div className={`${classes.aviasalesAppFilter} ${classes.filter}`}>
      <p className={classes.filterText}>Количество пересадок</p>
      <ul className={classes.filterList}>{elements}</ul>
    </div>
  );
};

export default Filters;
