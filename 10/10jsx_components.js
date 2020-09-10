import React from "react";
import ReactDOM from "react-dom";
import pi , {fun1 , fun2} from "math.js";

ReactDOM.render(<div>
<ul>
<li> {pi} </li>
<li> {fun1()} </li>
<li> {fun2()} </li>
</ul>
</div>, document.getElementById("root"));

// OR SIMILAR TO :

// NOTE: IT IS NOT RECOMMENDED
// 
// import * as all from "math.js";
// ReactDOM.render(<div>
// <ul>
// <li> {all.default} </li>
// <li> {all.fun1()} </li>
// <li> {all.fun2()} </li>
// </ul>
// </div>, document.getElementById("root"));
