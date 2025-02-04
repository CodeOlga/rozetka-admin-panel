import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import productsAsyncAction from "../../../redux/products/saga/asyncAction";
import { getProducts, isLoading } from "../../../redux/products/selectors";

export function useProducts() {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const loading = useSelector(isLoading);

  useEffect(() => {
    dispatch(productsAsyncAction.getProductsAction());
  }, [dispatch]);

  return {
    products,
    loading,
  };
}
