import axios from "axios";

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
  editProduct(productData) {
    return instance.put(`/products/${productData.id}`, productData);
  },
};

export default api;
