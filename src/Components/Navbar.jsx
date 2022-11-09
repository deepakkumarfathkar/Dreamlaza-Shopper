import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const links = [
    { path: "/", title: "Home" },
    { path: "/airtable", title: "Products" },
  ];
  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      {/* <Link to="/">Home</Link>
      <Link to="/products">Products</Link> */}

      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) => {
            return isActive ? styles.active : styles.default;
          }}
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;