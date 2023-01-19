//Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";
import { debounce } from "@mui/material";
//Components
import Search from "./Search";
import Carousel from "../dashboard/Carousel/Carousel";

export default function Content() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);

  const fetch = async () => {
    if (query === "") {
      const result = await axios(`http://localhost:5000/users`);
      result.data.forEach(user => {
        const dateOfBirth = new Date(user.date_of_birth);
        const today = new Date();
        const age = today.getFullYear() - dateOfBirth.getFullYear();
        user.age = age;
        delete user.dateOfBirth;
      });
      setItems(result.data);
      console.log(items)
    } else {
      const result = await axios(
        `http://localhost:5000/search/${query}`
      );
      result.data.forEach(user => {
        const dateOfBirth = new Date(user.date_of_birth);
        const today = new Date();
        const age = today.getFullYear() - dateOfBirth.getFullYear();
        user.age = age;
        delete user.dateOfBirth;
      });
      setItems(result.data);
    }
  };

  useEffect(() => {
    fetch();
  }, [query]);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Search search={debounce((q) => setQuery(q),1000)} />
      <div className="bg-skin-primary text-center shadow-2xl w-3/4 min-h-[30rem] mt-8 rounded-2xl h-auto pb-12">
        <Carousel items={items} />
      </div>
    </div>
  );
}
