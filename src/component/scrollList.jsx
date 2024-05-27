import React, { useEffect, useState } from "react";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import "./scrollList.css";
import { Link } from "react-router-dom";
import logo from "/dasar.jpg";
import image from "/drink/capuchino.png";
import Header from "./Header";

Scrollbar.use(OverscrollPlugin);

const ScrollList = () => {
  const itemsJuice = [
    {
      name: "Bơ",
      engName: "Avocado",
      image: "smoothie/avocado.png",
      price: "30.000 ",
      description: "Sinh tố bơ bổ dưỡng và mịn màng.",
    },
    {
      name: "Sapôchê",
      engName: "Sapodilla",
      image: "smoothie/sapoche.png",
      price: "25.000 ",
      description: "Nước ép trái sapôchê tươi mát.",
    },
    {
      name: "Sapoche Coffee",
      engName: "Sapodilla Coffee",
      image: "smoothie/sapoche_coffee.png",
      price: "35.000 ",
      description: "Sự kết hợp độc đáo giữa trái sapôchê và cà phê.",
    },
    {
      name: "Dâu",
      engName: "Strawberry",
      image: "smoothie/strawberry.png",
      price: "28.000 ",
      description: "Sinh tố dâu tây ngon và tươi.",
    },
    {
      name: "Dưa lưới",
      engName: "Cantaloupe",
      image: "smoothie/cantaloupe.png",
      price: "32.000 ",
      description: "Sinh tố dưa lưới ngọt và tươi mát.",
    },
    {
      name: "Đu đủ",
      engName: "Papaya",
      image: "smoothie/papaya.png",
      price: "30.000 ",
      description: "Sinh tố đu đủ bổ dưỡng và ngon miệng.",
    },
    {
      name: "Xoài",
      engName: "Mango",
      image: "smoothie/mango.png",
      price: "30.000 ",
      description: "Sinh tố xoài nhiệt đới và tươi mát.",
    },
    {
      name: "Mãng cầu",
      engName: "Annona",
      image: "smoothie/annona.png",
      price: "32.000 ",
      description: "Sinh tố mãng cầu độc đáo và mịn màng.",
    },
    {
      name: "Cà chua",
      engName: "Tomato",
      image: "smoothie/tomato.png",
      price: "25.000 ",
      description: "Sinh tố cà chua tươi và thơm.",
    },
    {
      name: "Mít",
      engName: "Jackfruit",
      image: "smoothie/jackfruit.png",
      price: "30.000 ",
      description: "Sinh tố mít ngọt và thơm.",
    },
    {
      name: "Dưa hấu",
      engName: "Watermelon",
      image: "smoothie/watermelon.png",
      price: "32.000 ",
      description: "Sinh tố dưa hấu mọng nước và tươi mát.",
    },
  ];

  const itemsCoffee = [
    {
      name: "Cà phê đen",
      engName: "Black Coffee",
      image: "coffee/black_coffee.png",
      price: "15.000 ",
      description: "Cà phê đen mạnh và thơm.",
    },
    {
      name: "Cà phê nâu",
      engName: "Brown Coffee",
      image: "coffee/brown_coffee.png",
      price: "18.000 ",
      description: "Cà phê nâu đậm đà và hương vị.",
    },
    {
      name: "Cà phê sữa",
      engName: "White Coffee",
      image: "coffee/white_coffee.png",
      price: "22.000 ",
      description: "Cà phê sữa mịn màng và ngọt ngào.",
    },
    {
      name: "Cà phê sữa tươi",
      engName: "Milk Coffee",
      image: "coffee/milk_coffee.png",
      price: "25.000 ",
      description: "Cà phê sữa tươi đậm đà và mịn màng.",
    },
    {
      name: "Americano",
      engName: "Americano",
      image: "coffee/americano.png",
      price: "25.000 ",
      description: "Cà phê Americano cổ điển và đậm đà.",
    },
    {
      name: "Ca cao",
      engName: "Cacao",
      image: "coffee/cacao.png",
      price: "25.000 ",
      description: "Thức uống ca cao đậm đà và sô cô la.",
    },
  ];

  const itemsSoda = [
    {
      name: "Soda việt quất",
      engName: "Blueberry Soda",
      image: "soda/blueberry_soda.png",
      price: "30.000 ",
      description: "Thức uống soda việt quất tươi mát.",
    },
    {
      name: "Soda kiwi",
      engName: "Kiwi Soda",
      image: "soda/kiwi_soda.png",
      price: "30.000 ",
      description: "Thức uống soda kiwi chua ngọt.",
    },
    {
      name: "Soda dâu",
      engName: "Strawberry Soda",
      image: "soda/strawberry_soda.png",
      price: "28.000 ",
      description: "Thức uống soda dâu tươi và ngon.",
    },
    {
      name: "Soda chanh dây",
      engName: "Passion Fruit Soda",
      image: "soda/passion_fruit_soda.png",
      price: "30.000 ",
      description: "Thức uống soda chanh dây nhiệt đới và chua ngọt.",
    },
    {
      name: "Soda vải",
      engName: "Lychee Soda",
      image: "soda/lychee_soda.png",
      price: "30.000 ",
      description: "Thức uống soda vải ngọt và tươi mát.",
    },
    {
      name: "Soda dưa lưới",
      engName: "Melon Soda",
      image: "soda/melon_soda.png",
      price: "32.000 ",
      description: "Thức uống soda dưa lưới mọng nước và thơm.",
    },
    {
      name: "Soda nho",
      engName: "Grape Soda",
      image: "soda/grape_soda.png",
      price: "32.000 ",
      description: "Thức uống soda nho ngọt và có gas.",
    },
    {
      name: "Soda đào",
      engName: "Peach Soda",
      image: "soda/peach_soda.png",
      price: "28.000 ",
      description: "Thức uống soda đào ngọt và thơm.",
    },
  ];

  const renderItems = (items) => {
    return items.map((item, i) => (
      <div key={i}>
        <article class="item">
          <p class="flavor">{item.name}</p>
          <hr className="" />
          <p class="price">{item.price}</p>
        </article>
      </div>
    ));
  };
  return (
    <>
      <Header />
      <div className="mainMenu">
        <div class="menu">
          <main>
            <h1 style={{ color: "#eee4b1" }}>ĐA SAR COFFEE</h1>
            <p class="established">Est. 2024</p>
            <hr />
            <section>
              <h2>Coffee</h2>
              <img
                className="icon"
                src="https://cdn-icons-png.freepik.com/512/924/924514.png?ga=GA1.1.511715952.1707926817"
                alt="coffee icon"
              />
              {renderItems(itemsCoffee)}
            </section>
            <section>
              <h2>Smoothie</h2>
              <img
                className="icon"
                src="https://cdn-icons-png.freepik.com/512/6602/6602190.png"
                alt="pie icon"
              />
              {renderItems(itemsJuice)}
            </section>
            <section>
              <h2>Juice</h2>
              <img
                className="icon"
                src="https://cdn-icons-png.freepik.com/512/2738/2738804.png?ga=GA1.1.511715952.1707926817"
                alt="pie icon"
              />
              {renderItems(itemsSoda)}
            </section>
            <section>
              <h2>Soda</h2>
              <img
                className="icon"
                src="https://d29fhpw069ctt2.cloudfront.net/icon/image/37823/preview.svg"
                alt="pie icon"
              />
              {renderItems(itemsSoda)}
            </section>
          </main>
          <p style={{ color: "#eee4b1", fontStyle: "italic" }}>
            Đa Sar cảm ơn quý khách
          </p>
          <hr class="bottom-line" />
        </div>
      </div>
    </>
  );
};

export default ScrollList;
