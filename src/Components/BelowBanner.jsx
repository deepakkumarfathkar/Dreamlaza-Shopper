import { Box, Center, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const BelowBanner = () => {
  return (
    <Link to="/product">
      <Center>
        <Flex
          flexDirection="row"
          bg="black"
          cursor="pointer"
          w="94.2%"
          mt="50px"
        >
          <Box w="50%">
            <Image
              src="https://cdn.smartnordstrom.com/s3/csp/1666988189993/Nordstrom_Homepage_Display_Dyson.jpg"
              alt="BelowBanner"
            ></Image>
          </Box>
          <Box w="50%">
            <Stack>
              <Text
                color="white"
                textAlign="center"
                mt="25px"
                mb="25px"
                justifyContent="center"
                align-items="center"
                fontWeight="bold"
                fontSize="2xl"
              >
                Gift with Style
              </Text>
              <Text color="white" textAlign="center">
                The special-edition Dyson Supersonic™ hair dryer is here!
              </Text>
              <Text color="white" textAlign="center" textDecoration="underline">
                Shop Now
              </Text>
            </Stack>
          </Box>
        </Flex>
      </Center>
    </Link>
  );
};

export default BelowBanner;
