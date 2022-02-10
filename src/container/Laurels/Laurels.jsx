import React from "react";
import { SubHeading } from "../../components";
import { data, images } from "../../constants";

import "./Laurels.css";

const Laurels = () => (
  <div
    className="app__laurels app__bg flex__center section__padding "
    id="awards"
  >
    <div className="app__laurels__info">
      <div className="app__laurels__heading">
        <SubHeading title="Awards & recognition" />
        <h1 className="headtext__cormorant ">Our Laurels</h1>
      </div>
      <div className="laurels__list__items">
        {data.awards.map((award) => (
          <div className="list__item">
            <div className="list__image">
              <img src={award.imgUrl} alt="" />
            </div>
            <div className="list__detail">
              <p className="p__cormorant p__cormorant--golden">{award.title}</p>
              <p className="p__opensans" style={{ color: "#aaa" }}>
                {award.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="app__laurels__img">
      <img src={images.laurels} alt="" />
    </div>
  </div>
);

export default Laurels;
