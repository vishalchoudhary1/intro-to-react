import React from 'react';
import foodmenu1 from '../assets/food-menu1.jpg'
function FoodMenu() {
  return (
    <section id="food-menu">
      <h2 className="food-menu-heading">Food Menu</h2>
      <div className="food-menu-container container">
        <div className="food-menu-item">
          <div className="food-image">
            <img src={foodmenu1} alt="" />
          </div>
          <div className="food-description">
            <h2 className="food-title">Food Menu title 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, a?</p>
            <p className="food-price">Price: &#8377; 250</p>
          </div>
        </div>

        <div className="food-menu-item">
          <div className="food-image">
            <img src="./img/food-menu2.jpg" alt="" />
          </div>
          <div className="food-description">
            <h2 className="food-title">Food Menu title 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, a?</p>
            <p className="food-price">Price: &#8377; 250</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoodMenu;
