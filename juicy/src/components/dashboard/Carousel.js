import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
};

const Carousel = () => {
  const [Users, setUsers] = useState([])
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users?limit=5&skip=10&select=firstName,lastName,age,image")
      .then((res) => {
        const users = res.data.users
        console.log(users)
        setUsers(users)
      });
  }, []);
  
  return (
    
    <Slider {...settings}>
      { Users.map((user)=>{
        const { id, firstName, lastName, age, image } = user
        return (
          <div
            key={id}
            className="userDiv flex-col justify-end items-center w-full mt-8 h-full"
          >
            <div className="border-4 border-slate-500 rounded-full h-1/2 overflow-hidden mx-4">
              <img src={image} className="object-cover "/>
            </div>
            <p className="">
              {firstName} {lastName}
            </p>
            <p>{age}</p>
          </div>
        );
      })}
    </Slider>
  )
};

export default Carousel;
