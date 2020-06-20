import React, { useState } from "react";
import PropTypes from "prop-types";
export const AddCategory = ({ addCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length === 0) {
      return;
    }
    addCategory(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputValue} />
    </form>
  );
};

AddCategory.propTypes = {
  addCategory: PropTypes.func.isRequired,
};
