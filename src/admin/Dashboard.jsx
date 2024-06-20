import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ fontSize: "30px" }} className="min-h-screen flex flex-col">
      <nav className="bg-blue-600 flex-col text-white p-4 flex justify-between items-center">
        <div className="text-2xl text-black text-center">Dashboard</div>
        <ul
          style={{
            listStyleType: "none",
            flexDirection: "column",
          }}
          className={`md:flex md:space-x-4 d-flex`}
        >
          <li>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                location.href = "https://www.dasarvn.com";
              }}
            >
              Đăng xuất
            </button>
          </li>

          <li className="mt-2 md:mt-0">
            <Link
              to="categories"
              className="block py-2 px-4 hover:bg-blue-700 rounded-md"
            >
              Categories
            </Link>
          </li>
          <li className="mt-2 md:mt-0">
            <Link
              to="products"
              className="block py-2 px-4 hover:bg-blue-700 rounded-md"
            >
              Products
            </Link>
          </li>
          <li className="mt-2 md:mt-0">
            <Link
              to="orders"
              className="block py-2 px-4 hover:bg-blue-700 rounded-md"
            >
              Orders
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
