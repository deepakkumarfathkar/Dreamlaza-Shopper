import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
const Copyright = () => {
  return (
    <Box ml="40px">
      <Flex gap="20px">
        <Text
          _hover={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
          color="grey"
        >
          Privacy
        </Text>
        <Text
          _hover={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
          color="grey"
        >
          Do Not Sell My Personal Information
        </Text>
        <Text
          _hover={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
          color="grey"
        >
          Terms & Conditions
        </Text>
        <Text
          _hover={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
          color="grey"
        >
          Interest-Based Ads
        </Text>
        <Text color="grey">©2022 DreamLaza, Inc.</Text>
      </Flex>
    </Box>
  );
};

export default Copyright;
