import React from "react";
import ReactDOM from "react-dom";

const source = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className = "h" >My Favourite Foods</h1>
   <p> jreforufioer</p>
   <img alt = "random img" src = {source}/>
  </div>,
  document.getElementById("root")
);
// we may put class "h" in a CSS

// you may use html global attributes
// like contentEditable or spellCheck.....
// unlike class in html, we use className in jsx
