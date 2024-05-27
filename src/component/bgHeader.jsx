import React from "react";
import bg from "/background.jpg";
import "./bgHeader.scss";
function BackgroundHeader() {
  return (
    <div className="header-container">
      <img className="header-background" src={bg} alt="background" />
      <div className="overlay">
        <h1>Dasar Coffee</h1>
        <h3>Nơi âm nhạc và hương vị hòa quyện</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum
          quis.
        </p>
      </div>
    </div>
  );
}

export default BackgroundHeader;
