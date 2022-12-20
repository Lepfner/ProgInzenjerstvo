import React from "react";
import myImage from "../images/nextArrow.png";

const CarouselNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={myImage} alt="next" />
    </div>
  );
}

export default CarouselNextArrow