import React from 'react';
import cupCoffee from '/cupcoffee.png'; // Adjust the path to your image
import './bottomHeader.css'

const BottomHeader = () => {
  return (
    <div className="bottom-header">
      <img className="bottom-header-image" src={cupCoffee} alt="Cup of Coffee" />
      <p className="bottom-header-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, molestias et! Debitis nisi labore sequi esse culpa nesciunt numquam pariatur, beatae vero officiis tempora odio voluptate. Nesciunt unde saepe quisquam.</p>
    </div>
  );
}

export default BottomHeader;
