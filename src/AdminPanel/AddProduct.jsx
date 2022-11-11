import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
} from "@chakra-ui/react";

function AddProduct({ onAddProduct }) {
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
    onAddProduct(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired>
      <FormLabel>Title</FormLabel>
      <Input
        name="title"
        type="text"
        placeholder="Title"
        value={formState.title}
        onChange={handleChange}
      />
      <FormLabel>Brand</FormLabel>
      <Input
          name="brand"
          type="text"
          placeholder="brand"
          value={formState.brand}
          onChange={handleChange}
        />
        <FormLabel>Category</FormLabel>
        <Input
          name="category"
          type="text"
          placeholder="category"
          value={formState.category}
          onChange={handleChange}
        />
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </FormControl>
    </form>
  );
}

export default AddProduct;
