import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { Box, Button, Flex, Spacer, Text,Image } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const url = "/api/products";
const Home = () => {
  const [products, setProducts] = useState([]);
  console.log("products:", products);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      setProducts(data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box mt="50px">
      <Flex>
        <Text fontWeight="extrabold" fontSize="2xl" color="black" ml="50px">
          Deals You'll Love
        </Text>
        <Spacer />
        <Button
          bg="white"
          variant="outline"
          colorScheme="black"
          color="grey"
          mr="50px"
        >
          View All Products
        </Button>
      </Flex>
      <br />
      <Carousel infiniteLoop>
      {products.map((product) => {
          const { url } = product;
          return <Image src={url} height="600px" width="800px" />
        })}
    </Carousel>
    </Box>
  );
};

export default Home;
