import { useState, useEffect } from "react";
import { getProducts, addProduct, deleteProduct } from "./api";
import AddProduct from "./AddProduct";
import { Center, Text } from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";
import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
  Box,
  Image,
  Select,
  Flex,
  Stack,
  FormControl,
  HStack,
} from "@chakra-ui/react";

function Products() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [srt, setSrt] = useState("asc");

  const fetchCitiesDataAndUpdate = (page, limit, srt) => {
    getProducts({ page, limit: `${limit}`, sort: "id", order: `${srt}` })
      .then((res) => setData(res.data))
      .catch((err) => console.log("error is ", err))
      .finally(() => console.log("call completed"));
  };

  useEffect(() => {
    fetchCitiesDataAndUpdate(page, limit, srt);
  }, [page, limit, srt]);

  const handleProduct = (data) => {
    // make a post request call
    addProduct(data).then(() => {
      fetchCitiesDataAndUpdate(page, limit, srt);
      alert(`Product has been added successfully`);
    });
  };

  const handleDelete = (id) => {
    deleteProduct(id).then(() => fetchCitiesDataAndUpdate(page, limit, srt));
  };

  return (
    <Box>
      <Center>
        <Text as="u" fontSize="4xl">
          Add Products
        </Text>
      </Center>
      <AddProduct onAddProduct={handleProduct} />
      <Center>
        <Flex gap={"20px"}>
          <Box>
            <Flex mb="20px">
              <Text fontWeight={"bold"} mb="5px">
                Page Limit:
              </Text>
              <Select
                placeholder="Select option"
                onChange={(e) => setLimit(e.target.value)}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </Select>
            </Flex>
          </Box>
          <Box>
            <Flex mb="20px">
              <Text fontWeight={"bold"} mb="5px">
                Sort:
              </Text>
              <Select
                placeholder="Select option"
                onChange={(e) => setSrt(e.target.value)}
              >
                <option value="asc">Ascending</option>
                <option value="desc">Decending</option>
              </Select>
            </Flex>
          </Box>
        </Flex>
      </Center>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Category</Th>
              <Th>Brand</Th>
              <Th isNumeric>Price</Th>
              <Th isNumeric>Original Price</Th>
              <Th isNumeric>Offer Price</Th>
              <Th>Discount</Th>
              <Th>Image</Th>
              <Th>Description</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr>
                <Td>{item.id}</Td>
                <Td>{item.category}</Td>
                <Td isNumeric>{item.brand}</Td>
                <Td isNumeric>{item.price}</Td>
                <Td isNumeric>{item.original_price}</Td>
                <Td isNumeric>{item.offer_price}</Td>
                <Td isNumeric>{item.discount}</Td>
                <Td>
                  <Image src={item.image} />
                </Td>
                <Td>
                  <Button
                    _hover={{
                      background: "red",
                      color: "white",
                    }}
                    onClick={() => handleDelete(item.id)}
                  >
                    DELETE
                  </Button>
                </Td>
                <Td>
                  <Text noOfLines={[1, 2, 3]}>{item.desc}</Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Center>
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREV
        </Button>
        <Button>{page}</Button>
        <Button onClick={() => setPage(page + 1)}>NEXT</Button>
      </Center>
    </Box>
  );
}

export default Products;
