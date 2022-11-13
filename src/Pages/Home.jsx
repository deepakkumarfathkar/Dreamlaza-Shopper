import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LogoIcon from "../Components/LogoIcon";
import Banner from "../Components/Banner";
import BelowBanner from "../Components/BelowBanner";
import { Carousel } from "react-responsive-carousel";
import {
  Box,
  Button,
  Flex,
  Spacer,
  Text,
  Image,
  Grid,
  Container,
  Center,
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NewsLetter from "../Components/NewsLetter";
import ReactCardCarousel from "react-card-carousel";
import MyCarousel from "../Components/MyCarousel";
import BannerCarousel from "../Components/BannerCarousel";

const url = "http://localhost:8080/clothing";
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
      <LogoIcon />
      <Banner />
      <BelowBanner />
      <Flex mt="50px">
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
          <Link to="/product">View All Products</Link>
        </Button>
      </Flex>
      <br />
      <Box>
        <MyCarousel />
      </Box>
      <br />
      <Box>
        <BannerCarousel />
      </Box>
      <br />
      <NewsLetter />
      <br />
    </Box>
  );
};

export default Home;
