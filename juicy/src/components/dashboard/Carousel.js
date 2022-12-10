import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselNextArrow from "./CarouselNextArrow";
import CarouselPrevArrow from "./CarouselPrevArrow";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <CarouselPrevArrow />,
  nextArrow: <CarouselNextArrow />,
};

const Carousel = () => {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users?limit=10&select=firstName,lastName,age,image")
      .then((res) => {
        const users = res.data.users;
        setUsers(users);
      });
  }, []);

  return (
    <div>
      <Slider {...settings}>
        {Users.map((user) => {
          const { id, firstName, lastName, age, image } = user;
          return (
            <div
              key={id}
              className="userDiv flex-col justify-end items-center w-full mt-8 mb-4 h-full"
            >
              <div className="border-4 border-green-300 mb-4 rounded-full h-[10rem] overflow-hidden mx-4 bg-slate-200">
                <img
                  src={image}
                  className="object-cover h-[10rem]"
                  alt="user"
                />
              </div>
              <div
                className="flex flex-col mb-8 h-auto max-h-[15rem] overflow-y-auto py-4 items-center
                           rounded-2xl bg-slate-200 w-3/4 "
              >
                <p className="font-bold mt-2 text-lg">
                  {firstName} {lastName}
                </p>
                <p className="text-lg">
                  <span className="font-bold">Age:</span> {age}
                </p>
                <p className="font-bold text-lg">Description:</p>
                <p className="text-center w-[90%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ut interdum ex, in iaculis dui. Integer eget orci elit.
                  Pellentesque sit amet elit sit amet dui interdum laoreet. In
                  lobortis volutpat erat a dapibus.
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
