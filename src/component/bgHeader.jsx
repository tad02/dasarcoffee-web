import React from "react";
import bg from "/background.jpg";
import "./bgHeader.scss";

function BackgroundHeader() {
  return (
    <div className="header-container">
      <img className="header-background" src={bg} alt="background" />
      <div className="overlay">
        <h1>Dasar Coffee</h1>
        <h3>Nơi âm nhạc và hương vị thăng hoa</h3>
        <p>
          Hãy đến và trải nghiệm những hương vị đặc biệt chỉ có tại Đa Sar
          Coffee.
        </p>
        <button>Explore More</button>
      </div>
    </div>
  );
}

export default BackgroundHeader;
