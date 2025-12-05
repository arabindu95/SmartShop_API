import React from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      {/* -----------------------Cart Is Empty--------------------- */}
      <div className="flex mt-30 bg-slate-900 items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <RiShoppingBag3Line className="text-6xl md:8xl text-gray-400" />
          <h1 className=" text-2xl md:text-3xl font-bold">
            Your Cart is Empty
          </h1>
          <p className="text-gray-400">Add some products to get started!</p>
          <Link
            to="/products"
            className="py-4 px-6 md:px-10 bg-teal-400 text-black font-semibold rounded-lg hover:scale-105 transition-all duration-300"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
