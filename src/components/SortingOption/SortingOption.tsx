import classes from "./SortingOption.module.scss";

const SortingOption = () => {
  return (
    <>
      <li className={`${classes.tabsTab} ${classes.tabsTabLeft} ${classes.tabsTabActive}`}>
        САМЫЙ ДЕШЕВЫЙ
      </li>
      <li className={classes.tabsTab}>САМЫЙ БЫСТРЫЙ</li>
      <li className={`${classes.tabsTab} ${classes.tabsTabRight}`}>ОПТИМАЛЬНЫЙ</li>
    </>
  );
};

export default SortingOption;
