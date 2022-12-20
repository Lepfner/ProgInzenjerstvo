import React from "react";
import myImage from "../images/prevArrow.png";

const CarouselPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={myImage} alt="prev" />
    </div>
  );
};

export default CarouselPrevArrow;

