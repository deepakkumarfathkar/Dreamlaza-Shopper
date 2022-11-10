import {
  Image,
  Box,
  Center,
  Text,
  Stack,
  textDecoration,
} from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  return (
    <Center>
      <Box mt="10px" position="relative">
        <Image
          src="https://n.nordstrommedia.com/id/02de1670-3aa2-4e07-a234-52ce171a3d6d.png?h=400&w=1608"
          alt="banner"
        />
      </Box>
      <Box position="absolute" bottom="45%" left="50%">
        <Text color="white">
          Treat yourself to great deals for fall from your favorite brands—for a
          limited time.
        </Text>
      </Box>
      <Stack position="absolute" bottom="40%" left="52%" direction="row">
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
  );
};

export default Banner;
