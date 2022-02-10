import React, { useRef } from "react";
import { SubHeading } from "../../components";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsInstagram,
} from "react-icons/bs";

import "./Gallery.css";
import { images } from "../../constants";

const Gallery = () => {
  const galleryImages = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];

  const scrollRef = useRef(null);
  const scrollHandler = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery__content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant" style={{ marginTop: "2rem" }}>
          Photo Gallery
        </h1>
        <p className="p__opensans" style={{ marginTop: "3rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button className="custom__button" style={{ marginTop: "1rem" }}>
          View More
        </button>
      </div>
      <div className="app__gallery__images">
        <div className="gallery__images__container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="gallery__images__card flex__center">
              <img src={image} alt="gallery img" />
              <BsInstagram className="gallery__images__icon" />
            </div>
          ))}
        </div>
        <div className="gallery__images__arrows">
          <BsArrowLeftShort
            className="gallery__images__arrow-icon"
            onClick={() => scrollHandler("left")}
          />
          <BsArrowRightShort
            className="gallery__images__arrow-icon"
            onClick={() => scrollHandler("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
