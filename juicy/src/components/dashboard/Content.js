//Dependencies
import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import { debounce } from "@mui/material";
//Components
import Search from "./Search";
import Carousel from "../dashboard/Carousel/Carousel";
import { calculateAge } from "./utils/calculateAge";

export default function Content() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);

  const fetch = async () => {
    if (query === "") {
      const result = await axios(`/users`);
      result.data.forEach(user => {
        const age = calculateAge(user.date_of_birth)
        user.age = age;
        delete user.dateOfBirth;
      });
      setItems(result.data);
    } else {
      const result = await axios(
        `/search/${query}`
      );
      result.data.forEach(user => {
       const age = calculateAge(user.date_of_birth);
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
