import React from "react";

import masterChief from "../images/masterchief.jpg";

const HomePage = ({ imageSize }) => {
  return (
    <>
      <div className="window-container">
        <div className="page-container">
          <h1>Framer Motion</h1>
          <div className="image-container">
            <div
              className="thumbnail"
              style={{ width: imageSize.width, height: imageSize.height }}
            >
              {/* <img src={masterChief} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
