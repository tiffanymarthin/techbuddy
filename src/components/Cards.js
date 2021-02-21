import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Tutorials for Popular Softwares</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.png"
              label="Youtube: Did you know?"
              path="/services"
            />
            <CardItem
              src="images/img-2.png"
              // text="Experience Football on Top of the Himilayan Mountains"
              label="Youtube: 5 Basic Settings"
              path="/products"
            />
            <CardItem
              src="images/img-3.png"
              label="Google: Things you should l.."
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
      <h1>Spotify</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/spotify-1.png"
              label="Getting Started Spotify"
              path="/services"
            />
            <CardItem
              src="images/spotify-2.png"
              label="Listen while Driving"
              path="/products"
            />
            <CardItem
              src="images/spotify-3.png"
              label="How to create a playlist"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
      <h1>Google Meets</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/google-1.png"
              // label="How to start a Meeting"
              path="/services"
            />
            <CardItem
              src="images/google-2.png"
              // label="Tips for Google Meets"
              path="/products"
            />
            <CardItem
              src="images/google-3.png"
              // label="Tools that they have"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
      <h1>Zoom</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/zoom-1.png"
              // label="Basic Features for Beginners"
              path="/services"
            />
            <CardItem
              src="images/zoom-2.png"
              // label="Download Zoom"
              path="/products"
            />
            <CardItem
              src="images/zoom-3.png"
              // label="Some useful Shortcuts"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
