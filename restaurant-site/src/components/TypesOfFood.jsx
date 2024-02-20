import React from "react";
import food1 from "../assets/food1.jpg"
import food2 from "../assets/food2.jpg"
import food3 from "../assets/food3.jpg"
function TypesOfFood() {
  return (
    <section id="food">
      <h2>Types of Food</h2>
      <div className="food-container container">
        <div className="food-types fruits">
          <div className="img-container">
            <img src={food1} alt="" />
            <div className="img-content">
              <h3>Fruit</h3>
              <a
                href="https://en.wikipedia.org/wiki/Food"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="food-types vegetables">
          <div className="img-container">
            <img src={food2} alt="" />
            <div className="img-content">
              <h3>Vegetables</h3>
              <a
                href="https://en.wikipedia.org/wiki/Vegetable"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="food-types grain">
          <div className="img-container">
            <img src={food3} alt="" />
            <div className="img-content">
              <h3>Grain</h3>
              <a
                href="https://en.wikipedia.org/wiki/Grain"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TypesOfFood;
