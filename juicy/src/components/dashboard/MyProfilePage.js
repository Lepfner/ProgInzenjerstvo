import React, { useState, useEffect } from "react";
import Header from "./Header";
import Location from "../images/Location.png";
import empty_avatar from "../images/empty_avatar.png";
import Chip from "@mui/material/Chip";
import { useNavigate } from "react-router-dom";
import { getRGBColor, getAccessibleColor } from "../dashboard/utils";
import axios from "../../api/axios";
import { calculateAge } from "./utils/calculateAge";
import useAuth from "../../hooks/useAuth";
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

const MyProfilePage = () => {
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);
  const { userSet, setUser} = useAuth()
  const primaryColor = getRGBColor(
    localStorage.getItem("currentColor"),
    "primary"
  );
  const a11yColor = getRGBColor(
    getAccessibleColor(localStorage.getItem("currentColor")),
    "a11y"
  );
  const navigate = useNavigate();
  const { auth } = useAuth();

  function checkUserToken() {
    if (localStorage.getItem("isLoggedIn") === "false") {
      return navigate("/login");
    }
  }

  function handleEdit(){
    navigate("/Setup")
  }

  useEffect(() => {
    checkUserToken();
    const fetch = async () => {
      const result = await axios(`users/${auth.id}`);
      setUser({...result.data, likes:likes, dislikes:dislikes});

      const likesRes = await axios(`likes/${auth.id}`);
      const dislikesRes = await axios(`dislikes/${auth.id}`);
      setLikes(likesRes.data.map(like => `${like.thing}`));
      setDislikes(dislikesRes.data.map(like => `${like.thing}`));
    };
    fetch();

    localStorage.setItem("vis", false);
  }, []);

  useEffect(()=>{
     setUser({ ...userSet, likes: likes, dislikes: dislikes });
  },[likes,dislikes])

  return (
    <>
      <style>:root {`{${primaryColor} ${a11yColor}}`}</style>
      <Header primaryColor={primaryColor} a11yColor={a11yColor} />
      <div className="w-full h-full  flex justify-center mt-4">
        <div className="min-h-[47rem] max-w-[910px] w-[80%] max-sm:w-[90%] shadow-2xl bg-skin-primary rounded-r-[5rem] flex justify-start items-center">
          <div className="h-[96%] mx-4 my-2 pb-4 w-[94%] shadow-2xl bg-slate-200 rounded-r-[4rem] flex flex-col gap-4 max-sm:w-[90%]">
            <div className="w-full min-h-[13rem] flex gap-4 mx-4 mt-8">
              <section className="w-[90%] h-full bg-slate-300 rounded-xl flex justify-start py-4 max-sm:flex-col max-sm:items-center">
                <div className="w-[36%] flex flex-col items-center ml-8 pr-4 border-r-2 border-skin-primary max-sm:border-b-2 max-sm:border-none max-sm:w-[90%] max-sm:mb-4">
                  <div className=" mt-4 mb-2 rounded-full flex justify-center h-[8rem] w-[8rem] overflow-hidden mx-4 bg-slate-200 ">
                    <img
                      src={userSet.profileimg || empty_avatar}
                      className="object-cover h-[8rem]"
                      alt="user"
                    />
                  </div>
                  <p className="">
                    {userSet.name} {userSet.surname}
                  </p>

                  <p>
                    <img
                      src={Location}
                      className="w-8 h-8 inline-block mix-blend-color-burn"
                      alt=""
                    />
                    {userSet.location}
                  </p>
                  <p className="">Age: {calculateAge(userSet.date_of_birth)}</p>
                </div>
                <div className="w-[63%] pl-8 pt-2 pb-4 text-lg max-sm:border-t-2 max-sm:border-skin-primary max-sm:w-[90%]">
                  <h3>
                    <span className="font-bold">Date of Birth:</span>
                    <span className="inline-block">
                      {" "}
                      {userSet.date_of_birth}
                    </span>
                  </h3>
                  <h3>
                    <span className="font-bold">Gender:</span> {userSet.gender}
                  </h3>
                  <h3>
                    <span className="font-bold">Nationality:</span>{" "}
                    {userSet.nationality}
                  </h3>
                  <h3>
                    <span className="font-bold">Status:</span> {userSet.status}
                  </h3>
                  <h3>
                    <span className="font-bold">Religion:</span>{" "}
                    {userSet.religion}
                  </h3>
                  <h3>
                    <span className="font-bold">Work:</span> {userSet.work}
                  </h3>
                  <h3>
                    <span className="font-bold">Education:</span>{" "}
                    {userSet.education}
                  </h3>
                  <button type="button" className="flex bg-skin-primary text-skin-a11y p-2 rounded-2xl mt-4" onClick={handleEdit}>Edit profile</button>
                </div>
                
              </section>
            </div>
            <section className="w-[90%] min-h-[13rem] bg-slate-300 mx-4 rounded-xl py-4 px-8">
              <h2 className="text-center text-2xl">About</h2>
              <p className="text-lg">
                {userSet.about}
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
