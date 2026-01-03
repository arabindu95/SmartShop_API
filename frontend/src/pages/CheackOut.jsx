import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { BACKEND_URI } from "../config";
const CheackOut = () => {
  const [address, setAddress] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    city: "",
    pincode: "",
  });

  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  //fetchCart items
  const fetchCart = async () => {
    try {
      const res = await axios.get(`${BACKEND_URI}/smartshop/api/cart/getcart`, {
        withCredentials: true,
      });
      setCartItems(res.data.cart.items || []);
      setTotalAmount(res.data.totalAmount);
    } catch (error) {
      console.log(error, "error in checkOut C fetchartitems ");
    }
  };

  //totalAmount
  const tax = totalAmount * 0.08;
  const totalTaxAmount = totalAmount + tax;

  //for Auto fetch
  useEffect(() => {
    fetchCart();
  }, []);
  //for onChange
  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  //place  order
  const placeOrder = async () => {
    try {
      if (!address.fullname || !address.phone || !address.address) {
        alert("all fields are mandotory");
        return;
      }
      const res = await axios.post(
        `${BACKEND_URI}/smartshop/api/order/place`,
        {
          address,
          items: cartItems,
          totalAmount: totalTaxAmount,
        },
        { withCredentials: true }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error, "error in placeOrder function");
    }
  };

  return (
    <div className="p-6">
      <h1 className="font-bold text-3xl pb-1">CheackOut</h1>
      <p className="text-slate-500">Complete your order</p>
      <div className=" grid grid-cols-6 gap-4 pt-6 items-start">
        {/* ***************************left side *****************************/}
        <div className="col-span-4">
          {/* Personal Information */}
          <div className=" bg-slate-800 border border-slate-700 rounded-lg p-4">
            <div className="flex items-center pb-4">
              <FaRegUser />
              <h1 className="text-xl font-semibold pl-4">
                Personal Information
              </h1>
            </div>
            <div className="flex justify-between w-full gap-6 py-6">
              <div className="w-full">
                <label htmlFor="fullname" className="flex mb-2">
                  Full Name*
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  value={address.fullname}
                  onChange={handleChange}
                  placeholder="Arabindu Chakraborty"
                  className="w-full p-2 pl-10 rounded-md bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="flex mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={address.email}
                  onChange={handleChange}
                  placeholder="arabinduchakraborty.921@gmail.com"
                  className="w-full p-2 pl-10 rounded-md bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="flex mb-2">
                Phone*
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={address.phone}
                onChange={handleChange}
                placeholder="+91 1234567890"
                className="w-full p-2 pl-10 rounded-md bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 "
              />
            </div>
          </div>

          {/* Address Information */}
          <div>
            <div className=" bg-slate-800 border border-slate-700 rounded-lg p-4 mt-4 ">
              <div className="flex items-center pb-4">
                <IoLocationSharp />
                <h1 className="text-xl font-semibold pl-4">Shipping Address</h1>
              </div>
              <div>
                <label htmlFor="address" className="flex mb-2">
                  Address*
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={address.address}
                  onChange={handleChange}
                  placeholder="santinagar w-10"
                  className="w-full p-2 pl-10 rounded-md bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                />
              </div>
              <div className="flex justify-between w-full gap-6 py-6">
                <div className="w-full">
                  <label htmlFor="city" className="flex mb-2">
                    City*
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={address.city}
                    onChange={handleChange}
                    placeholder="Haldibari"
                    className="w-full p-2 pl-10 rounded-md bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="state" className="flex mb-2">
                    State*
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    value={address.state}
                    onChange={handleChange}
                    placeholder="westBengal"
                    className="w-full p-2 pl-10 rounded-md bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                  />
                </div>
              </div>
              <div>
                <label htmlFor="pincode" className="flex mb-2">
                  PinCode*
                </label>
                <input
                  type="text"
                  name="pincode"
                  id="pincode"
                  value={address.pincode}
                  onChange={handleChange}
                  placeholder="12345"
                  className="w-full p-2 pl-10 rounded-md bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                />
              </div>
            </div>
          </div>
        </div>

        {/* ************************right side***************************** */}
        <div className="col-span-2 sticky top-6 h-fit ">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <h1 className="text-xl font-semibold">Order Summary</h1>
            {cartItems.map((item) => (
              <>
                <div key={item.product._id} className="mt-4">
                  <div className="flex gap-4">
                    <div>
                      <div className="w-16 h-16 contain-content rounded-lg">
                        <img src={item.product.image.url} alt="" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">
                        {item.product.title}
                      </p>
                      <p className="font-medium text-xs text-teal-500">
                        Qty: {item.quantity}
                      </p>
                      <p className="font-medium text-teal-500">
                        ₹{item.product.price}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ))}
            <div className="h-[1px] bg-slate-700 mt-6"></div>
            <div className="mt-4 ">
              <div className="flex justify-between">
                <h1 className="text-sm">Subtotal</h1>
                <h1 className="font-semibold">₹{totalAmount}</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="text-sm">Shipping</h1>
                <h1 className="font-semibold">FREE</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="text-sm">tax</h1>
                <h1 className="font-semibold">{tax}</h1>
              </div>
            </div>
            <div className="h-[1px] bg-slate-700 my-6"></div>
            <div className="flex justify-between">
              <h1 className="text-lg font-semibold">Total</h1>
              <h1 className="font-bold text-xl text-teal-400">
                ₹{totalTaxAmount}
              </h1>
            </div>
            <button
              className="bg-teal-700 p-4 rounded-lg w-full my-4 hover:bg-teal-600"
              onClick={placeOrder}
            >
              Place Order . ₹{totalTaxAmount}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheackOut;
