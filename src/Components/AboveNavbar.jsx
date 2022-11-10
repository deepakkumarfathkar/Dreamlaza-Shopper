import React from "react";
import { Flex, Box, Center, Text } from "@chakra-ui/react";
import { IN } from 'country-flag-icons/react/3x2'


const AboveNavbar = () => {
  return (
    <Flex w="100%" bg="black" m="auto">
      <Center p="2" w="95%">
        <Text color="white">
          Shipping outside of the U.S. or Canada? Learn About International
          Shipping
        </Text>
      </Center>

      <Box
        w="5%"
        p="2"
        alignContent="right"
        alignItems="right"
        justifyContent="right"
        justifyItems="right"
        margin="auto"
        mr="10px"
        mt="10px"
        size="100px"
      >
        <Flex>
        <IN title="United States" style={{borderRadius:"40%"}}/>
        <Text ml="8px" color="white">India</Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default AboveNavbar;
