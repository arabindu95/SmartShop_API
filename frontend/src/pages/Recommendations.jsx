import React from "react";

import { GiCondorEmblem } from "react-icons/gi";
import { TbFilter } from "react-icons/tb";
import { LuRefreshCw } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";

const Recommendations = () => {
  return (
    <div>
      {/*------------------------ Header ------------------*/}
      <section>
        <div className="flex items-center md:px-16 md:pt-8 gap-4 px-2">
          <div>
            <GiCondorEmblem className="text-2xl md:text-4xl" />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold">
              AI Recommendations
            </h1>
            <p className="text-gray-400">Personalized picks just for you</p>
          </div>
        </div>
      </section>

      {/*---------------------- User Profile Summary------------------------- */}
      <section className="">
        <div className="flex flex-col md:flex-row bg-slate-800 m-6 p-6 border border-slate-700 rounded-lg">
          {/* ----Left Section---- */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <TbFilter className="text-2xl text-teal-500 " />
              <h1 className="font-semibold">Your Shopping Profile</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-sm text-teal-500">Interested in:</h1>
              <div className="flex gap-2 text-blue-300 text-sm md:text-shadow-md">
                <p className="px-2 rounded-full bg-teal-700">Electronics</p>
                <p className="px-2 rounded-full bg-teal-700">Gaming</p>
                <p className="px-2 rounded-full bg-teal-700">Audio</p>
              </div>
            </div>
          </div>

          {/* ----Middle Section---- */}
          <div className="flex-1 mt-8">
            <h1 className="text-sm text-gray-500">Price Range:</h1>
            <p>Rs:450 - Rs:4500</p>
          </div>

          {/* ----Right Section---- */}
          <div className="flex-1 mt-8">
            <h1 className="text-sm text-gray-500">Recently Viewed:</h1>
            <p>3 Products</p>
          </div>
        </div>
      </section>

      {/*---------------------- Filter Buttons ------------------------- */}
      <section>
        <div className="flex lg:justify-between p-6">
          <div className="flex flex-wrap gap-6">
            <div className="flex">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-300 ${
                    isActive
                      ? "bg-indigo-600 text-gray-300 font-bold"
                      : "bg-gray-800"
                  }`
                }
              >
                <h1>All</h1>
              </NavLink>
            </div>
            <div className="flex ">
              <NavLink
                to="/recommendations"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-300  ${
                    isActive
                      ? "bg-indigo-600 text-gray-300 font-bold"
                      : "bg-gray-800"
                  }`
                }
              >
                <h1>Similar Items</h1>
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-300  ${
                    isActive
                      ? "bg-indigo-600 text-gray-300 font-bold"
                      : "bg-gray-800"
                  }`
                }
              >
                <h1>Trending</h1>
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-300  ${
                    isActive
                      ? "bg-indigo-600 text-gray-300 font-bold"
                      : "bg-gray-800"
                  }`
                }
              >
                <h1>By Category</h1>
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg  hover:bg-gray-700 transition-all duration-300 ${
                    isActive
                      ? "bg-indigo-600 text-gray-300 font-bold"
                      : "bg-gray-800"
                  }`
                }
              >
                <h1>Top Rated</h1>
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg  hover:bg-gray-700 transition-all duration-300 ${
                    isActive
                      ? "bg-indigo-600 text-gray-300 font-bold"
                      : "bg-gray-800"
                  }`
                }
              >
                <h1>Price Match</h1>
              </NavLink>
            </div>
          </div>
          <div className="flex justify-center items-center bg-red-500 px-4 py-2 rounded-lg">
            <Link className="flex items-center gap-2  ">
              <LuRefreshCw />
              <h1>Refresh</h1>
            </Link>
          </div>
        </div>
      </section>

      {/*---------------------- Recommendations Grid ------------------------- */}
      <section></section>

      {/*---------------------- Explanation Section ------------------------- */}
      <section>
        <div className="flex flex-col  bg-gray-800 m-6 p-6 border border-slate-700 rounded-lg">
          <div>
            <GiCondorEmblem />
            <div>
              <h1>How AI Recommendations Work</h1>
              <p>
                Our AI analyzes your browsing history, preferences, and purchase
                patterns to suggest products you'll love.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-10 gap-6">
            <div className="flex flex-col p-4 rounded-lg gap-3 bg-slate-800 shadow-md shadow-teal-400 hover:bg-slate-900 hover:shadow-gray-600">
              <h1 className="font-semibold">Smart Matching</h1>
              <p className="text-gray-400 text-sm">
                Compares product features and your interests to find perfect
                matches.
              </p>
            </div>

            <div className="flex flex-col p-4 rounded-lg gap-3 bg-slate-800 shadow-md shadow-teal-400 hover:bg-slate-900 hover:shadow-gray-600">
              <h1 className="font-semibold">Trend Analysis</h1>
              <p className="text-gray-400 text-sm">
                Identifies popular items loved by customers with similar tastes.
              </p>
            </div>

            <div className="flex flex-col p-4 rounded-lg gap-3 bg-slate-800 shadow-md shadow-teal-400 hover:bg-slate-900 hover:shadow-gray-600">
              <h1 className="font-semibold">Explainable AI</h1>
              <p className="text-gray-400 text-sm">
                Every recommendation shows why we think you'll like it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recommendations;
