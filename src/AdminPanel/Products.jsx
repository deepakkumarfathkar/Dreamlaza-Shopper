import { useState, useEffect } from "react";
import { getProducts, addProduct, deleteProduct } from "./api";
import AddProduct from "./AddProduct";
import { Center, Text } from "@chakra-ui/react";

function Products() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchCitiesDataAndUpdate = (page) => {
    getProducts({ page, limit: 5, sort: "title", order: "asc" })
      .then((res) => setData(res.data))
      .catch((err) => console.log("error is ", err))
      .finally(() => console.log("call completed"));
  };

  useEffect(() => {
    fetchCitiesDataAndUpdate(page);
  }, [page]);

  const handleProduct = (data) => {
    // make a post request call
    addProduct(data).then(() => {
      fetchCitiesDataAndUpdate(page);
      alert(`Product has been added successfully`);
    });
  };

  const handleDelete = (id) => {
    deleteProduct(id).then(() => fetchCitiesDataAndUpdate(page));
  };

  return (
    <div>
      <Center>
        <Text as="u" fontSize="4xl">
          Add Products
        </Text>
      </Center>
      <AddProduct onAddProduct={handleProduct} />
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "40%",
            margin: "auto",
          }}
        >
          <div>{item.title}</div>
          <button onClick={() => handleDelete(item.id)}>DELETE</button>
        </div>
      ))}
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        PREV
      </button>
      <button>{page}</button>
      <button onClick={() => setPage(page + 1)}>NEXT</button>
    </div>
  );
}

export default Products;
