import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { RecoilRoot } from "recoil";
import Form from "./Form";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <RecoilRoot>
      <Form />
    </RecoilRoot>
  </StrictMode>,
  rootElement
);
