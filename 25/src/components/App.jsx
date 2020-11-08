import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeading(name);

    // the preventdefault would prevent to do the next action that is refreshing the page...
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      {/* a form by default refreshes the pages .. hence instead we are targeting it back to the function onclick button... */}
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
