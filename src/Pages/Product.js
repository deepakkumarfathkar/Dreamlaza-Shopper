import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  console.log('product:', product)
  const { productID } = useParams();
  console.log('productID:', productID)

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8080/clothing/${productID}`);
      console.log('data:', data)
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

  const { title, desc, price, image } = product;
  console.log('price:', price)

  return (
    <section className="section section-center">
      <Link to="/" className="link">
        Back Products
      </Link>
      <div>
        <div className="title">
          <h2>{title}</h2>
          <div className="title-underline"></div>
        </div>
        <article className="single-product">
          <img className="single-product-img" src={image} alt={title} />
          <div>
            <h5>{title}</h5>
            <h5 className="price">${price}</h5>
            <p>{desc}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Product;