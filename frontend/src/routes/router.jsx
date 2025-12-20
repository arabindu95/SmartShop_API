import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./../Layouts/AppLayout";
import Home from "./../pages/Home";
import Books from "./../pages/Books";
import { Auth } from "../pages/Auth";
import Recommendations from "../pages/Recommendations";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import AdminAuth from "../pages/admin/AdminAuth";
import AdminHome from "../pages/admin/AdminHome";
import AdminUploadProducts from "../pages/admin/AdminUploadProducts";

export const router = createBrowserRouter([
  //user Router
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

  //admin Router

  {
    path: "/admin",
    element: <AdminHome />,
    children: [
      {
        path: "login",
        element: <AdminAuth />,
      },
      {
        path: "upload",
        element: <AdminUploadProducts />,
      },
    ],
  },
]);
