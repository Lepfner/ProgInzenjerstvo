import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Filter() {
  const [filter, SetFilter] = useState(false);

  const ToggleFilter = () => {
    SetFilter((prev) => !prev);
  };

  return (
    <>
      <div>
        {filter && (
          <div
            className="absolute top-[17rem] min-h-[20rem] 
                       shadow-2xl bg-orange-500  
                       rounded-r-[2.5rem] z-10 w-1/4 md:w-1/3 
                       max-sm:w-1/2 left-[7%] max-lg:left-[10%] max-md:left-[15%] 
                       max-sm:left-[20%]"
          >
            <div className="m-4 p-4 bg-white min-h-[18rem] rounded-r-xl z-20">
              HELLO
            </div>
          </div>
        )}
      </div>
      <div onClick={ToggleFilter}>
        <FontAwesomeIcon
          id="logoIcon"
          className={`${filter ? "opacity-40" : "opacity-100"}`}
          icon={faSquareCaretDown}
          size="2x"
        />
      </div>
    </>
  );
}
