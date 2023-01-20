//Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//Components
import Header from "./Header";
import Search from "./Search";
import { getRGBColor, getAccessibleColor } from "../dashboard/utils"

const MyProfilePage = () => {
  const primaryColor = getRGBColor(localStorage.getItem("currentColor"), "primary")
  const a11yColor = getRGBColor(getAccessibleColor(localStorage.getItem("currentColor")), "a11y")
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);

  function checkUserToken() {
    if (localStorage.getItem("isLoggedIn") === 'false') {
      return navigate('/login');
    }
  }

  useEffect(() => {
    checkUserToken();
    const fetch = async () => {
      if (query === "") {
        const result = await axios(`http://localhost:5000/users`);
        setItems(result.data);
      } else {
        const result = await axios(
          `http://localhost:5000/search/${query}`
        );
        setItems(result.data);
      }
    }
    fetch()
  }, [query]);

  function deleteHandler() {
    axios.post('/deleteUser', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function notifyHandler() {
    console.log("Work in progress!");
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
                <p className="w-1/6">Full name:</p>
                <p className="w-1/6">Username:</p>
                <p className="w-1/3">Email:</p>
                <p className="w-1/6">Created on:</p>
                <p className="w-1/12">Delete</p>
                <p className="w-1/12">Notify</p>
              </div>
              {items.map((user) => {
                return (
                  <div className="flex flex-row border-b border-solid border-skin-primary">
                    <p className="w-1/6">{user.name} {user.surname}</p>
                    <p className="w-1/6">Lepfner</p>
                    <p className="w-1/3">lerner.andi@gmail.com</p>
                    <p className="w-1/6">15-1-2023</p>
                    <p className="cursor-pointer w-1/12 text-red-500" onClick={() => deleteHandler()}>Delete</p>
                    <p className="cursor-pointer w-1/12 text-blue-500" onClick={() => notifyHandler()}>Notify</p>
                  </div>
                )
              })}
              <div className="flex flex-row border-b border-solid border-skin-primary">
                <p className="w-1/6">Andrija Lerner</p>
                <p className="w-1/6">Lepfner</p>
                <p className="w-1/3">lerner.andi@gmail.com</p>
                <p className="w-1/6">15-1-2023</p>
                <p className="cursor-pointer w-1/12 text-red-500" onClick={() => deleteHandler()}>Delete</p>
                <p className="cursor-pointer w-1/12 text-blue-500" onClick={() => notifyHandler()}>Notify</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfilePage;