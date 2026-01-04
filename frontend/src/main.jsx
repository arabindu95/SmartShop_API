import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./input.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { MyContextProvider } from "./context/contextProvider";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position="top-center" />
    <MyContextProvider>
      <RouterProvider router={router} />
    </MyContextProvider>
  </StrictMode>
);
