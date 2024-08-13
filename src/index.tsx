import "./styles/index.scss";
import App from "./components/App";

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import { Provider } from "react-redux";
import { store } from "./store";

createRoot(document.querySelector(".page__container")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
