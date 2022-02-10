import React from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__chef app__bg section__padding">
    <div className="app__chef__image">
      <img src={images.chef} alt="chef img" />
    </div>
    <div className="app__chef__info">
      <SubHeading title="chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__chef__text">
        <div className="text-quote">
          <img src={images.quote} alt="" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc. nunc.
          </p>
        </div>
      </div>
      <div className="app__chef__detail">
        <p className="app__chef__name">Kevin Luo</p>
        <p className="p__opensans" style={{ color: "#aaa" }}>
          Chef & Founder
        </p>
      </div>
      <div className="app__chef__sign">
        <img src={images.sign} alt="" />
      </div>
    </div>
  </div>
);

export default Chef;
