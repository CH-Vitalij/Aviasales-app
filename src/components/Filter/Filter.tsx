interface PropTypes {
  filter: string;
}

const Filter = (props: PropTypes) => {
  return (
    <label className="filter__label">
      <input type="checkbox" className="filter__checkbox" />
      {props.filter}
    </label>
  );
};

export default Filter;
