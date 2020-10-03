import React from "react";
import hero from "../img/hero.png";
const Hero = () => {
  return (
    <div className="Hero-container">
      <div className="hero-image">
        <img src={hero} />
      </div>
      <div className="hero-description">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p className="hero-description-paragraf">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia eum
          vitae, dolor voluptatibus eius odio quos ipsam obcaecati quia iure
          fugit eligendi optio maiores earum cupiditate, culpa totam magni
          perspiciatis?
        </p>
        <button className="hero-description-button">OUR PRODUCTS</button>
      </div>
    </div>
  );
};

export default Hero;
