import React from "react";
import ReactDOM from "react-dom";

function Card_to_display(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}
// with react props we can replace repetitive & long code with it......

// NOTE: we can see that the tag in ReactDom.render is the function ... imported directly instead of separate jsx
// ALSO FOLLOW THE NAMING CONVENTIONS!!!

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card_to_display
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card_to_display
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+7387384587"
      email="jack@nowhere.com"
    />
  </div>,
  document.getElementById("root")
);
