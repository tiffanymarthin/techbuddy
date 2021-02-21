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
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              TRVL
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">TRVL © 2020</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
