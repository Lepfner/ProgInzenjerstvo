import React from "react";
import prevArrow from "../images/prevArrow.png"

const CarouselPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={prevArrow} alt="prev" />
    </div>
  );
};

export default CarouselPrevArrow;

