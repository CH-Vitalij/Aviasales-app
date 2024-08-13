import Filters from "../Filters";
import SortingOptions from "../SortingOptions";
import TicketsList from "../Tickets";

import classes from "./App.module.scss";
import { useCallback, useEffect, useRef } from "react";
import { useSearchId } from "../../hooks/useSearchId";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Flex, Spin } from "antd";

const App = () => {
  const { loading, error } = useAppSelector((state) => state.searchId);
  const { fetchSearchIdData } = useSearchId();

  const fetchSearchId = useCallback(
    (ignore: boolean) => fetchSearchIdData(ignore),
    [fetchSearchIdData],
  );

  const ignore = useRef(false);

  useEffect(() => {
    console.log("Effect S");

    fetchSearchId(ignore.current);

    return () => {
      console.log('clean S');
      
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
    return <h1>{error}</h1>;
  }

  return (
    <section className={`${classes.pageAviasalesApp} ${classes.aviasalesApp}`}>
      <div className={classes.aviasalesAppBody}>
        <div className={classes.aviasalesAppLogo}>
          <img src="./src/img/Logo.svg" alt="aviasales-logo" />
        </div>
        <div className={classes.aviasalesAppContainer1}>
          <Filters />
          <div className={classes.aviasalesAppContainer2}>
            <SortingOptions />
            <TicketsList />
            <button className={classes.aviasalesAppBtn}>ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
