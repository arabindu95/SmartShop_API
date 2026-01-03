import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LuMail } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { GiCondorEmblem } from "react-icons/gi";
import axios from "axios";
import { MyContext } from "./../context/createContext";
import { BACKEND_URI } from "../config";

export const Auth = () => {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [fullName, setfullName] = useState("");
  const [password, setPasdsword] = useState("");
  const { isLoggedin, SetIsLoggedin } = useContext(MyContext);

  const navigate = useNavigate();

  //login function
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BACKEND_URI}/smartshop/api/user/login`,
        { email, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("loginData:=>", response.data);
      navigate("/products");
      SetIsLoggedin(true);
    } catch (error) {
      console.log(error);
    }
  };

  //signup function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BACKEND_URI}/smartshop/api/user/signup`,
        { fullName, email, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("signup data =>", response.data);
      navigate("/products");
    } catch (error) {
      console.log(error?.response.data || error.message);
    }
  };

  //logout
  const handleLogout = async () => {
    try {
      const result = await axios.post(
        `${BACKEND_URI}/smartshop/api/user/logout`,
        {},
        { withCredentials: true }
      );
      if (result.data.success) {
        console.log(result.data.message);
      }
      SetIsLoggedin(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col items-center mt-16 ">
        <div className="flex-col">
          <GiCondorEmblem className=" text-4xl text-center" />
        </div>

        {isLoggedin ? (
          <div className="mt-10">
            <button
              onClick={handleLogout}
              className="bg-red-500 py-2 px-4 rounded-lg hover:bg-red-600"
            >
              logout
            </button>
          </div>
        ) : (
          <div>
            <div className="flex flex-col justify-center items-center my-10 gap-2">
              <h1 className="text-3xl font-semibold">
                {mode === "login" ? "Welcome Back" : "Create Account"}
              </h1>
              <p className="text-gray-400">
                {mode === "login"
                  ? "Sign in to access your account"
                  : "Join SmartShop for personalized shopping"}
              </p>
            </div>

            <div className="flex-col justify-center items-center p-10 rounded-xl shadow-lg shadow-blue-300 border border-slate-700 w-[450px]">
              <div className="flex gap-4 mb-6 w-full items-center justify-center">
                <button
                  onClick={() => setMode("login")}
                  className={`px-4 py-2 rounded-lg font-medium w-48 ${
                    mode === "login" ? "bg-blue-800 text-white" : "bg-slate-800"
                  }`}
                >
                  Login
                </button>

                <button
                  onClick={() => setMode("signup")}
                  className={`px-4 py-2 rounded-lg font-medium w-48 ${
                    mode === "signup"
                      ? "bg-blue-800 text-white"
                      : "bg-slate-800 "
                  }`}
                >
                  Signup
                </button>
              </div>

              {/* -------FORM------ */}

              {mode === "login" ? (
                // login
                <form onSubmit={handleLogin} className="text-center">
                  <div>
                    <div className="relative items-center">
                      <label htmlFor="email" className="flex mb-2">
                        Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 pl-10 rounded-md bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                        placeholder="Arabindu@email.com"
                        required
                      />
                      <LuMail className="absolute top-12 left-2 text-2xl text-gray-400" />
                    </div>

                    <div className="relative mt-3">
                      <label htmlFor="email" className="flex mb-2">
                        Password
                      </label>
                      <input
                        type="text"
                        id="password"
                        value={password}
                        onChange={(e) => setPasdsword(e.target.value)}
                        className="w-full p-3 pl-10 rounded-md bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                        placeholder="* * * * * * * *"
                        required
                      />
                      <MdLockOutline className="absolute top-11 left-2 text-2xl text-gray-400" />
                    </div>

                    <div className="mt-8">
                      <button
                        type="submit"
                        className="w-full p-3 rounded-md bg-green-800 border border-slate-700 focus:outline-none hover:bg-green-700 duration-300 "
                      >
                        Sign in
                      </button>
                    </div>

                    <div className="mt-8 flex justify-center items-center">
                      <div className="h-[0.5px] w-24 bg-red-50 mx-2"></div>
                      <p>or continue with</p>
                      <div className="h-[0.5px] w-24 bg-red-50 mx-2"></div>
                    </div>

                    <div className="flex gap-4 mt-8 w-full items-center justify-center">
                      <button
                        className="relative px-4 py-2  h-12 rounded-lg font-medium w-48 bg-slate-800 hover:bg-slate-700 duration-300"
                        onClick={() => {}}
                      >
                        Google
                      </button>
                      <FcGoogle className="absolute mt-1 mr-72 text-2xl" />

                      <button
                        className="relative px-4 py-2 h-12 rounded-lg font-medium w-48  bg-slate-800 hover:bg-slate-700 duration-300"
                        onClick={() => {}}
                      >
                        Github
                      </button>
                      <FaGithub className="absolute mt-1 ml-24 text-2xl" />
                    </div>
                  </div>
                </form>
              ) : (
                // signup
                <form onSubmit={handleSubmit} className="text-center">
                  <div>
                    <div className="relative">
                      <label htmlFor="fullname" className="flex mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setfullName(e.target.value)}
                        className="w-full p-3 pl-10 rounded-md bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                        placeholder="Arabindu Chakraborty"
                        required
                      />
                      <FiUser className="absolute top-11 left-2 text-2xl text-gray-400" />
                    </div>

                    <div className="relative">
                      <label htmlFor="email" className="flex mb-2">
                        Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 pl-10 rounded-md bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                        placeholder="Arabindu@email.com"
                        required
                      />
                      <LuMail className="absolute top-11 left-2 text-2xl text-gray-400" />
                    </div>

                    <div className="relative mt-3">
                      <label htmlFor="password" className="flex mb-2">
                        Password
                      </label>
                      <input
                        type="text"
                        id="password"
                        value={password}
                        onChange={(e) => setPasdsword(e.target.value)}
                        className="w-full p-3 pl-10 rounded-md bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                        placeholder="* * * * * * * *"
                        required
                      />
                      <MdLockOutline className="absolute top-11 left-2 text-2xl text-gray-400" />
                    </div>

                    <div className="mt-8 ">
                      <button
                        type="submit"
                        className="w-full p-3  rounded-md bg-green-800 border border-slate-700 focus:outline-none hover:bg-green-700 duration-300 "
                      >
                        Create Account
                      </button>
                    </div>

                    <div className="mt-8 flex justify-center items-center">
                      <div className="h-[0.5px] w-24 bg-red-50 mx-2"></div>
                      <p>or continue with</p>
                      <div className="h-[0.5px] w-24 bg-red-50 mx-2"></div>
                    </div>

                    <div className="flex gap-4 mt-8 w-full items-center justify-center">
                      <button
                        className="relative px-4 py-2  h-12 rounded-lg font-medium w-48 bg-slate-800 hover:bg-slate-700 duration-300"
                        onClick={() => {}}
                      >
                        Google
                      </button>
                      <FcGoogle className="absolute mt-1 mr-72 text-2xl" />

                      <button
                        className="relative px-4 py-2 h-12 rounded-lg font-medium w-48  bg-slate-800 hover:bg-slate-700 duration-300"
                        onClick={() => {}}
                      >
                        Github
                      </button>
                      <FaGithub className="absolute mt-1 ml-24 text-2xl" />
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
