import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "../Pages/Product";
import Airtable from "../Pages/Airtable";
import Home from "../Pages/Home";
import Products from "../AdminPanel/Products";
import Login from "../AdminPanel/Login";
import PrivateRoute from "./PrivateRoute"
import ULogin from "../Pages/ULogin"

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Airtable />}></Route>
        <Route path="/:productID" element={<Product />}></Route>
        <Route path="/addproducts" element={<PrivateRoute><Products /></PrivateRoute>}></Route>
        <Route path="/adminlogin" element={<Login />}></Route>
        <Route path="/userlogin" element={<ULogin />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
