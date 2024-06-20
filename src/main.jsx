import "./output.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ScrollList from "./component/scrollList.jsx";
import Login from "./admin/Login.jsx";
import Dashboard from "./admin/Dashboard.jsx";
import Categories from "./pages/Categories.jsx";
import Products from "./pages/Products";
import Orders from "./pages/Orders";

// Create browser router with routes
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/menu-dasar-coffee", element: <ScrollList /> },
  { path: "/admin", element: <Login /> },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "orders", element: <Orders /> },
      { path: "categories", element: <Categories /> },
      { path: "products", element: <Products /> },
    ],
  },
]);

// Render the application inside the root element
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
