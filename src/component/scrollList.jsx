import React, { useEffect, useState } from "react";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import "./scrollList.css";
import Header from "./Header";
import AppUtils from "../utils/AppUtils";

Scrollbar.use(OverscrollPlugin);

const ScrollList = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseItems = await AppUtils.fetchProducts();
        const responseCategories = await AppUtils.fetchCategories();
        setItems(responseItems || []); // Ensure items is an array
        setCategories(responseCategories || []); // Ensure categories is an array
      } catch (error) {
        console.error("Error fetching data:", error);
        setItems([]); // Set empty array on error
        setCategories([]); // Set empty array on error
      }
    };
    fetchData();
  }, []);

  const getItemById = (id) => {
    return categories.find((item) => item.id === id);
  };

  const renderItems = () => {
    return items.map((item, i) => {
      const category = getItemById(item.category_id) || categories[0];
      return (
        <div key={i}>
          {(i === 0 || item.category_id !== items[i - 1].category_id) && (
            <>
              <h2 style={{ fontSize: "32px" }}>{category.name}</h2>
              <img className="icon" src={category.image} alt={category.name} />
            </>
          )}
          <article className="item">
            <p className="flavor">{item.name}</p>
            <hr className="" />
            <p className="price">{item.price}</p>
          </article>
        </div>
      );
    });
  };

  return (
    <>
      <Header />
      <div className="mainMenu">
        <div className="menu">
          <main>
            <h1 style={{ color: "#eee4b1", fontSize: "40px" }}>
              ĐA SAR COFFEE
            </h1>
            <p className="established">Est. 2024</p>
            <hr />
            <section>
              {items.length > 0 && categories.length > 0
                ? renderItems()
                : "No items to display"}
            </section>
          </main>
          <p
            style={{ color: "#eee4b1", fontStyle: "italic", fontSize: "30px" }}
          >
            Đa Sar cảm ơn quý khách
          </p>
          <hr className="bottom-line" />
        </div>
      </div>
    </>
  );
};

export default ScrollList;
