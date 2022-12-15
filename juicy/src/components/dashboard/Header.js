import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut, faGear } from '@fortawesome/free-solid-svg-icons'
import JuicyLogo from '../images/logo.png';

export default function Header() {

    function navSettings(){
        localStorage.setItem("current", "settings");
        window.location.reload(false);
    }

    function navMain(){
        localStorage.setItem("current", "main");
        window.location.reload(false);
    }

    return (
        <div className="flex justify-between bg-orange-500 pt-7 pb-7">
            <div className='ml-10'>
                <button onClick={() => navMain()}><img src={JuicyLogo} alt='' className="h-20"/></button>
            </div>
            <div className="flex">
                <button onClick={() => navSettings()}><FontAwesomeIcon id="settingsIcon" className='mr-14 hover:animate-spin' icon={faGear} size="2x"/></button>
                <button><FontAwesomeIcon id="logoutIcon" className='mr-10 hover:animate-ping' icon={faSignOut} size="2x"/></button>
            </div>
        </div>
    )
}



