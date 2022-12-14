import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Stack,
  FormHelperText,
  Button,
  Input,
  Center,
} from "@chakra-ui/react";

import { Select } from "@chakra-ui/react";

function AddProduct({ onAddProduct }) {
  const [formState, setFormState] = useState({
    title: "",
    brand: "",
    category: "",
    desc: "",
    price: "₹",
    original_price: "₹",
    offer_price: "₹",
    discount: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    const val = type === "number" ? Number(value) : value;

    setFormState({
      ...formState,
      [name]: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(formState);
  };

  return (
    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
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
            placeholder="Brand"
            value={formState.brand}
            onChange={handleChange}
          />
          {/* <FormLabel>Category</FormLabel> */}
          {/* <Input
          name="category"
          type="text"
          placeholder="Category"
          value={formState.category}
          onChange={handleChange}
        /> */}
          <FormLabel>Category</FormLabel>
          <Select
            placeholder="Select option"
            name="category"
            type="text"
            onChange={handleChange}
          >
            <option value="Womens">Womens</option>
            <option value="Mens">Mens</option>
          </Select>
          <FormLabel>Description</FormLabel>
          <Input
            name="desc"
            type="text"
            placeholder="desc"
            value={formState.desc}
            onChange={handleChange}
          />
          <FormLabel>Price</FormLabel>
          <Input
            name="price"
            type="text"
            placeholder="price"
            value={formState.price}
            onChange={handleChange}
          />
          <FormLabel>Original Price</FormLabel>
          <Input
            name="original_price"
            type="text"
            placeholder="Original Price"
            value={formState.original_price}
            onChange={handleChange}
          />
          <FormLabel>Offered Price</FormLabel>
          <Input
            name="offer_price"
            type="text"
            placeholder="Offered Price"
            value={formState.offer_price}
            onChange={handleChange}
          />
          <FormLabel>Discount</FormLabel>
          <Input
            name="discount"
            type="text"
            placeholder="Discount"
            value={formState.discount}
            onChange={handleChange}
          />
          <FormHelperText>Format: (20% off)</FormHelperText>
          <FormLabel>Image</FormLabel>
          <Input
            name="image"
            type="url"
            placeholder="Image URL"
            value={formState.image}
            onChange={handleChange}
          />
          <Center>
          <Button
            mt="10px"
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            type="submit"
          >
            Add Product
          </Button>
          </Center>
        </FormControl>
      </form>
    </Stack>
  );
}

export default AddProduct;
