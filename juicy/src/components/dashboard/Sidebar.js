import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBars,
  faSquareCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
    const navigate = useNavigate() 
       return (
         <div className="bg-skin-primary w-full h-1/2 flex min-h-[2rem] flex-col justify-around items-center border-solid rounded-r-3xl">
           <div>
             <FontAwesomeIcon
               id="logoIcon"
               className="hover:animate-pulse"
               icon={faBars}
               size="2x"
             />
           </div>
           <div>
             <button onClick={()=>navigate("/MyProfile")}>
               <FontAwesomeIcon
                 id="logoIcon"
                 className="hover:animate-pulse"
                 icon={faUser}
                 size="2x"
               />
             </button>
           </div>
           <div>
             <FontAwesomeIcon
               id="logoIcon"
               className="hover:animate-pulse"
               icon={faSquareCaretDown}
               size="2x"
             />
           </div>
         </div>
       );
}
