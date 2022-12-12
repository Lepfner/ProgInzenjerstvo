import React, { useState, useEffect } from "react";
import Search from "./Search";
import Carousel from "./Carousel";
export default function Content() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    //Work in progress
  });

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Search search={(q) => setQuery(q)} />
      <div className="bg-orange-500 shadow-2xl w-3/4 min-h-[27rem] mt-8 rounded-2xl h-auto pb-12">
        <Carousel />
      </div>
    </div>
  );
}
