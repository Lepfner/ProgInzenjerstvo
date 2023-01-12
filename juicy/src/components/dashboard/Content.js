//Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";
//Components
import Search from "./Search";
import Carousel from "../dashboard/Carousel/Carousel";

export default function Content() {

  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetch = async()=> {
      // if(query===''){
        const result = await axios(`http://localhost:5000/users`);
        setItems(result.data);
      //  } else {
      //   const result = await axios(`http://localhost:5000/users/search?q=${query}&select=firstName,lastName,age`);
      //   setItems(result.data.users);
      //}
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
