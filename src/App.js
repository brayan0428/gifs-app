import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

function App() {
  const [categories, setCategories] = useState([]);

  const addCategory = (category) => {
    setCategories([category, ...categories]);
  };

  return (
    <div className="App">
      <h2>Gifs App</h2>
      <AddCategory addCategory={addCategory} />
      <hr />
      {categories.map((category) => (
        <GifGrid key={category.id} category={category.name} />
      ))}
    </div>
  );
}

export default App;
