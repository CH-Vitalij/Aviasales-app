import { FilterPropTypes } from "../../types/filter";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { filter } from "../../store/action-creator/filter";

const Filter = (props: FilterPropTypes) => {
  const { text, checked, id } = props;

  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(filter(id));
  };

  return (
    <label className="filter__label">
      <input
        type="checkbox"
        className="filter__checkbox"
        onChange={handleChange}
        checked={checked}
      />
      {text}
    </label>
  );
};

export default Filter;
