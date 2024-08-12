import { Provider } from "react-redux";
import { store } from "../../store/index";

import Filters from "../Filters";
import SortingOptions from "../SortingOptions";
import Tickets from "../Tickets";

import classes from "./App.module.scss";
// import { createContext, FC, useEffect, useState } from "react";
// import AviasalesService from "../../service/aviasales-service";

// const CustomContext = createContext();

// const SearchId: FC = ({ children }) => {
//   const [searchId, setSearchId] = useState(null);

//   useEffect(() => {
//     const obj = new AviasalesService();
//     obj.getSearchId().then((id) => setSearchId(id));
//   }, []);

//   return <CustomContext.Provider value={searchId}>{children}</CustomContext.Provider>;
// };

const App = () => {
  return (
    <Provider store={store}>
      <section className={`${classes.pageAviasalesApp} ${classes.aviasalesApp}`}>
        <div className={classes.aviasalesAppBody}>
          <div className={classes.aviasalesAppLogo}>
            <img src="./src/img/Logo.svg" alt="aviasales-logo" />
          </div>
          <div className={classes.aviasalesAppContainer1}>
            <Filters />
            <div className={classes.aviasalesAppContainer2}>
              <SortingOptions />
              <Tickets />
              <button className={classes.aviasalesAppBtn}>ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!</button>
            </div>
          </div>
        </div>
      </section>
    </Provider>
  );
};

export default App;
