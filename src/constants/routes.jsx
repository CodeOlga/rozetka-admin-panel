import Login from "../pages/Login/Login";
import Preview from "../pages/Preview/Preview";
import Products from "../pages/Products/Products";

export const routes = {
  login: {
    element: <Login />,
    path: "/login",
    id: 1,
  },
  products: {
    element: <Products />,
    path: "/products",
    id: 2,
  },
  preview: {
    element: <Preview />,
    path: "/preview",
    id: 3,
  },
};
