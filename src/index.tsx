import "./styles/index.scss";
import App from "./components/App";

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

createRoot(document.querySelector(".page__container")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
