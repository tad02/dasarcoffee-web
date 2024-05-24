import React from 'react';
import bg from '/background.jpg';
import './bgHeader.scss'
function BackgroundHeader() {
  return (
    <div className="header-container">
      <img className="header-background" src={bg} alt="background" />
      <div className="overlay">
        <h1>Dasar Coffee</h1>
        <h3>Reasons for Choosing Us</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          nostrum quis, odio veniam itaque ullam debitis qui magnam
          consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis
          qui magnam consequatur ab.
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
}

export default BackgroundHeader;
