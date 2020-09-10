import React from "react";
import ReactDOM from "react-dom";

const name = "Suraj";
const num = 5;

ReactDOM.render(
  <div>
    <h1> Hello {name}! </h1>
    <p>I am working on a project {name + "'s " + num + "th one"}</p>
  </div>,
  document.getElementById("root")
); // curly braces {} is used inside div in render
// you can add any js expression inside {} but not any js statements
// like...if-else....
