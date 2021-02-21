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
            <p>What are you waiting for?</p>
          </div>
        </div>
        <div className="hero-link-wrapper">
          <div class="hero-link-items">
            <h1>Learn the latest technologies at Tech Buddy</h1>
            <p>What are you waiting for?</p>
          </div>
        </div>
      </div>
      <div className="hero-btns"></div>
    </div>
  );
}

export default HeroSection;
