//Dependencies
import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
//Components
import Header from "./Header";
import Search from "./Search";
import { getRGBColor, getAccessibleColor } from "../dashboard/utils";


const MyProfilePage = () => {
  const primaryColor = getRGBColor(
    localStorage.getItem("currentColor"),
    "primary"
  );
  const a11yColor = getRGBColor(
    getAccessibleColor(localStorage.getItem("currentColor")),
    "a11y"
  );
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);

  function checkUserToken() {
    if (localStorage.getItem("isLoggedIn") === "false") {
      return navigate("/login");
    }
  }

  useEffect(() => {
    checkUserToken();
    const fetch = async () => {
      if (query === "") {
        const result = await axios(`/users`);
        setItems(result.data);
      } else {
        const result = await axios(`/search/${query}`);
        setItems(result.data);
      }
    };
    fetch();
  }, [query]);

  async function deleteHandler(userID) {

    const newItems = items.filter(user => user.id !== userID)
    setItems(newItems)

    try {
      const response = await axios.delete(`/delete/${userID}`);
      console.log(response);
      toast.success("user deleted!");
    } catch (error) {
      toast.error("and error has occured");
    }
  }

  async function notifyHandler(userID) {
    const toastId = toast.loading("Pending");
    try {
      const response = await axios.post(`/notify/${userID}`);
      toast.success("Notify email was sent!", { id: toastId });
      console.log(response);
    } catch (error) {
      console.log(error.message || error);
      toast.error("failed to send email to user", { id: toastId });
    }
  }

  return (
    <>
      <style>:root {`{${primaryColor} ${a11yColor}}`}</style>
      <Header primaryColor={primaryColor} a11yColor={a11yColor} />
      <div className="w-full h-full  flex justify-center mt-4">
        <div className="min-h-[47rem] max-w-[910px] w-[80%] max-sm:w-[90%] shadow-2xl bg-skin-primary rounded-r-[5rem] flex justify-start items-center">
          <div className="h-[96%] mx-4 my-2 pb-4 w-[94%] shadow-2xl bg-slate-200 rounded-r-[4rem] flex flex-col gap-4 max-sm:w-[90%]">
            <div className="w-full min-h-[4rem] flex gap-4 mx-4 mt-8">
              <section className="w-[95%] h-full bg-slate-300 rounded-xl flex justify-center py-4 max-sm:flex-col max-sm:items-center">
                <Search usage="1" search={(q) => setQuery(q)} />
              </section>
            </div>
            <section className="w-[95%] min-h-[36rem] bg-slate-300 mx-4 rounded-xl py-4 px-8 overflow-scroll">
              <div className="flex flex-row border-b border-solid border-skin-primary mb-10">
                <p className="w-1/6">Name:</p>
                <p className="w-1/6">Surname</p>
                <p className="w-1/3">Email:</p>
                <p className="w-1/6">Birthdate:</p>
              
              </div>
              {items.map((user) => {
                return (
                  <div className="flex flex-row border-b border-solid border-skin-primary">
                    <p className="w-1/6">{user.name}</p>
                    <p className="w-1/6">{user.surname}</p>
                    <p className="w-1/3">{user.email}</p>
                    <p className="w-1/6">{user.date_of_birth}</p>
                    <p
                      className="cursor-pointer w-1/12 text-red-500"
                      onClick={() => deleteHandler(user.id)}
                    >
                      Delete
                    </p>
                    <p
                      className="cursor-pointer w-1/12 text-blue-500 ml-2"
                      onClick={() => notifyHandler(user.id)}
                    >
                      Notify
                    </p>
                  </div>
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
