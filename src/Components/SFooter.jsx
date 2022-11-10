import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { IN } from "country-flag-icons/react/3x2";

const SFooter = () => {
  return (
    <Box bg="#f9f9f9" mt="50px">
      <Flex gap="10px" justifyContent="space-evenly">
        <Stack>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
            color="black"
            fontWeight="Bold"
            fontSize="22px"
          >
            Customer Service
          </Text>
          <br />
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Contact Us
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Order Status
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Shipping
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Return Policy & Exchanges
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Price Adjustments
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Gift Cards
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            FAQ
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Product Recalls
          </Text>
          <Flex gap="5px">
            <IN
              title="United States"
              style={{ borderRadius: "50%", width: "20px" }}
            />
            <Text
              _hover={{
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              India
            </Text>
          </Flex>
        </Stack>

        <Stack>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
            color="black"
            fontWeight="Bold"
            fontSize="22px"
          >
            About US
          </Text>
          <br />
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            All Brands
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Careers
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Corporate Social Responsibility
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Diversity, Inclusion & Belonging
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Get Email Updates
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            DreamLaza Blog
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            The Thread
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Nordy Podcast
          </Text>
        </Stack>

        <Stack>
          <Text color="black" fontWeight="Bold" fontSize="22px">
            Stores & Services
          </Text>
          <br />
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Find a Store
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Free Style Help
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Alterations & Tailoring
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Pop-In Shop
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Virtual Events
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Spa DreamLaza
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            DreamLaza Restaurants
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            DreamLaza Local
          </Text>
        </Stack>

        <Stack>
          <Text color="black" fontWeight="Bold" fontSize="22px">
            DreamLaza card & Rewards
          </Text>
          <br />
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            The Nordy Club Rewards
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Pay My Bill
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Manage My DreamLaza Card
          </Text>
        </Stack>

        <Stack>
          <Text color="black" fontWeight="Bold" fontSize="22px">
            DreamLaza,Inc
          </Text>
          <br />
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            DreamLaza Rack
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            DreamLaza Canada
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Investor Relations
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Press Releases
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            DreamLaza Media Network
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default SFooter;
