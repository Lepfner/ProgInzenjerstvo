import React, { useState, useEffect } from "react";
import Search from "./Search";
import Carousel from "./Carousel";
import axios from "axios";

export default function Content() {

  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetch = async()=> {
      if(query===''){
        const result = await axios(`https://dummyjson.com/users?&select=firstName,lastName,age,image,eyeColor`);
        setItems(result.data.users);
      } else {
        const result = await axios(`https://dummyjson.com/users/search?q=${query}&select=firstName,lastName,age,image`);
        setItems(result.data.users);
      }
    }
    fetch()
  },[query]);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Search search={(q) => setQuery(q)} />
      <div className="bg-skin-primary text-center shadow-2xl w-3/4 min-h-[30rem] mt-8 rounded-2xl h-auto pb-12">
        <Carousel items={items}/>
      </div>
    </div>
  );
}
