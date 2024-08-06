import { useAppSelector } from "../../hooks/useAppSelector";
import Filter from "../Filter/Filter";

const Filters = () => {
  const { filters } = useAppSelector((state) => state.filter);

  const elements = filters.map((filter) => {
    return (
      <li key={filter.id} className="filter__list-item">
        <Filter {...filter} />
      </li>
    );
  });

  return (
    <div className="aviasales-app__filter filter">
      <p className="filter__text">Количество пересадок</p>
      <ul className="filter__list">{elements}</ul>
    </div>
  );
};

export default Filters;
