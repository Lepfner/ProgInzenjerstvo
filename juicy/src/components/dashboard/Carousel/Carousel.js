import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselNextArrow from "../Carousel/CarouselNextArrow";
import CarouselPrevArrow from "../Carousel/CarouselPrevArrow";
import { useNavigate } from "react-router-dom";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
  prevArrow: <CarouselPrevArrow />,
  nextArrow: <CarouselNextArrow />,
};

const Carousel = ({ items }) => {
  useEffect(() => {
    if (!localStorage.getItem("ageMin")) {
      localStorage.setItem("ageMin", 18);
      localStorage.setItem("ageMax", 99);
    }
  });

  const genderValue = localStorage.getItem("genderValue");

  const navigate = useNavigate();
  return (
    <div className="px-[1rem]">
      <Slider {...settings}>
        {items &&
          items
            .filter((age) => age.age >= localStorage.getItem("ageMin"))
            .filter((age) => age.age <= localStorage.getItem("ageMax"))
            .filter((gender) => {   //Potrebna dorada, filter jos ne radi, razlog nepoznat
              if (
                localStorage.getItem("genderValue") &&
                gender.gender !== localStorage.getItem("genderValue")
              )
                return false;
              return true;
            })
            .map((user) => {
              const { id, name, surname, age, profileimg, gender, eye_color } =
                user;
              return (
                <div
                  onClick={() => navigate(`/profile/${id}`)}
                  key={id}
                  className="userDiv flex-col justify-end items-center w-full mt-4 pt-4 mb-4 h-full bg-slate-100 w-5/6 border-[0.6rem] 
                         border-skin-primary rounded-3xl"
                >
                  <div className="border-4 border-green-300 mb-4 rounded-full h-[10rem] overflow-hidden mx-4 bg-slate-200">
                    <img
                      src="https://assets1.cbsnewsstatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg"
                      className="object-cover h-[10rem]"
                      alt=''
                    />
                  </div>
                  <div
                    className="flex flex-col mb-8 h-auto max-h-[15rem] overflow-y-auto py-2 items-center
                           rounded-2xl bg-slate-200 w-[90%] "
                  >
                    <p className="font-bold mt-2 text-lg">
                      {name} {surname}
                    </p>
                    <p className="text-lg">
                      <span className="font-bold">Age:</span> {age}
                    </p>
                    <p className="font-bold text-lg">Description:</p>
                    <p className="text-center w-[90%]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras ut interdum ex, in iaculis dui.
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
