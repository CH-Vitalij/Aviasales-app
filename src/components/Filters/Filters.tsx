import Filter from "../Filter/Filter";

interface FilterTypes {
  text: string;
  id: string;
}

const Filters = () => {
  const filters: FilterTypes[] = [
    { text: "Все", id: crypto.randomUUID() },
    { text: "Без пересадок", id: crypto.randomUUID() },
    { text: "1 пересадка", id: crypto.randomUUID() },
    { text: "2 пересадки", id: crypto.randomUUID() },
    { text: "3 пересадки", id: crypto.randomUUID() },
  ];

  const elements = filters.map((filter) => {
    return (
      <li key={filter.id} className="filter__list-item">
        <Filter filter={filter.text} />
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
