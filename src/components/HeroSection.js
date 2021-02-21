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
              Are you struggling with all these new technologies that suddenly
              become essentials because of Covid?
              <br />
              Do not panic - you are not alone! We are here to help you and
              guide you with our super step-by-step guide and descriptive
              visuals.
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
