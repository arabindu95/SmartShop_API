import React from "react";
import { RiShoppingBag3Line, RiDeleteBin6Line } from "react-icons/ri";

import { FiMinus, FiPlus } from "react-icons/fi";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/smartshop/api/cart/getcart",
        { withCredentials: true }
      );
      console.log(res.data);
      setCartItems(res.data.cart.items || []);
      setTotalAmount(res.data.totalAmount);
      console.log(res.data.cart.items);
    } catch (error) {
      console.log(error, "error in FetchCart");
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  //remove from cart
  const removeFromCart = async (productId) => {
    try {
      await axios.delete(
        `http://localhost:5000/smartshop/api/cart/remove/${productId}`,
        { withCredentials: true }
      );
      fetchCart();
    } catch (error) {
      console.log(error, "error in remove Item from cart");
    }
  };

  //Increament Quantity
  const increamntQuantity = async (productId) => {
    try {
      await axios.post(
        "http://localhost:5000/smartshop/api/cart/add",
        { productId, quantity: 1 },
        { withCredentials: true }
      );
      fetchCart();
    } catch (error) {
      console.log(error, "error in increamnet Quantity");
    }
  };

  //Decrement Quantity
  const decrementQuantuty = async (productId) => {
    try {
      await axios.delete(
        `http://localhost:5000/smartshop/api/cart/remove/${productId}`,
        { withCredentials: true }
      );
      fetchCart();
    } catch (error) {
      console.log(error, "error in decrement");
    }
  };

  const tax = totalAmount * 0.08;
  const finalTaxAmount = totalAmount + tax;
  return (
    <div>
      {cartItems.length === 0 ? (
        // {/* -----------------------Cart Is Empty--------------------- */}
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
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-6 ">
          <div className="col-span-4">
            <div className="grid mx-4 mt-4 gap-6 p-4">
              {cartItems.map((item) => (
                <>
                  <div
                    key={item._id}
                    className="bg-slate-800 flex flex-col gap-8 p-6 border border-slate-700 rounded-2xl"
                  >
                    <div className="flex gap-12 ">
                      <div className="flex  items-center">
                        <div className="flex items-center  w-36 h-30 contain-content border rounded-2xl">
                          <img src={item.product.image.url} alt="" />
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="flex flex-col gap-2">
                          <p className="text-xl font-semibold">
                            {item.product.title}
                          </p>

                          <p className="text-xl text-teal-500 font-bold">
                            {" "}
                            ₹ {item.product.price}
                          </p>
                        </div>
                        <div className="flex justify-between mt-4">
                          <div className="flex gap-10 mt-2 items-center">
                            <div className="p-2 border border-slate-700 rounded-lg hover:bg-slate-900 duration-200 cursor-pointer">
                              <FiMinus
                                onClick={() => removeFromCart(item.product._id)}
                              />
                            </div>
                            <p>{item.quantity}</p>
                            <div className="p-2 border border-slate-700 rounded-lg hover:bg-slate-900 duration-200 cursor-pointer">
                              <FiPlus
                                onClick={() =>
                                  increamntQuantity(item.product._id)
                                }
                              />
                            </div>
                          </div>
                          <div className="flex items-center text-red-900 text-xl  hover:bg-red-950 rounded-lg hover:scale-105 duration-300 px-2 cursor-pointer">
                            <RiDeleteBin6Line
                              onClick={() => removeFromCart(item.product._id)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="h-[1px] bg-slate-700 "></div>
                      <div className="flex justify-between pt-2">
                        <h2>Subtotal:</h2>
                        <h2 className="text-xl font-semibold">
                          ₹ {item.product.price * item.quantity}
                        </h2>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="col-span-2 relative mx-4 mt-4 p-4">
            <div className="flex flex-col gap-4 bg-slate-800 border border-slate-700 h-fit sticky top-24 p-6 rounded-xl">
              <div className="flex flex-col  gap-6">
                <h1 className="text-2xl font-bold">Order Summary</h1>
                <div className="flex justify-between">
                  <h2 className=" text-slate-400">Subtotal</h2>
                  <h2>₹ {totalAmount}</h2>
                </div>
                <h2 className=" text-slate-400">Shipping</h2>
                <p className=" text-xs text-green-600">you got free shopping</p>
                <h2 className=" text-slate-400">Tax (8%)</h2>
              </div>
              <div className="h-[1px] bg-slate-700"></div>
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">TotalAmount:</h2>
                <h2 className="text-xl font-semibold"> ₹ {finalTaxAmount}</h2>
              </div>
              <button
                className="bg-teal-700 p-4 rounded-lg"
                onClick={() => navigate("/Cheackout")}
              >
                Proceed to CheackOut
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
