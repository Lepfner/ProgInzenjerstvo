import React from "react";
import nextArrow from "../images/nextArrow.png"

const CarouselNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={nextArrow} alt="next" />
    </div>
  );
}

export default CarouselNextArrow