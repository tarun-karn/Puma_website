import React from "react";

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero_content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero_button">
          <button>Shop Now</button>
          <button className="second-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand_logo">
            <img src="/image/flipkart.png" alt="flipkart" />
            <img src="/image/amazon.png" alt="amazon" />
          </div>
        </div>
      </div>

      <div className="shoe">
        <img src="/image/shoe.png" alt="shoe" />
      </div>
    </main>
  );
};

export default Hero;
