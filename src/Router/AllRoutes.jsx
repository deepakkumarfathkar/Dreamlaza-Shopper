import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "../Pages/Product";
import Airtable from "../Pages/Airtable";
import Home from "../Pages/Home";
import Products from "../AdminPanel/Products";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Airtable />}></Route>
        <Route path="/:productID" element={<Product />}></Route>
        <Route path="products" element={<Products />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
