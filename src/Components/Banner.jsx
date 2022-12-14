import {
  Image,
  Box,
  Center,
  Text,
  Stack,
  textDecoration,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Link to="/product">
      <Center>
        <Box mt="10px" position="relative">
          <Image
            src="https://n.nordstrommedia.com/id/02de1670-3aa2-4e07-a234-52ce171a3d6d.png?h=400&w=1608"
            alt="banner"
          />
        </Box>
        <Box position="absolute" bottom="77%" left="50%">
          <Text color="white">
            Treat yourself to great deals for fall from your favorite brands—for
            a limited time.
          </Text>
        </Box>
        <Stack position="absolute" bottom="75%" left="52%" direction="row">
          <Text color="white">Holiday Deals :</Text>
          <Text
            color="white"
            textDecoration="underline"
            _hover={{
              cursor: "pointer",
              textDecorationColor: "grey",
            }}
          >
            New Markdowns
          </Text>
          <Text
            color="white"
            textDecoration="underline"
            _hover={{
              cursor: "pointer",
              textDecorationColor: "grey",
            }}
          >
            Women
          </Text>
          <Text
            color="white"
            textDecoration="underline"
            _hover={{
              cursor: "pointer",
              textDecorationColor: "grey",
            }}
          >
            Men
          </Text>
          <Text
            color="white"
            textDecoration="underline"
            _hover={{
              cursor: "pointer",
              textDecorationColor: "grey",
            }}
          >
            Kids
          </Text>
          <Text
            color="white"
            textDecoration="underline"
            _hover={{
              cursor: "pointer",
              textDecorationColor: "grey",
            }}
          >
            Home
          </Text>
          <Text
            color="white"
            textDecoration="underline"
            _hover={{
              cursor: "pointer",
              textDecorationColor: "grey",
            }}
          >
            Beauty
          </Text>
        </Stack>
      </Center>
    </Link>
  );
};

export default Banner;
