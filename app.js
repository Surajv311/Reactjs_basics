// var React = require("react") ;
// var ReactDOM = require("react-dom");

// [ OR ANOTHER WAY IS :]

import React from "react";
import ReactDOM from "react-dom";

// takes two inputs
//ReactDOM.render(WHAT TO SHOW ,  WHERE TO SHOW IT) ;
// to render one element
ReactDOM.render(<h1> showing</h1>, document.getElementById("root"));
// hence without writing html we have used DOM to input an <h1>
// react works on these jsx files ... files we have in html -> in js files
// babel is js compiler

// TO RENDER MORE THAN ONE ELEMENT WE CAN USE DIV
ReactDOM.render(
  <div>
    <h1> Hello</h1>
    <p> this is working</p>
  </div>,
  document.getElementById("root")
);
