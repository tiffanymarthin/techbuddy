import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>What is Tech Buddy?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque aenean dictumst tincidunt sollicitudin suscipit
              fermentum. Imperdiet eget dictum at vitae tristique. Quis diam
              tincidunt amet, vel gravida. Ultrices odio imperdiet libero
              scelerisque.
            </p>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>How to Use?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque aenean dictumst tincidunt sollicitudin suscipit
              fermentum. Imperdiet eget dictum at vitae tristique. Quis diam
              tincidunt amet, vel gravida. Ultrices odio imperdiet libero
              scelerisque.
            </p>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <small class="website-rights">TRVL © 2020</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
