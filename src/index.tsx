import "./styles/index.scss";
import App from "./components/App";

import { createRoot } from "react-dom/client";

createRoot(document.querySelector(".page__container")!).render(<App />);
