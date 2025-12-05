import React from "react";
import { useContext } from "react";
import { MyContext } from "../context/createContext";
import { Outlet } from "react-router-dom";
import Header from "./../component/Header";
import Footer from "./../component/Footer";

const AppLayout = () => {
  const { theme } = useContext(MyContext);
  return (
    <div
      className={`min-h-screen  ${
        theme === "dark"
          ? "bg-linear-to-r from-slate-900 to-slate-900 text-white"
          : "bg-gray-200 text-black "
      }`}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
