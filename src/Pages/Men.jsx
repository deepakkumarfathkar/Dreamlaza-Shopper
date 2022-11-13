import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Center, Button, Text } from "@chakra-ui/react";

const url = "http://localhost:8080/clothing?category=Mens";

const Men = () => {
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
    <section className="section section-center">
      <div className="title">
        <h2>Men</h2>
        <div className="title-underline"></div>
      </div>
      <div className="products">
        {products.map((product) => {
          const { id, image, price, title } = product;
          return (
            <Link to={`/${id}`} className="product" key={id}>
              <img src={image} alt={title} />
              <div className="info">
                <h5>{title}</h5>
                <h5 className="price">{price}</h5>
              </div>
              <Center>
                <Button
                  bg="#645cff"
                  color="whitesmoke"
                  _hover={{
                    background: "#A8A3FF",
                    color: "#282466",
                  }}
                >
                  <Link to="/cart">Add To Cart</Link>
                </Button>
              </Center>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Men;
