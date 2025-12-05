import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./../Layouts/AppLayout";
import Home from "./../pages/Home";
import Books from "./../pages/Books";
import { Auth } from "../pages/Auth";
import Recommendations from "../pages/Recommendations";
import Cart from "../pages/Cart";
import Products from "../pages/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/recommendations",
        element: <Recommendations />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);
