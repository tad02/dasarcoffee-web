import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../pages/ProductList";
import localLink from "../config";
import AppUtils from "../utils/AppUtils";
function Products() {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [item, setItem] = useState({});

  return (
    <div style={{ fontSize: "25px" }}>
      <h1>Products</h1>
      <ProductList />
    </div>
  );
}

export default Products;
