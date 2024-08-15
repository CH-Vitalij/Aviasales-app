import { useAppSelector } from "../../hooks/useAppSelector";
import classes from "./Filters.module.scss";
import "./FilterAnt.scss";

import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";
import { useFilter } from "../../hooks/useFilter";

const CheckboxGroup = Checkbox.Group;

const Filters: React.FC = () => {
  const filters = ["Без пересадок", "1 пересадка", "2 пересадки", "3 пересадки"];
  const { checkedFilters } = useAppSelector((state) => state.filter);

  const { filterAction } = useFilter();

  const checkAll = filters.length === checkedFilters.length;

  const onChange = (list: string[]) => {
    filterAction(list);
  };

  const onCheckAllChange: CheckboxProps["onChange"] = (e) => {
    filterAction(e.target.checked ? filters : []);
  };

  return (
    <div className={`${classes.aviasalesAppFilter} ${classes.filter}`}>
      <p className={classes.filterText}>Количество пересадок</p>
      <Checkbox onChange={onCheckAllChange} checked={checkAll}>
        Все
      </Checkbox>
      <CheckboxGroup options={filters} value={checkedFilters} onChange={onChange} />
    </div>
  );
};

export default Filters;
