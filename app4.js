import React from "react";
import ReactDOM from "react-dom";

const name = "Suraj";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>By {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
