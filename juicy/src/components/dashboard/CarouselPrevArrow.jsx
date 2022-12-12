import React from "react";

const CarouselPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src="/images/prevArrow.png" alt="prev" />
    </div>
  );
};

export default CarouselPrevArrow;

