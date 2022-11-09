import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "../Pages/Product";
import Airtable from "../Pages/Airtable";
import Home from "../Pages/Home";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/airtable" element={<Airtable />}></Route>
        <Route path="/:productID" element={<Product />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
