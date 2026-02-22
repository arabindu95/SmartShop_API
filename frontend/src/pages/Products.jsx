import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import axios from "axios";
import { MyContext } from "../context/createContext";
import { BACKEND_URI } from "../config";
import toast from "react-hot-toast";
const Products = () => {
  const [products, setProducts] = useState([]);
  const { search, cartCount, setCartCount } = useContext(MyContext);

  useEffect(() => {
    console.log(BACKEND_URI);
    const timer = setTimeout(() => {
      axios
        .get(
          `${BACKEND_URI}/smartshop/api/product/getproducts?search=${search}`,
          {
            withCredentials: true,
          },
        )
        .then((res) => {
          setProducts(res.data.products);
        });
    }, 1000);
    return () => clearTimeout(timer);
  }, [search]);

  //addToCart
  const addToCart = async (productId) => {
    try {
      const response = await axios.post(
        `${BACKEND_URI}/smartshop/api/cart/add`,
        {
          productId: productId,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          withCredentials: true,
        },
      );
      toast.success(response.data.message);
      setCartCount((prev) => prev + 1);
    } catch (error) {
      console.log(error);
      alert("Please login first");
    }
  };

  return (
    <div className="grid grid-cols-2 mx-4 mt-4 sm:grid-cols-3 sm:mx-0 lg:grid-cols-6 gap-3 px-2">
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-slate-700 rounded-xl overflow-hidden flex flex-col"
        >
          {/* Image */}
          <div className="w-full h-40">
            <img
              src={product.image.url}
              alt={product.title}
              className="mt-2 w-full max-h-full object-cover hover:scale-105 transition-all duration-500"
            />
          </div>

          {/* Product Info */}
          <div className="p-4 flex flex-col gap-2">
            <p className="text-teal-400">{/* category or empty */}</p>
            <h2 className="font-light text-xl text-shadow-xl">
              {product.title}
            </h2>
            <p></p>
          </div>

          {/* Price + Cart */}
          <div className="flex justify-between items-center p-4 border-t border-slate-600">
            <p className="font-md text-2xl text-teal-500">
              ₹ {product.price}/-
            </p>
            <button
              className="bg-teal-500 p-2 rounded-xl hover:bg-teal-600"
              onClick={() => addToCart(product._id)}
            >
              <LuShoppingCart className="text-2xl text-black" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
