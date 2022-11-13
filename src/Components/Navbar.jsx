import React from "react";
import { Text,Box,Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const links = [
    { path: "/", title: "Home" },
    { path: "/product", title: "Products" },
    { path: "/addproducts", title: "Add Products" },
  ];
  return (
    <Flex w="100%">
        <Text w="14%" fontSize="4xl" fontWeight="extrabold" color="black">
          DREAMLAZA
        </Text>
    <Box
    w="86%"
      style={{
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "10px",
      }}
    >

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
    </Box>
    </Flex>
  );
};

export default Navbar;
