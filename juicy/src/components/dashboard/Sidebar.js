import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBars,
  faSquareCaretDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
    return (
        <div className='bg-skin-primary w-full h-1/2 flex min-h-[2rem] flex-col justify-around items-center border-solid rounded-r-3xl'>
            <div>
            <FontAwesomeIcon id="logoIcon" className='hover:animate-pulse text-skin-a11y' icon={faBars} size="2x"/>
            </div>
            <div>
            <FontAwesomeIcon id="logoIcon" className='hover:animate-pulse text-skin-a11y' icon={faUser} size="2x"/>
            </div>
            <div>
            <FontAwesomeIcon id="logoIcon" className='hover:animate-pulse text-skin-a11y' icon={faSquareCaretDown} size="2x"/>
            </div>
        </div>
    )
}
