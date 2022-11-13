import React from "react";
import { Text, Box, Flex, Spacer } from "@chakra-ui/react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";

const Navbar = () => {
  const links = [
    { path: "/", title: "Home" },
    { path: "/product", title: "Products" },
    { path: "/userlogin", title: "Login" },
  ];
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <Box p="2">
        <Text fontSize="4xl" fontWeight="extrabold" color="black">
          <Link to="/">DREAMLAZA</Link>
        </Text>
      </Box>
      <Spacer />
      <Box p="2" w="50%">
        <InputGroup size="md">
          <Input pr="4.5rem" placeholder="Search for products or brands" />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm">
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
      <Spacer />
      <Box
        p="2"
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
      <Box mr="10px" _hover={{ cursor: "pointer" }}>
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
