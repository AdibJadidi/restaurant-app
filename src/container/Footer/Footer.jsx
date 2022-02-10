import React from "react";

import { RiInstagramLine, RiTwitterLine, RiFacebookFill } from "react-icons/ri";

import { FooterOverlay, Newsletter } from "../../components";
import images from "../../constants/images";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer  flex__center section__padding" id="contact">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-info">
      <div className="footer-info__contact">
        <h1 className="p__cormorant">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>
      <div className="footer-info__logo">
        <h1 className="headtext__cormorant">Gerícht</h1>
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <div className="footer-info__spoon">
          <img src={images.spoon} alt="" />
        </div>
        <div className="footer-info__social">
          <RiFacebookFill />
          <RiTwitterLine style={{ margin: "0 1rem 0" }} />
          <RiInstagramLine />
        </div>
      </div>
      <div className="footer-info__work-time">
        <h1 className="p__cormorant">Working Hours</h1>
        <div>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 am -12:00 am</p>
        </div>
        <div>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00am -11:00 pm</p>
        </div>
      </div>
    </div>
    <div className="app__footer-copyright">
      <p className="p__opensans" style={{ color: "#999" }}>
        2021 Gerícht. All Rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
