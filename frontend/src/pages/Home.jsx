import React from "react";

import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { MyContext } from "./../context/createContext";

import { FaArrowRight } from "react-icons/fa6";
import { IoShieldOutline } from "react-icons/io5";
import { TbArrowZigZag } from "react-icons/tb";
import { BsLightningCharge } from "react-icons/bs";
import { GiCondorEmblem } from "react-icons/gi";
import { LuShoppingCart } from "react-icons/lu";
import axios from "axios";
import { BACKEND_URI } from "../config";

const Home = () => {
  const { theme } = useContext(MyContext);
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const results = await axios.get(
        `${BACKEND_URI}/smartshop/api/product/getproducts`,
        { withCredentials: true }
      );
      setproducts(results.data.products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center mt-16">
      {/* ----------------Hero Section---------------- */}
      <section className="relative overflow-x-hidden pb-16">
        <div className="">
          {/* First */}
          <div className="flex items-center justify-center py-10">
            <div className=" bg-teal-800 flex items-center justify-center w-72 p-2 rounded-full gap-2 ">
              <GiCondorEmblem className="text-2xl" />
              <p className="text-blue-200 text-sm">
                AI-Powered Shopping Experience
              </p>
            </div>
          </div>

          {/* Second */}
          <div className="flex justify-center text-center pt-20 md:text-xl text-gray-400 text-lg ">
            <p className="md:w-1/2">
              SmartShop uses advanced AI to understand your preferences and
              recommend products you'll love. Shop smarter, not harder.
            </p>
          </div>

          {/* Third */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col md:flex-row justify-center gap-6 pb-16 py-10">
              <div className="flex ">
                <Link
                  to="/products"
                  className="flex p-4 justify-center items-center md:w-56 gap-4 rounded-lg shadow-xs shadow-gray-600  hover:shadow-teal-500 font-semibold hover:scale-110 duration-1000 transition-all w-full "
                >
                  <h2>Brows Products</h2>
                  <FaArrowRight />
                </Link>
              </div>

              <div className="flex ">
                <Link
                  to="/recommendations"
                  className="flex p-4 justify-center items-center md:w-64 border font-semibold border-teal-500 hover:text-black hover:bg-teal-500 hover:font-semibold hover:scale-110 duration-1000 rounded-lg transition-all w-full"
                >
                  <h2>Get AI Recommendations</h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------Features Section--------------- */}
      <section
        className={`${
          theme === "light" ? "bg-white text-black" : "bg-slate-900"
        }`}
      >
        {/* Heading */}
        <div className="flex justify-center">
          <div className="flex flex-col justify-center items-center mt-24">
            <h1 className="font-bold text-3xl md:text-4xl text-center">
              Why Choose SmartShop AI?
            </h1>
            <p className="text-center text-gray-400 py-4">
              Experience the future of online shopping with intelligent features
              designed for you.
            </p>
          </div>
        </div>

        {/* Boxes */}
        <div className=" flex flex-col md:flex-row gap-10 w-full p-4 pb-20 pt-10 justify-center ">
          {/* Box No-1 */}
          <div className="md:w-72 md:h-72 bg-slate-800 w-full rounded-xl p-8 hover:scale-105 duration-300">
            <GiCondorEmblem className="text-3xl " />
            <h1 className="text-xl font-semibold mt-7 mb-3">
              AI-Powered Recommendations
            </h1>
            <p className="text-gray-400">
              Get personalized product suggestions based on your preferences and
              browsing history.
            </p>
          </div>

          {/* Box No-2 */}
          <div className="md:w-72 md:h-72 bg-slate-800 w-full rounded-xl p-8 hover:scale-105 duration-300">
            <TbArrowZigZag className="text-3xl " />
            <h1 className="text-xl font-semibold mt-7 mb-3">
              Real-Time Trending
            </h1>
            <p className="text-gray-400">
              Stay updated with the most popular products loved by thousands of
              customers.
            </p>
          </div>

          {/* Box No-3 */}
          <div className="md:w-72 md:h-72 bg-slate-800 w-full rounded-xl p-8 hover:scale-105 duration-300">
            <IoShieldOutline className="text-3xl " />
            <h1 className="text-xl font-semibold mt-7 mb-3">Secure Shopping</h1>
            <p className="text-gray-400">
              Shop with confidence knowing your data and transactions are
              protected.
            </p>
          </div>

          {/* Box No-4 */}
          <div className="md:w-72 md:h-72 bg-slate-800 w-full rounded-xl p-8 hover:scale-105 duration-300">
            <BsLightningCharge className="text-3xl " />
            <h1 className="text-xl font-semibold mt-7 mb-3">Fast Delivery</h1>
            <p className="text-gray-400">
              Quick and reliable shipping to get your products when you need
              them.
            </p>
          </div>
        </div>
      </section>

      {/* -------------Trending Product Section---------- */}
      <section
        className={`md:p-16 ${
          theme === "light" ? "bg-white text-black" : "bg-slate-800"
        }`}
      >
        {/* Heading & Buttons*/}
        <div className=" flex pb-10 justify-between">
          <div className="flex flex-col justify-center items-center md:block">
            <h1 className="font-bold text-3xl md:text-4xl text-center md:text-start">
              Trending Now
            </h1>
            <p className=" text-gray-400 py-4 text-center">
              Most popular products loved by our customers
            </p>
          </div>
          <div className="flex  justify-center items-center hidden md:block">
            <Link className="flex items-center gap-2 shadow-md shadow-gray-950 p-2 rounded-full hover:bg-gray-950 ">
              <p>View All</p>
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 mx-4  sm:grid-cols-2 sm:mx-0 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-slate-700 rounded-xl overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="w-full h-96">
                <img
                  src={product.image.url}
                  alt={product.title}
                  className="w-full max-h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="p-4 flex flex-col gap-2">
                <p className="text-teal-400">{/* category or empty */}</p>
                <h2 className="font-bold text-xl">{product.title}</h2>
                <p>RATINGS</p>
              </div>

              {/* Price + Cart */}
              <div className="flex justify-between items-center p-4 border-t border-slate-600">
                <p className="font-semibold">₹{product.price}</p>
                <Link className="bg-teal-500 p-2 rounded-xl hover:bg-teal-600">
                  <LuShoppingCart className="text-2xl text-black" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button - only on mobile */}
        <div className=" md:hidden mt-4 w-full p-2">
          <Link className="flex justify-center items-center gap-2  bg-slate-900 p-4 px-8 rounded-lg  hover:shadow-md hover:shadow-slate-900 hover:bg-slate-800 w-full">
            <p>View All Products</p>
          </Link>
        </div>
      </section>

      {/* -----------------CTA Section------------------ */}
      <section
        className={`md:p-16 ${
          theme === "light"
            ? "bg-white text-black"
            : "bg-linear-to-r from-slate-800 to-slate-900"
        }`}
      >
        <div className="flex flex-col items-center justify-center mt-20 gap-6">
          <h1 className="text-3xl font-bold md:text-4xl text-center">
            Ready to Experience Smart Shopping?
          </h1>
          <p className="text-center">
            Join thousands of happy customers who found their perfect products
            with AI assistance.
          </p>
          <div className="flex w-full items-center justify-center">
            <Link
              to=""
              className="bg-teal-500 p-4 rounded-full hover:scale-105 duration-300"
            >
              Get Personalized Recommendations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
