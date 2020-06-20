import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
function App() {
  const [categories, setCategories] = useState([]);

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  return (
    <div className="App">
      <h2>Gifs App</h2>
      <AddCategory addCategory={addCategory} />
      <hr />
      <ol>
        {categories.map((category, i) => (
          <li key={i}>{category}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
