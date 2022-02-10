import React from "react";
import { SubHeading } from "..";

import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter__heading">
      <SubHeading title="Newsletter" />
      <p className="headtext__cormorant">Subscribe To Our Newsletter</p>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter__input">
      <input placeholder="Enter yuor e-mail" type="text" />
      <button className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
