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
  const [flippedDrinkIndex, setFlippedDrinkIndex] = useState(null);
  const [flippedFoodIndex, setFlippedFoodIndex] = useState(null);
  const [flippedSmoothieAndJuiceIndex, setFlippedSmoothieAndJuiceIndex] = useState(null);
  const [flippedSodaIndex, setFlippedSodaIndex] = useState(null);
  const handleFlipDrink = (index) => {
    setFlippedDrinkIndex(flippedDrinkIndex === index ? null : index);
  };
  const handleFlipSoda = (index) => {
    setFlippedSodaIndex(flippedSodaIndex === index ? null : index);
  };

  const handleFlipFood = (index) => {
    setFlippedFoodIndex(flippedFoodIndex === index ? null : index);
  };
  
  const handleFlipSmoothieAndJuice = (index) => {
    setFlippedSmoothieAndJuiceIndex(flippedSmoothieAndJuiceIndex === index ? null : index);
  };
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


    return () => {
      };
  }, []);

 

  const typeItem = {
    coffee: {
      func: handleFlipDrink,
      val: flippedDrinkIndex
    },
    soda: {
      func: handleFlipSoda,
      val: flippedSodaIndex
    },
    juice:{
      func: handleFlipSmoothieAndJuice,
      val: flippedSmoothieAndJuiceIndex
    }
    
  }
  const itemsJuice = [
    {
      name: 'Bơ',
      engName: 'Avocado',
      image: 'smoothie/avocado.png',
      price: '30.000 vnd',
      description: 'Sinh tố bơ bổ dưỡng và mịn màng.'
    },
    {
      name: 'Sapôchê',
      engName: 'Sapodilla',
      image: 'smoothie/sapoche.png',
      price: '25.000 vnd',
      description: 'Nước ép trái sapôchê tươi mát.'
    },
    {
      name: 'Sapoche Coffee',
      engName: 'Sapodilla Coffee',
      image: 'smoothie/sapoche_coffee.png',
      price: '35.000 vnd',
      description: 'Sự kết hợp độc đáo giữa trái sapôchê và cà phê.'
    },
    {
      name: 'Dâu',
      engName: 'Strawberry',
      image: 'smoothie/strawberry.png',
      price: '28.000 vnd',
      description: 'Sinh tố dâu tây ngon và tươi.'
    },
    {
      name: 'Dưa lưới',
      engName: 'Cantaloupe',
      image: 'smoothie/cantaloupe.png',
      price: '32.000 vnd',
      description: 'Sinh tố dưa lưới ngọt và tươi mát.'
    },
    {
      name: 'Đu đủ',
      engName: 'Papaya',
      image: 'smoothie/papaya.png',
      price: '30.000 vnd',
      description: 'Sinh tố đu đủ bổ dưỡng và ngon miệng.'
    },
    {
      name: 'Xoài',
      engName: 'Mango',
      image: 'smoothie/mango.png',
      price: '30.000 vnd',
      description: 'Sinh tố xoài nhiệt đới và tươi mát.'
    },
    {
      name: 'Mãng cầu',
      engName: 'Annona',
      image: 'smoothie/annona.png',
      price: '32.000 vnd',
      description: 'Sinh tố mãng cầu độc đáo và mịn màng.'
    },
    {
      name: 'Cà chua',
      engName: 'Tomato',
      image: 'smoothie/tomato.png',
      price: '25.000 vnd',
      description: 'Sinh tố cà chua tươi và thơm.'
    },
    {
      name: 'Mít',
      engName: 'Jackfruit',
      image: 'smoothie/jackfruit.png',
      price: '30.000 vnd',
      description: 'Sinh tố mít ngọt và thơm.'
    },
    {
      name: 'Dưa hấu',
      engName: 'Watermelon',
      image: 'smoothie/watermelon.png',
      price: '32.000 vnd',
      description: 'Sinh tố dưa hấu mọng nước và tươi mát.'
    }
  ];
  
  const itemsCoffee = [
    {
      name: 'Cà phê đen',
      engName: 'Black Coffee',
      image: 'coffee/black_coffee.png',
      price: '15.000 vnd',
      description: 'Cà phê đen mạnh và thơm.'
    },
    {
      name: 'Cà phê nâu',
      engName: 'Brown Coffee',
      image: 'coffee/brown_coffee.png',
      price: '18.000 vnd',
      description: 'Cà phê nâu đậm đà và hương vị.'
    },
    {
      name: 'Cà phê sữa',
      engName: 'White Coffee',
      image: 'coffee/white_coffee.png',
      price: '22.000 vnd',
      description: 'Cà phê sữa mịn màng và ngọt ngào.'
    },
    {
      name: 'Cà phê sữa tươi',
      engName: 'Milk Coffee',
      image: 'coffee/milk_coffee.png',
      price: '25.000 vnd',
      description: 'Cà phê sữa tươi đậm đà và mịn màng.'
    },
    {
      name: 'Americano',
      engName: 'Americano',
      image: 'coffee/americano.png',
      price: '25.000 vnd',
      description: 'Cà phê Americano cổ điển và đậm đà.'
    },
    {
      name: 'Ca cao',
      engName: 'Cacao',
      image: 'coffee/cacao.png',
      price: '25.000 vnd',
      description: 'Thức uống ca cao đậm đà và sô cô la.'
    }
  ];
  
  const itemsSoda = [
    {
      name: 'Soda Việt quất',
      engName: 'Blueberry Soda',
      image: 'soda/blueberry_soda.png',
      price: '30.000 vnd',
      description: 'Thức uống soda việt quất tươi mát.'
    },
    {
      name: 'Soda Kiwi',
      engName: 'Kiwi Soda',
      image: 'soda/kiwi_soda.png',
      price: '30.000 vnd',
      description: 'Thức uống soda kiwi chua ngọt.'
    },
    {
      name: 'Soda Dâu',
      engName: 'Strawberry Soda',
      image: 'soda/strawberry_soda.png',
      price: '28.000 vnd',
      description: 'Thức uống soda dâu tươi và ngon.'
    },
    {
      name: 'Soda Chanh dây',
      engName: 'Passion Fruit Soda',
      image: 'soda/passion_fruit_soda.png',
      price: '30.000 vnd',
      description: 'Thức uống soda chanh dây nhiệt đới và chua ngọt.'
    },
    {
      name: 'Soda Vải',
      engName: 'Lychee Soda',
      image: 'soda/lychee_soda.png',
      price: '30.000 vnd',
      description: 'Thức uống soda vải ngọt và tươi mát.'
    },
    {
      name: 'Soda Dưa lưới',
      engName: 'Melon Soda',
      image: 'soda/melon_soda.png',
      price: '32.000 vnd',
      description: 'Thức uống soda dưa lưới mọng nước và thơm.'
    },
    {
      name: 'Soda Nho',
      engName: 'Grape Soda',
      image: 'soda/grape_soda.png',
      price: '32.000 vnd',
      description: 'Thức uống soda nho ngọt và có gas.'
    },
    {
      name: 'Soda Đào',
      engName: 'Peach Soda',
      image: 'soda/peach_soda.png',
      price: '28.000 vnd',
      description: 'Thức uống soda đào ngọt và thơm.'
    }
  ];
  


  const renderItems = (items,type) => {
    let itemList = items;
    
    return itemList.map((item, i) => (
      <div key={i} className={`item-next scroll-list__item js-scroll-list-item ${type.val === i ? 'is-flipped' : ''}`} onClick={() => type.func(i)}>
        <div className="scroll-list__item-inner">
          <div className="scroll-list__item-front">
            <p className='nameOrder'>{item.name}</p>
            <img className='imageOrder' src={item.image} alt={item.name} hidden/>
          </div>
          <div className="scroll-list__item-back">
            <p className='descriptionItem'>{item.description}</p>
            <p className='priceItem'>{item.price}</p>
          </div>
        </div>
      </div>
    ));
  };



  const renderFoodItems = () => {
    let itemList = [
      
    ];

    return itemList.map((item, i) => (
      <div key={i} className={`item-next scroll-list__item js-scroll-list-item ${flippedFoodIndex === i ? 'is-flipped' : ''}`} onClick={() => handleFlipFood(i)}>
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
            <p className='typeOrderName'>Coffee</p>
          </div>
          <div className="scroll-list__wrp js-scroll-content js-scroll-list">
            {renderItems(itemsCoffee,typeItem.coffee)}
          </div>
        </div>
        <div className="scroll-list">
          <div>
            <p className='typeOrderName'>Soda</p>
          </div>
          <div className="scroll-list__wrp js-scroll-content js-scroll-list">
            {renderItems(itemsJuice,typeItem.juice)}
          </div>
        </div>
        <div className="scroll-list">
          <div>
            <p className='typeOrderName'>Juice</p>
          </div>
          <div className="scroll-list__wrp js-scroll-content js-scroll-list">
            {renderItems(itemsJuice,typeItem.juice)}
          </div>
        </div>

        <div className="scroll-list">
          <p className='typeOrderName'>Food</p>
          <div className="scroll-list__wrp js-scroll-content js-scroll-list js-scroll-list-food">
            <h1>COMING SOON</h1>
            {/* {renderFoodItems()} */}
          </div>
        </div>
      </div>
    </>
  );
}
export default ScrollList;