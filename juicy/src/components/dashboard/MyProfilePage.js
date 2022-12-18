import React from "react";
import Header from "./Header"
import Location from "../images/Location.png"
import logo from "../images/logo.png"
import Chip from "@mui/material/Chip"

const likes = ["Web Dev", "Nature", "Hiking", "Cycling", "Tehnology", "Good Company", "Interesting conversations","Gaming", "Learning", "Exercising"]
const dislikes = ["University", "Big social gatherings", "Small Talk", "Crowded places", "Wasting time"]
const MyProfilePage = () => {
  return (
    <>
      <Header />
      <div className="w-full h-full  flex justify-center mt-12">
        <div className="min-h-[47rem] max-w-[910px] w-[80%] max-sm:w-[90%] shadow-2xl bg-orange-500 rounded-r-[5rem] flex justify-start items-center">
          <div className="h-[96%] m-4 pb-8 w-[94%] shadow-2xl bg-slate-200 rounded-r-[4rem] flex flex-col gap-4 max-sm:w-[90%]">
            <div className="w-full min-h-[13rem] flex gap-4 mx-4 mt-8">
              <section className="w-[90%] h-full bg-slate-300 rounded-xl flex justify-start py-4 max-sm:flex-col max-sm:items-center">
                <div className="w-[36%] flex flex-col items-center ml-8 pr-4 border-r-2 border-orange-500 max-sm:border-b-2 max-sm:border-none max-sm:w-[90%] max-sm:mb-4">
                  <div className=" mt-4 mb-2 rounded-full flex justify-center h-[8rem] max-sm:h-[6rem] w-[8rem] max-sm:w-[6rem] overflow-hidden mx-4 bg-slate-200 ">
                    <img
                      src={logo}
                      className="object-cover h-[8rem] max-sm:h-[6rem]"
                      alt="user"
                    />
                  </div>
                  <p className="">Toni Grbić, 21</p>

                  <p>
                    <img
                      src={Location}
                      className="w-8 h-8 inline-block mix-blend-color-burn"
                    />
                    Split, Croatia
                  </p>
                </div>
                <div className="w-[63%] pl-8 pt-2 text-lg max-sm:border-t-2 max-sm:border-orange-500 max-sm:w-[90%]">
                  <h3>
                    <span className="font-bold">Date of Birth:</span> 31. 08.
                    2001.
                  </h3>
                  <h3>
                    <span className="font-bold">Nationality:</span> Croatian
                  </h3>
                  <h3>
                    <span className="font-bold">Status:</span> looking for
                    friendships
                  </h3>
                  <h3>
                    <span className="font-bold">Work:</span> Student
                  </h3>
                  <h3>
                    <span className="font-bold">Education:</span> CS major
                  </h3>
                  <h3>
                    <span className="font-bold">Religion:</span> Agnostic
                  </h3>
                </div>
              </section>
            </div>
            <div className="w-[90%] min-h-[13rem] bg-slate-300 mx-4 rounded-xl p-4">
              <h2 className="text-center text-2xl">About</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                non porta eros. Donec eget diam at ante lacinia cursus.
                Phasellus dignissim tortor nibh, at accumsan sem suscipit vitae.
                Donec at porttitor risus, nec molestie justo. Pellentesque
                vestibulum, nunc a viverra pulvinar, metus mauris facilisis
                augue, eget feugiat nunc diam ut diam. Ut non elit nec magna
                molestie gravida ac vitae velit.
              </p>
            </div>
            <div className="w-[90%] min-h-[13rem] bg-slate-300 mx-4 rounded-xl p-4">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfilePage;
