import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut, faGear, faPeopleArrows } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from "react-router-dom";



export default function Header() {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between bg-orange-500 pt-7 pb-7">
            <div className='ml-16'>
                <FontAwesomeIcon id="logoIcon" className='mr-10' icon={faPeopleArrows} size="2x"/>
            </div>
            <div className="flex">
            <button onClick={() => navigate("/Settings")}><FontAwesomeIcon id="settingsIcon" className='mr-14 hover:animate-spin' icon={faGear} size="2x"/></button>
                <FontAwesomeIcon id="logoutIcon" className='mr-10 hover:animate-ping' icon={faSignOut} size="2x"/>
            </div>
        </div>
    )
}



