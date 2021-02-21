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
    </div>
  );
}

export default Cards;
