import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { MyContext } from "../context/createContext";

import { FaRegUser } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { BsBrightnessHigh } from "react-icons/bs";
import { IoMoonOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { GiCondorEmblem } from "react-icons/gi";

const Header = () => {
  const { theme, toggleTheme } = useContext(MyContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 backdrop-blur-2xl border-b border-slate-700  ">
      <div className="flex h-16 items-center ">
        {/* Logo */}
        <div className="flex-2 ">
          <GiCondorEmblem className="md:ml-16 ml-2 md:text-4xl text-2xl " />
        </div>

        {/* Search input button */}
        <div className="hidden md:flex-3 relative md:block ">
          <input
            type="text"
            placeholder="Search Products...."
            className="w-full h-10 pl-8 rounded-xl border border-slate-700 focus:border-2 focus:border-slate-700 outline-none  text-white"
          />
          <LuSearch className="absolute  top-3 left-2" />
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex md:flex-4  text-md items-center ">
          <div className="flex ml-32 gap-6 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-300" : " hover:text-blue-300"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "text-blue-300" : " hover:text-blue-300"
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/aipicks"
              className={({ isActive }) =>
                isActive ? "text-blue-300" : " hover:text-blue-300"
              }
            >
              AI Picks
            </NavLink>

            <div className="flex gap-10 text-xl items-center ml-10">
              <Link
                to="/auth"
                className="p-2 rounded-lg hover:bg-slate-800 duration-300"
              >
                <FaRegUser />
              </Link>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-slate-800 duration-300"
              >
                {theme === "light" ? <IoMoonOutline /> : <BsBrightnessHigh />}
              </button>
              <Link
                to="/cart"
                className="p-2 rounded-lg hover:bg-slate-800 duration-300"
              >
                <LuShoppingCart />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile  Menu Icon */}
        <div className="md:hidden absolute top-5 md:right-6 right-2  z-20">
          {open ? (
            <MdOutlineArrowDropDownCircle
              className="text-2xl cursor-pointer"
              onClick={() => setOpen(false)}
            />
          ) : (
            <HiMenu
              className="text-2xl cursor-pointer"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden px-4 w-full flex flex-col gap-4  rounded-b-lg
              overflow-x-hidden transition-all duration-700 ease-in-out
              ${
                theme === "light"
                  ? "bg-white text-black hover:bg-gray-100"
                  : "bg-slate-800 text-white"
              }

              ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 "}`}
      >
        <div className="flex-3 relative md:block mt-4">
          <input
            type="text"
            placeholder="Search Products...."
            className="w-full h-10 pl-8 rounded-lg border border-gray-600 focus:border-2 focus:border-white outline-none  text-white"
          />
          <LuSearch className="absolute  top-3 left-2" />
        </div>

        <NavLink
          to="/"
          className="hover:text-blue-300 hover:bg-slate-700 p-2 rounded-lg"
          onClick={() => setOpen(false)}
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className="hover:text-blue-300 hover:bg-slate-700 p-2 rounded-lg"
          onClick={() => setOpen(false)}
        >
          Products
        </NavLink>

        <NavLink
          to="/aipicks"
          className="hover:text-blue-300 hover:bg-slate-700 p-2 rounded-lg"
          onClick={() => setOpen(false)}
        >
          AI Picks
        </NavLink>

        <div className="flex gap-6 py-2  justify-between items-center  border-t border-slate-700">
          <Link
            to="/auth"
            onClick={() => setOpen(false)}
            className="ml-6 p-1 text-xl rounded-lg hover:bg-slate-700 duration-300 "
          >
            <FaRegUser />
          </Link>

          <button onClick={toggleTheme}>
            {theme === "light" ? (
              <IoMoonOutline className="p-1 text-3xl rounded-lg hover:bg-slate-700 duration-300 " />
            ) : (
              <BsBrightnessHigh className=" p-1 text-3xl rounded-lg hover:bg-slate-700 duration-300 " />
            )}
          </button>
          <Link
            to="/cart"
            onClick={() => setOpen(false)}
            className="mr-6 p-1 text-xl rounded-lg hover:bg-slate-700 duration-300"
          >
            <LuShoppingCart />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
