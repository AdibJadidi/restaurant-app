import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menu-item">
    <div className="app__menu-item__head">
      <div className="app__menu-item__title">
        <p className="p__cormorant p__cormorant--golden">{title}</p>
      </div>
      <div
        style={{
          width: "90px",
          height: "1px",
          backgroundColor: "var(--color-golden)",
          margin: "0 1rem",
        }}
      />
      <div className="app__menu-item__price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>
    <div className="app__menu-item__sub">
      <p className="p__opensans" style={{ color: "#aaa" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
