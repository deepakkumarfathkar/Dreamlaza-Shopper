import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Box, Text, Stack, Flex, Center, Button } from "@chakra-ui/react";

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  console.log("product:", product);
  const { productID } = useParams();
  console.log("productID:", productID);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/clothing/${productID}`
      );
      console.log("data:", data);
      setProduct(data);
    } catch (error) {}
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="section section-center">
        <h2>Loading...</h2>
      </section>
    );
  }

  const {
    title,
    desc,
    offer_price,
    original_price,
    brand,
    discount,
    image,
    category,
  } = product;

  return (
    <section className="section section-center">
      <Link to="/product" className="link">
        Back Products
      </Link>
      <div>
        <div className="title">
          <h2>{title}</h2>
          <div className="title-underline"></div>
        </div>
        <article className="single-product">
          <img className="single-product-img" src={image} alt={title} />
          <Stack direction={["column"]} spacing="24px">
            <Flex gap="2">
              <Text fontWeight="bold">Name:</Text>
              {title}
            </Flex>
            <Flex gap="2">
              <Text fontWeight="bold">Brand:</Text>
              {brand}
            </Flex>
            <Flex className="price" gap="2">
              <Text fontWeight="bold" textDecoration={"none"}>
                Price:
              </Text>
              <Text textDecoration={"line-through"} color="red">
                {original_price}
              </Text>
            </Flex>
            <Flex gap="2">
              <Text fontWeight="bold">Discount Price:</Text>
              <Text color={"green.500"} fontWeight="semibold">
                {offer_price}
              </Text>
              <Text color={"red"}>{discount}</Text>
            </Flex>
            <Flex gap="2">
              <Text fontWeight="bold">Category:</Text>
              {category}
            </Flex>
            <Flex gap="2">
              <Text fontWeight="bold">Description:</Text>
              {desc}
            </Flex>
            <Center>
              <Button
                bg="#645cff"
                color="whitesmoke"
                _hover={{
                  background: "#A8A3FF",
                  color: "#282466",
                }}
                size="lg"
              >
                <Link to="/cart">Add To Cart</Link>
              </Button>
            </Center>
          </Stack>
        </article>
      </div>
    </section>
  );
};

export default Product;
