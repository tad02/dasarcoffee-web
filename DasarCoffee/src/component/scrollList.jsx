import React, { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import './scrollList.css';
import image from '/cupcoffee.png'; // Adjust the path if necessary

Scrollbar.use(OverscrollPlugin);

const ScrollList = () => {
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
     if(listItems[0]) listItems[0].classList.add("item-focus")
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

  const renderItems = () => {
    let items = [];
    for (let i = 0; i <= 10; i++) {
      items.push(
        <div key={i} className="scroll-list__item js-scroll-list-item">
          <p className='nameOrder'>Drink</p>
          <img className='imageOrder' src={image} alt="Drink" />
        </div>
      );
    }
    return items;
  };

  const renderFoodItems = () => {
    let items = [];
    for (let i = 0; i <= 10; i++) {
      items.push(
        <div key={i} className="scroll-list__item js-scroll-list-item-food">
          <p className='nameOrder'>Food</p>
          <img className='imageOrder' src={image} alt="Food" />
        </div>
      );
    }
    return items;
  };

  return (
    <div className="wrapper">
      <div className="scroll-list">
        <div className="scroll-list__wrp js-scroll-content js-scroll-list">
          {renderItems()}
        </div>
      </div>
      <div className="scroll-list">
        <div className="scroll-list__wrp js-scroll-content-1 js-scroll-list-food">
          {renderFoodItems()}
        </div>
      </div>
    </div>
  );
};

export default ScrollList;
