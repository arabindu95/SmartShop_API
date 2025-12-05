import React from "react";
import { useContext } from "react";
import { MyContext } from "../context/createContext";
import { Link } from "react-router-dom";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { GiCondorEmblem } from "react-icons/gi";

const Footer = () => {
  const { theme } = useContext(MyContext);
  return (
    <div
      className={` border-t border-slate-700 mt-24 ${
        theme === "light" ? "bg-white" : "bg-slate-800"
      }`}
    >
      <div className="flex flex-col md:flex-row gap-10 pt-10 pb-8 pl-5 md:pl-0">
        {/* Left Container */}
        <div className="flex-1 flex flex-col gap-3 md:pl-5 mt-4">
          <div className="flex items-center mb- gap-4">
            <GiCondorEmblem className="text-2xl" />
            <h1 className="text-xl font-semibold">SmartShop AI</h1>
          </div>
          <p className="text-gray-400 text-sm p-2">
            Your intelligent shopping assistant powered by AI. Find exactly what
            you need with personalized recommendations.
          </p>
        </div>

        {/* 2nd Container */}
        <div className=" flex flex-1 flex-col cursor-cell">
          <h1 className="text-lg font-semibold">Shop</h1>
          <div className="flex flex-col mt-6 text-gray-400 gap-2">
            <Link>All Products</Link>
            <Link>AI Recommendations</Link>
            <Link>Electronics</Link>
            <Link>Gaming</Link>
          </div>
        </div>

        {/* 3rd Container */}
        <div className="flex flex-1 flex-col">
          <h1 className="text-lg font-semibold">Support</h1>
          <div className="flex flex-col mt-6 text-gray-400 gap-2">
            <Link>Help Center</Link>
            <Link>Shipping Info</Link>
            <Link>Returns</Link>
            <Link>Contact Us</Link>
          </div>
        </div>

        {/* Right Container */}
        <div className="flex flex-1 flex-col">
          <h1 className="text-lg font-semibold">Connect</h1>
          <div className="flex mt-6 gap-5 text-xl">
            <Link className="bg-slate-700 p-2 rounded-lg hover:bg-teal-600">
              <FaTwitter />
            </Link>
            <Link className="bg-slate-700 p-2 rounded-lg hover:bg-teal-600">
              <SlSocialLinkedin />
            </Link>
            <Link className="bg-slate-700 p-2 rounded-lg hover:bg-teal-600">
              <FaGithub />
            </Link>
            <Link className="bg-slate-700 p-2 rounded-lg hover:bg-teal-600">
              <LuMail />
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[0.5px] bg-slate-700 mx-5"></div>

      {/* Bottom Container */}
      <div className="flex justify-center items-center mt-6 pb-10 text-sm p-2">
        <p>
          © 2025 SmartShop AI. All rights reserved. Built with AI-powered
          intelligence.
        </p>
      </div>
    </div>
  );
};

export default Footer;
