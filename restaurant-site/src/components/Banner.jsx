import React from "react";

function Banner() {
  return (
    <section className="showcase-area" id="showcase">
      <div className="showcase-container">
        <h1 className="main-title">Eat Right Food</h1>
        <p>Eat Healthy food, it is good for your health.</p>
        <a href="#food-menu" className="btn btn-primary">
          Menu
        </a>
      </div>
    </section>
  );
}

export default Banner;