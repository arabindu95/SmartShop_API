import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const AdminHome = () => {
  const location = useLocation();
  const hideTopBar = location.pathname !== "/admin";
  return (
    <div className="min-h-screen flex flex-col">
      {!hideTopBar && (
        <div className="flex items-center justify-center flex-1">
          <Link
            className="bg-green-600 py-2 px-6 rounded-md text-white hover:bg-green-700 text-lg font-semibold"
            to="/admin/login"
          >
            welcome
            <p className=" text-sm text-slate-300 text-center font-light">
              click here
            </p>
          </Link>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default AdminHome;
