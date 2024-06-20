import React, { useState, useEffect } from "react";
import CategoryList from "../pages/CategoryList";

const Categories = () => {
  return (
    <div style={{ fontSize: "25px" }}>
      <h1>Categories</h1>
      <CategoryList />
    </div>
  );
};

export default Categories;
