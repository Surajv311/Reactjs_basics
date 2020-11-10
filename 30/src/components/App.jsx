import React, { useState } from "react";

function App() {
  // initially the input text is an empty string
  const [inputText, setInputText] = useState("");
  // initially the items is an empty []
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    // so setItems is changing the state of items aka adding the items from input text to the array since : const [items, setItems] = useState([]);
    setItems((prevItems) => {
      // adds the input text into the array that holds previous items
      // using spread operator...
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
