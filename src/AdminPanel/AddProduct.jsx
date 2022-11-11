import { useState } from "react";

function AddProduct({ onAddCity }) {
  const [formState, setFormState] = useState({
    title: "",
    brand: "",
    category: ""
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    const val = type === "number" ? Number(value) : value;

    setFormState({
      ...formState,
      [name]: val
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCity(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={formState.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          name="brand"
          type="text"
          placeholder="brand"
          value={formState.brand}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          name="category"
          type="text"
          placeholder="category"
          value={formState.category}
          onChange={handleChange}
        />
      </div>
      <input type="submit" value="SUBMIT FORM" />
    </form>
  );
}

export default AddProduct;
