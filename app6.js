import React from "react";
import ReactDOM from "react-dom";

const style = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};
// you can also update the prop
// unlike css & html.....

style.color = "blue";

ReactDOM.render(
  <h1 style={style}>Hello World!</h1>,
  document.getElementById("root")
);
