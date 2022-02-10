import React from "react";
import { MenuItem, SubHeading } from "../../components";

import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu section__padding flex__center" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 style={{ marginTop: "1rem" }} className="headtext__cormorant">
        Today's Special
      </h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu-wine flex__center">
        <p className="app__specialMenu-menu-heading">Wine & Beer</p>
        <div className="app__specialMenu-menu-items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu-img">
        <img src={images.menu} alt="menu img" />
      </div>
      <div className="app__specialMenu-menu-cocktails flex__center">
        <p className="app__specialMenu-menu-heading">Cocktails</p>
        <div className="app__specialMenu-menu-items">
          {data.cocktails.map((cocktails, index) => (
            <MenuItem
              key={cocktails.title + index}
              title={cocktails.title}
              price={cocktails.price}
              tags={cocktails.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "10px" }}>
      <button className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
