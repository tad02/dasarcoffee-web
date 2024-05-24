import React, { useEffect, useState } from 'react';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import './scrollList.css';
import { SocialIcon } from 'react-social-icons';
import SocialMediaLink from './socialMediaLink';
import logo from '/dasar.jpg';
import { Link } from 'react-router-dom';

Scrollbar.use(OverscrollPlugin);

const ScrollList = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  useEffect(() => {
    const scrollContainer = document.querySelector('.js-scroll-list');
    const scrollContainerFood = document.querySelector('.js-scroll-list-food');

    const customScroll = Scrollbar.init(scrollContainer, {
      plugins: {
        overscroll: { effect: 'bounce' }
      }
    });

    const customScrollFood = Scrollbar.init(scrollContainerFood, {
      plugins: {
        overscroll: { effect: 'bounce' }
      }
    });

    const handleScroll = (status) => {
      const content = document.querySelector('.js-scroll-content');
      const top = status.offset.y;
      const listItems = document.querySelectorAll('.js-scroll-list-item');

      if (listItems[0]) listItems[0].classList.add("item-focus");

      listItems.forEach((li) => {
        const liTop = li.getBoundingClientRect().top;
        const liRelTop = liTop - content.getBoundingClientRect().top;
        if (liRelTop + li.parentElement.scrollTop > top) {
          if (li.nextElementSibling)
            li.nextElementSibling.classList.add('item-next');
        }
      });
    };

    const handleScrollFood = (status) => {
      const content = document.querySelector('.js-scroll-content-1');
      const top = status.offset.y;
      const listItems = document.querySelectorAll('.js-scroll-list-item-food');

      if (listItems[0]) listItems[0].classList.add("item-focus");

      listItems.forEach((li) => {
        const liTop = li.getBoundingClientRect().top;
        const liRelTop = liTop - content.getBoundingClientRect().top;
        if (liRelTop + li.parentElement.scrollTop > top) {
          if (li.nextElementSibling)
            li.nextElementSibling.classList.add('item-next');
        }
      });
    };

    customScroll.addListener(handleScroll);
    customScrollFood.addListener(handleScrollFood);

    return () => {
      customScroll.removeListener(handleScroll);
      customScroll.destroy();
      customScrollFood.removeListener(handleScrollFood);
      customScrollFood.destroy();
    };
  }, []);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const renderItems = () => {
    let itemList = [
      {
        name: 'Coffee sữa',
        image: 'cupcoffee.png',
        description: 'A delicious coffee with milk.'
      },
      {
        name: 'Trà xanh',
        image: 'greentea.png',
        description: 'Refreshing green tea.'
      },
      {
        name: 'Nước cam',
        image: 'drink/orangejuice.png',
        description: 'Freshly squeezed orange juice.'
      }
    ];

    return itemList.map((item, i) => (
      <div key={i} className={`scroll-list__item js-scroll-list-item ${flippedIndex === i ? 'is-flipped' : ''}`} onClick={() => handleFlip(i)}>
        <div className="scroll-list__item-inner">
          <div className="scroll-list__item-front">
            <p className='nameOrder'>{item.name}</p>
            <img className='imageOrder' src={item.image} alt={item.name} />
          </div>
          <div className="scroll-list__item-back">
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    ));
  };

  const renderFoodItems = () => {
    let itemList = [
      {
        name: 'Coffee sữa',
        image: 'cupcoffee.png',
        description: 'A delicious coffee with milk.'
      },
      {
        name: 'Trà xanh',
        image: 'greentea.png',
        description: 'Refreshing green tea.'
      },
      {
        name: 'Nước cam',
        image: 'drink/orangejuice.png',
        description: 'Freshly squeezed orange juice.'
      }
    ];

    return itemList.map((item, i) => (
      <div key={i} className={`scroll-list__item js-scroll-list-item-food ${flippedIndex === i ? 'is-flipped' : ''}`} onClick={() => handleFlip(i)}>
        <div className="scroll-list__item-inner">
          <div className="scroll-list__item-front">
            <p className='nameOrder'>{item.name}</p>
            <img className='imageOrder' src={item.image} alt={item.name} />
          </div>
          <div className="scroll-list__item-back">
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="nav-container">
        <Link to={"/"} className="logo-link">
          <img src={logo} className="logo" alt="Dasar Coffee" />
        </Link>
      </div>
      <div className="wrapper">
        <div className="scroll-list">
          <div>
            <p className='typeOrderName'>Drink</p>
          </div>
          <div className="scroll-list__wrp js-scroll-content js-scroll-list">
            {renderItems()}
          </div>
        </div>
        <div className="scroll-list">
          <p className='typeOrderName'>Food</p>
          <div className="scroll-list__wrp js-scroll-content-1 js-scroll-list-food">
            {renderFoodItems()}
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollList;
