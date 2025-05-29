import React from "react";
import Navbar from "./NavBar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Spice</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="./hero1.avif" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Soul</h1>
                <h1 className="title dishes_title">Dishes</h1>
                <img src="./threelines.svg" alt="threelines" />
              </div>
              <img className="logo" src="logo.svg" alt="logo" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="hero2.avif" alt="hero" />
          </div>
          <h1 className="title dishes_title">Serve</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;