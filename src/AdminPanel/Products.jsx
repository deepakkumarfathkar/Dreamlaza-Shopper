import { useState, useEffect } from "react";
import { getCities, addCity, deleteCity } from "./api";
import AddProduct from "./AddProduct";

function Products() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchCitiesDataAndUpdate = (page) => {
    getCities({ page, limit: 5, sort: "title", order: "asc" })
      .then((res) => setData(res.data))
      .catch((err) => console.log("error is ", err))
      .finally(() => console.log("call completed"));
  };

  useEffect(() => {
    fetchCitiesDataAndUpdate(page);
  }, [page]);

  const handleAddCity = (data) => {
    // make a post request call
    addCity(data).then(() => {
      fetchCitiesDataAndUpdate(page);
      alert(`city has been added successfully`);
    });
  };

  const handleDelete = (id) => {
    deleteCity(id).then(() => fetchCitiesDataAndUpdate(page));
  };

  return (
    <div>
      <h1>Products</h1>
      <AddProduct onAddCity={handleAddCity} />
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "40%",
            margin: "auto"
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
