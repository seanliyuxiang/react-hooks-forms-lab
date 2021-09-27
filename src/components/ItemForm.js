import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ items, onItemFormSubmit }) {
// console.log(Array.isArray(props.items));
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce"
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate an unique id
      name: formData.name,
      category: formData.category
    };
    
    onItemFormSubmit([...items, newItem]);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={formData.name} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
