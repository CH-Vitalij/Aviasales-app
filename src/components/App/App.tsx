import Filters from "../Filters";
import SortingOptions from "../SortingOptions";
import TicketsList from "../TicketList";

import classes from "./App.module.scss";
import { useCallback, useEffect, useRef } from "react";
import { useSearchId } from "../../hooks/useSearchId";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Flex, Spin } from "antd";

const App = () => {
  const { loading, error } = useAppSelector((state) => state.searchId);
  const { checkedFilters } = useAppSelector((state) => state.filter);
  const { fetchSearchIdData } = useSearchId();

  const fetchSearchId = useCallback(
    (ignore: boolean) => fetchSearchIdData(ignore),
    [fetchSearchIdData],
  );

  const ignore = useRef(false);

  useEffect(() => {
    fetchSearchId(ignore.current);

    return () => {
      ignore.current = true;
    };
  }, [fetchSearchId]);

  if (loading) {
    return (
      <Flex justify="center" align="center">
        <Spin size="large" />
      </Flex>
    );
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <section className={`${classes.pageAviasalesApp} ${classes.aviasalesApp}`}>
      <div className={classes.aviasalesAppBody}>
        <div className={classes.aviasalesAppLogo}>
          <img src="/src/assets/img/Logo.svg" alt="aviasales-logo" />
        </div>
        <div className={classes.aviasalesAppContainer1}>
          <Filters />
          <div className={classes.aviasalesAppContainer2}>
            <SortingOptions />
            <TicketsList />
            {checkedFilters.length ? (
              <button className={classes.aviasalesAppBtn}>ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!</button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
