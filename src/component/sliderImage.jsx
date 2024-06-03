import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./sliderImage.scss"; // Đảm bảo đường dẫn đến file CSS của bạn là đúng
import image1 from "/slide1.jpg";
import image2 from "/slide2.jpg";

const fadeImages = [
  {
    url: image2,
    caption: "Đồng hành cùng bạn",
  },
  {
    url: image1,
    caption: "Nhâm nhi đậm vị",
  },
  {
    url: "https://media.istockphoto.com/id/1467739359/vi/anh/t%C3%A1ch-c%C3%A0-ph%C3%AA-v%E1%BB%9Bi-kh%C3%B3i-v%C3%A0-h%E1%BA%A1t-c%C3%A0-ph%C3%AA-tr%C3%AAn-n%E1%BB%81n-g%E1%BB%97-c%C5%A9.jpg?s=612x612&w=0&k=20&c=7Db4xDu9xobh-BuXC8TWpPSb3K9_0BSKwR875uK1Z50=",
    caption: "Ở đây chúng tôi có coffee sạch",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} className="each-fade">
            <img
              style={{ width: "100%" }}
              src={fadeImage.url}
              alt={`slide-${index}`}
            />
            <h5>{fadeImage.caption}</h5>
          </div>
        ))}
      </Fade>
      <button
        className="nav default-nav"
        type="button"
        data-type="prev"
        aria-label="Previous Slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"></path>
        </svg>
      </button>
      <button
        className="nav default-nav"
        type="button"
        data-type="next"
        aria-label="Next Slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
        </svg>
      </button>
    </div>
  );
};

export default Slideshow;
