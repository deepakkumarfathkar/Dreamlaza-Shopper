import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { Stack, Button, Text } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BelowNav = () => {
  return (
    <Center mt="10px" color="black" fontSize="20px">
      <Stack spacing="25px" direction="row">
        <Button colorScheme="white">
          <Text
            _hover={{
              color: "teal.500",
              textDecoration: "underline",
            }}
          >
            <FontAwesomeIcon icon={faGift} /> Holiday Gifts
          </Text>
        </Button>
        <Button colorScheme="white">
          <Text
            _hover={{
              color: "teal.500",
              textDecoration: "underline",
            }}
          >
            Holiday Deals
          </Text>
        </Button>
        <Button colorScheme="white">
          <Text
            _hover={{
              color: "teal.500",
              textDecoration: "underline",
            }}
          >
            <Link to="/women">Women</Link>
          </Text>
        </Button>
        <Button colorScheme="white">
          <Text
            _hover={{
              color: "teal.500",
              textDecoration: "underline",
            }}
          >
            <Link to="/men">Men</Link>
          </Text>
        </Button>
        <Button colorScheme="white">
          <Text
            _hover={{
              color: "teal.500",
              textDecoration: "underline",
            }}
          >
            Kids
          </Text>
        </Button>
        <Button colorScheme="white">
          <Text
            _hover={{
              color: "teal.500",
              textDecoration: "underline",
            }}
          >
            Young Adult
          </Text>
        </Button>
        <Button colorScheme="white">
          <Text
            _hover={{
              color: "teal.500",
              textDecoration: "underline",
            }}
          >
            Activewerw
          </Text>
        </Button>
        <Button colorScheme="white">
          <Text
            _hover={{
              color: "teal.500",
              textDecoration: "underline",
            }}
          >
            Home
          </Text>
        </Button>
        <Button colorScheme="white">
          <Text
            _hover={{
              color: "teal.500",
              textDecoration: "underline",
            }}
          >
            Beauty
          </Text>
        </Button>
        <Button colorScheme="white">
          <Text
            _hover={{
              color: "teal.500",
              textDecoration: "underline",
            }}
          >
            Designer
          </Text>
        </Button>
        <Button colorScheme="white">
          <Text
            _hover={{
              color: "teal.500",
              textDecoration: "underline",
            }}
          >
            The Thread
          </Text>
        </Button>
      </Stack>
    </Center>
  );
};

export default BelowNav;
