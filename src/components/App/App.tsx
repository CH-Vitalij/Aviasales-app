import Filters from "../Filters";
import SortingOptions from "../SortingOptions";
import Tickets from "../Tickets";
import { store } from "../../store/index";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <section className="page__aviasales-app aviasales-app">
        <div className="aviasales-app__body">
          <div className="aviasales-app__logo">
            <img src="./src/img/Logo.svg" alt="aviasales-logo" />
          </div>
          <div className="aviasales-app__container-1">
            <Filters />
            <div className="aviasales-app__container-2">
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
