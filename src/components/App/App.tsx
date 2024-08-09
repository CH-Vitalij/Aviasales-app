import { Provider } from "react-redux";
import { store } from "../../store/index";

import Filters from "../Filters";
import SortingOptions from "../SortingOptions";
import Tickets from "../Tickets";

import classes from "./App.module.scss";

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
            </div>
          </div>
        </div>
      </section>
    </Provider>
  );
};

export default App;
