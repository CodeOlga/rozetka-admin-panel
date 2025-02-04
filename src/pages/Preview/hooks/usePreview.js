import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "redux-first-history";

import { routes } from "../../../constants/routes";
import { getProducts, isLoading } from "../../../redux/products/selectors";
import productsAsyncAction from "../../../redux/products/saga/asyncAction";

export const usePreview = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const loading = useSelector(isLoading);

  useEffect(() => {
    dispatch(productsAsyncAction.getProductsAction());
  }, [dispatch]);

  useEffect(() => {
    if (!loading && products.length === 0) {
      dispatch(push(routes.products.path));
    }
  }, [dispatch, products, loading]);

  return { products };
};
