import axios from "axios";
// import { API_URL } from "../constants/api";
const API_URL = import.meta.env.VITE_API_URL;

console.log(API_URL);
const instance = axios.create({
  baseURL: API_URL,
});

const api = {
  getProducts() {
    return instance.get("/products");
  },
  deleteProduct(id) {
    return instance.delete(`/products/${id}`);
  },
  addProduct(productData) {
    return instance.post("/products", productData);
  },
  // getHotels(params) {
  //   return instance.get("hotels", {
  //     params,
  //   });
  // },
};

export default api;
