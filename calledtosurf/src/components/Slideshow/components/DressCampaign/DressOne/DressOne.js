import React from "react";
import "../../SlideShowStyles/SlideShowStyles.css";
import "./DressOne.css";
import ImageOne from "../../../assets/DressImages/dress.png";

const DressOne = props => {
  return (
    <div className="main flex-ctr-col">
      <a href="#">
        <img id="img-container" src={ImageOne} width="1300" alt="fashion" />
      </a>
      <div id="position-1" className="shopNow">
        <h1>This is a Title</h1>
        <h3>This is sub-text</h3>
        <a href="#" id="btn-style-dressOne">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default DressOne;
