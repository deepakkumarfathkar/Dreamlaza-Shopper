import React from "react";
import { Image, Text, Box, Flex } from "@chakra-ui/react";

const LogoIcon = () => {
  return (
    <Flex direction="row" gap="25px" justifyContent="space-between" alignContent="center" alignItems="center">
      <Box margin="auto">
        <Image
          margin="auto"
          src="https://n.nordstrommedia.com/id/c30eb052-a9da-4529-95ed-0d1568cc55ad.png?h=22&w=536"
          alt="icon"
        />
      </Box>

      <Box margin="auto">
        <Text textAlign="center">
          Shop what you love—faster and easier.
          <br />
          Sign In or Create an Account
        </Text>
      </Box>

      <Box margin="auto">
        <Image
          margin="auto"
          src="https://n.nordstrommedia.com/id/c30eb052-a9da-4529-95ed-0d1568cc55ad.png?h=22&w=536"
          alt="icon"
        />
      </Box>
    </Flex>
  );
};

export default LogoIcon;
