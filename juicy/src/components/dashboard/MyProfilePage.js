import React, { useState } from "react";
import Header from "./Header";
import Location from "../images/Location.png";
import logo from "../images/logo.png";
import Chip from "@mui/material/Chip";

const likesArr = [
  "Web Dev",
  "Nature",
  "Hiking",
  "Cycling",
  "Tehnology",
  "Good Company",
  "Interesting conversations",
  "Gaming",
  "Learning",
  "Exercising",
];
const dislikesArr = [
  "University",
  "Big social gatherings",
  "Small Talk",
  "Crowded places",
  "Wasting time",
];
const user = {
  firstName: "Toni",
  lastName: "Grbić",
  gender: "Male",
  age: 21,
  location: "Split, Croatia",
  dateOfBirth: "31. 08. 2001.",
  nationality: "Croatian",
  status: "looking for friendships",
  religion: "Agnostic",
};

const MyProfilePage = () => {
  const [likes, setLikes] = useState(likesArr);
  const [dislikes, setDislikes] = useState(dislikesArr);
  const [userData, setUserData] = useState(user);

  const {
    firstName,
    lastName,
    gender,
    age,
    location,
    dateOfBirth,
    nationality,
    status,
    religion,
  } = userData;

  return (
    <>
      <Header />
      <div className="w-full h-full  flex justify-center mt-4">
        <div className="min-h-[47rem] max-w-[910px] w-[80%] max-sm:w-[90%] shadow-2xl bg-orange-500 rounded-r-[5rem] flex justify-start items-center">
          <div className="h-[96%] mx-4 my-2 pb-4 w-[94%] shadow-2xl bg-slate-200 rounded-r-[4rem] flex flex-col gap-4 max-sm:w-[90%]">
            <div className="w-full min-h-[13rem] flex gap-4 mx-4 mt-8">
              <section className="w-[90%] h-full bg-slate-300 rounded-xl flex justify-start py-4 max-sm:flex-col max-sm:items-center">
                <div className="w-[36%] flex flex-col items-center ml-8 pr-4 border-r-2 border-orange-500 max-sm:border-b-2 max-sm:border-none max-sm:w-[90%] max-sm:mb-4">
                  <div className=" mt-4 mb-2 rounded-full flex justify-center h-[8rem] w-[8rem] overflow-hidden mx-4 bg-slate-200 ">
                    <img
                      src={logo}
                      className="object-cover h-[8rem]"
                      alt="user"
                    />
                  </div>
                  <p className="">
                    {firstName} {lastName}, {age}
                  </p>

                  <p>
                    <img
                      src={Location}
                      className="w-8 h-8 inline-block mix-blend-color-burn"
                    />
                    {location}
                  </p>
                </div>
                <div className="w-[63%] pl-8 pt-2 pb-4 text-lg max-sm:border-t-2 max-sm:border-orange-500 max-sm:w-[90%]">
                  <h3>
                    <span className="font-bold">Date of Birth:</span>
                    <span className="inline-block"> {dateOfBirth}</span>
                  </h3>
                  <h3>
                    <span className="font-bold">Gender:</span> {gender}
                  </h3>
                  <h3>
                    <span className="font-bold">Nationality:</span>{" "}
                    {nationality}
                  </h3>
                  <h3>
                    <span className="font-bold">Status:</span> {status}
                  </h3>
                  <h3>
                    <span className="font-bold">Religion:</span> {religion}
                  </h3>
                </div>
              </section>
            </div>
            <section className="w-[90%] min-h-[13rem] bg-slate-300 mx-4 rounded-xl py-4 px-8">
              <h2 className="text-center text-2xl">About</h2>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                non porta eros. Donec eget diam at ante lacinia cursus.
                Phasellus dignissim tortor nibh, at accumsan sem suscipit vitae.
                Donec at porttitor risus, nec molestie justo. Pellentesque
                vestibulum, nunc a viverra pulvinar, metus mauris facilisis
                augue, eget feugiat nunc diam ut diam. Ut non elit nec magna
                molestie gravida ac vitae velit.
              </p>
            </section>
            <section className="w-[90%] min-h-[13rem] bg-slate-300 mx-4 rounded-xl px-8 py-4">
              <h2 className="text-center text-2xl">Likes & Dislikes</h2>
              <h3 className="text-lg">Likes:</h3>

              {likes.map((like, index) => {
                return (
                  <Chip
                    className="font-bold m-[0.15rem]"
                    variant="filled"
                    label={like}
                    key={index}
                  />
                );
              })}
              <h3 className="text-lg">Dislikes:</h3>
              {dislikes.map((dislike, index) => {
                return (
                  <Chip
                    className="font-bold m-[0.15rem]"
                    variant="filled"
                    label={dislike}
                    key={index}
                  />
                );
              })}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfilePage;
