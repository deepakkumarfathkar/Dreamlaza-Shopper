import { Image, Box, Center } from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  return (
    <Center>
      <Box mt="10px">
        <Image
          src="https://n.nordstrommedia.com/id/02de1670-3aa2-4e07-a234-52ce171a3d6d.png?h=400&w=1608"
          alt="banner"
        />
      </Box>
    </Center>
  );
};

export default Banner;
