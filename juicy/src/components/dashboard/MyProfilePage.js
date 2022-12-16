import React from "react";

const MyProfilePage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="h-[55rem] w-[80%] bg-orange-500 rounded-r-[5rem] flex justify-center items-center">
        <div className="h-[96%] m-4 w-[92%] bg-slate-200 rounded-r-[4rem] flex flex-col gap-4">
          <div className="w-full h-[16rem] flex gap-4 mx-8 mt-8">
            <section className="w-1/3 h-full bg-slate-300 rounded-xl flex justify-center">
              <div className=" mt-4 mb-4 rounded-full flex justify-center  h-[10rem] w-[10rem] overflow-hidden mx-4 bg-slate-200 ">
                <img src={""} className="object-cover h-[10rem]" alt="user" />
              </div>
            </section>
            <div className="w-[55%] h-full flex flex-col gap-4">
              <section className="w-full h-[7.5rem] bg-slate-300 rounded-xl"></section>

              <section className="w-full h-[7.5rem] bg-slate-300 rounded-xl"></section>
            </div>
          </div>
          <div className="w-[90%] h-[15rem] bg-slate-300 mx-8 rounded-xl"></div>
          <div className="w-[90%] h-[15rem] bg-slate-300 mx-8 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
