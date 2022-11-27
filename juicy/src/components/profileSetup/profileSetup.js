import React, { Compontent } from "react";
import { useState } from "react";
import PS1 from "./pS_page_1";
import PS2 from "./pS_page_2";
import PS3 from "./pS_page_3";

function ProfileSetup() {
  const [page, setPage] = useState(0);

  const componentList = [
    <PS1 page={page} setPage={setPage}></PS1>,
    <PS2 page={page} setPage={setPage}></PS2>,
    <PS3 page={page} setPage={setPage}></PS3>,
  ];

  return (
    <div className="w-full flex flex-col items-center justify-between">
      <div className="h-24 w-full bg-orange-500 mb-8" />
      <div
        className="h-full flex flex-col justify-center max-w-[75%]
                     outline outline-orange-500 outline-[1rem] rounded-xl z-0
                     lg:w-4/5 md:w-4/5"
      >
        <div className="w-full rounded-xl p-12 z-10">
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-orange-600 h-4 rounded-full ease-in duration-200"
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
    // ZNAM DA NE IZGLEDA KA PUNO AL SAN NASA NES ODAKLE DA "POSUĐUJEM" PA CU IDUCI PUT PUNO VISE NAPRAVIT
  );
}
export default ProfileSetup;
