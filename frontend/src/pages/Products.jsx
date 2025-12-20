import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const results = await axios.get(
        "http://localhost:5000/smartshop/api/product/getproducts",
        { withCredentials: true }
      );
      setProducts(results.data.products);
    };
    fetchProducts();
  }, []);
  return (
    <div className="grid grid-cols-1 mx-4 mt-4 sm:grid-cols-3 sm:mx-0 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-slate-700 rounded-xl overflow-hidden flex flex-col"
        >
          {/* Image */}
          <div className="w-full h-56">
            <img
              src={product.image.url}
              alt={product.title}
              className="w-full max-h-full object-cover hover:scale-105 transition-all duration-500"
            />
          </div>

          {/* Product Info */}
          <div className="p-4 flex flex-col gap-2">
            <p className="text-teal-400">{/* category or empty */}</p>
            <h2 className="font-bold text-lg text-shadow-xl">
              {product.title}
            </h2>
            <p>RATINGS</p>
          </div>

          {/* Price + Cart */}
          <div className="flex justify-between items-center p-4 border-t border-slate-600">
            <p className="font-bold text-2xl text-teal-500">
              ₹ {product.price}
            </p>
            <Link className="bg-teal-500 p-2 rounded-xl hover:bg-teal-600">
              <LuShoppingCart className="text-2xl text-black" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
