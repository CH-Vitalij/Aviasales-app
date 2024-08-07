import SortingOption from "../SortingOption";
import classes from "./SortingOptions.module.scss";

const SortingOptions = () => {
  return (
    <ul className={`${classes.aviasalesAppTabs} ${classes.tabs}`}>
      <SortingOption />
    </ul>
  );
};

export default SortingOptions;
