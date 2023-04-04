import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { CopyCatContainer } from "./CopyCatContainer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CopyCatContainer />
  </StrictMode>,
  rootElement
);
