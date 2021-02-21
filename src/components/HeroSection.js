import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <div class="hero-links">
        <div className="hero-link-wrapper">
          <div class="hero-link-items">
            <h2>Learn the latest technologies at Tech Buddy</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque aenean dictumst tincidunt sollicitudin suscipit
              fermentum. Imperdiet eget dictum at vitae tristique. Quis diam
              tincidunt amet, vel gravida. Ultrices odio imperdiet libero
              scelerisque.
            </p>
          </div>
        </div>
        <div className="hero-link-wrapper">
          <div class="hero-link-items">
            <img src="/images/img-landing.png"></img>
          </div>
        </div>
      </div>
      <div className="hero-btns"></div>
    </div>
  );
}

export default HeroSection;
