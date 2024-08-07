import { FilterPropTypes } from "../../types/filter";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { filter } from "../../store/action-creator/filter";
import classes from "./Filter.module.scss";

const Filter = (props: FilterPropTypes) => {
  const { text, checked, id } = props;

  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(filter(id));
  };

  return (
    <label className={classes.filterLabel}>
      <input
        type="checkbox"
        className={classes.filterCheckbox}
        onChange={handleChange}
        checked={checked}
      />
      {text}
    </label>
  );
};

export default Filter;
