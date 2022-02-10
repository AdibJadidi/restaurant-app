import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__wrapper flex__center app__bg section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1
        className="headtext__cormorant"
        style={{
          marginBottom: "3rem",
        }}
      >
        Find Us
      </h1>
      <p
        className="p__opensans"
        style={{
          color: "#aaa",
        }}
      >
        Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
      </p>
      <p
        className="p__cormorant"
        style={{
          margin: "2rem 0 1rem",
          fontSize: "23px",
          color: "var(--color-golden)",
        }}
      >
        Opening Hours
      </p>
      <p
        className="p__opensans"
        style={{
          margin: "0 0 0.5rem",
        }}
      >
        Mon - Fri: 10:00 am - 02:00 am
      </p>
      <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      <button
        className="custom__button"
        style={{
          marginTop: "2rem",
        }}
      >
        Visit Us
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="" />
    </div>
  </div>
);

export default FindUs;
