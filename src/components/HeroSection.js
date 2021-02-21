import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Learn the latest technologies at Tech Buddy</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns"></div>
    </div>
  );
}

export default HeroSection;
