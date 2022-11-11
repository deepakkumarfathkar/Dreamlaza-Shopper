import axios from "axios";

export const getProducts = (params = {}) => {
  return axios.get(` http://localhost:8080/clothing`, {
    params: {
      _page: params.page,
      _limit: params.limit,
      _sort: params.sort,
      _order: params.order
    }
  });
};

export const addProduct = (data = {}) => {
  return axios.post(` http://localhost:8080/clothing`, {
    title: data.title,
    category: data.category,
    brand: data.brand
  });
};

export const deleteProduct = (id) => {
  return axios({
    method: "DELETE",
    baseURL: " http://localhost:8080",
    url: `/clothing/${id}`
  });
};