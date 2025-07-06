import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "sk2tch/utils/reportWebVitals";

import "./style.scss";
import Games from "./gamesShowcase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Games />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
