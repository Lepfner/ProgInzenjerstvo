import React from "react";

const CarouselNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src="/images/nextArrow.png" />
    </div>
  );
}

export default CarouselNextArrow