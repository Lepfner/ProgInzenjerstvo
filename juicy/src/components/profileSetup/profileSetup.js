import React, { useState, useEffect } from "react";
import PS1 from "./pS_page_1";
import PS2 from "./pS_page_2";
import PS3 from "./pS_page_3";
import Success from "./Success";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { isEmptyObject } from "../dashboard/utils/isEmptyObject";
const initialData = {
  name: "",
  surname: "",
  date_of_birth: "",
  gender: "",
  status: "",
  nationality: "",
  location: "",
  religion: "",
  height: "",
  hair_color: "",
  eye_color: "",
  work: "",
  education: "",
  profileimg: "",
  about: "",
  likes: [],
  dislikes: [],
};

function ProfileSetup() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const {userSet} = useAuth()
  const [formData, setFormData] = 
        useState(isEmptyObject(userSet) ? initialData : userSet);
  
  function checkUserToken() {
    if (localStorage.getItem("isLoggedIn") === 'false') {
      return navigate('/login');
    }
  }

  useEffect(() => {
    checkUserToken();
  },[])

  const updateData = (fields) => {
    setFormData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage((prev) => prev + 1);
  };

  const componentList = [
    <PS1
      {...formData}
      updateData={updateData}
      setPage={setPage}
      handleSubmit={handleSubmit}
    />,
    <PS2
      {...formData}
      updateData={updateData}
      setPage={setPage}
      handleSubmit={handleSubmit}
    />,
    <PS3
      formData={formData}
      updateData={updateData}
      setPage={setPage}
      handleSubmit={handleSubmit}
    />,
    <Success setPage={setPage} />,
  ];

  return (
    <div className="w-full flex flex-col items-center justify-between">
      <Toaster />
      <div className="h-24 w-full bg-orange-500 mb-8" />
      <div
        className="h-full flex flex-col justify-center max-w-[75%]
                     outline outline-orange-500 outline-[1rem] rounded-xl z-0
                     w-[100%]"
      >
        <div className="w-full rounded-xl p-12 z-10">
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-orange-600 h-4 rounded-full ease-in duration-500"
              style={{
                width:
                  page === 0
                    ? "25%"
                    : page === 1
                      ? "50%"
                      : page === 2
                        ? "75%"
                        : "100%",
              }}
            ></div>
          </div>

          <div className="flex justify-center items-center">
            {componentList[page]}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileSetup;
