// import { useDispatch, useSelector } from "react-redux";
// import { push } from "redux-first-history";
// import { getProducts } from "../../../redux/products/selectors";
// import { routes } from "../../../constants/routes";
// import { useEffect } from "react";

// export const usePreview = () => {
//   const dispatch = useDispatch();
//   const items = useSelector(getProducts);

//   useEffect(() => {
//     if (items.length === 0) dispatch(push(routes.products.path));
//   }, []);

//   return { items };
// };

//========GPT==
import { useDispatch, useSelector } from "react-redux";
import { push } from "redux-first-history";
import { getProducts, isLoading } from "../../../redux/products/selectors";
import { routes } from "../../../constants/routes";
import { useEffect } from "react";
import productsAsyncAction from "../../../redux/products/saga/asyncAction";

export const usePreview = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const loading = useSelector(isLoading);

  useEffect(() => {
    // Загружаем продукты при монтировании страницы
    dispatch(productsAsyncAction.getProductsAction());
  }, [dispatch]);

  useEffect(() => {
    if (!loading && products.length === 0) {
      dispatch(push(routes.products.path));
    }
  }, [dispatch, products, loading]); // Добавили зависимости

  return { products };
};
