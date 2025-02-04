import { createAction } from "@reduxjs/toolkit";

const productsAsyncAction = {
  getProductsAction: createAction("GET_PRODUCTS_ASYNC"),
  deleteProductAction: createAction("DELETE_PRODUCT_ASYNC"),
  addProductAction: createAction("ADD_PRODUCT_ASYNC"),
  editProductAction: createAction("EDIT_PRODUCT_ASYNC"),
};

export default productsAsyncAction;
