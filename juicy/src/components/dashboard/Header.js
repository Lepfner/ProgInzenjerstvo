import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut, faGear } from '@fortawesome/free-solid-svg-icons'
import JuicyLogo from '../images/logo.png';
import BlackLogo from '../images/blackLogo.png'

export default function Header({ a11yColor, primaryColor }) {

  const [currentLogo, setCurrentLogo] = useState("");

  useEffect(() => {
    if(localStorage.getItem("logoCurrent") === "black"){
      setCurrentLogo(BlackLogo);
    }
    if(localStorage.getItem("logoCurrent") === "white"){
      setCurrentLogo(JuicyLogo);
    }
  },[])

  function navSettings() {
    localStorage.setItem("current", "settings");
    window.location.reload(false);
  }

  function navMain() {
    localStorage.setItem("current", "main");
    window.location.reload(false);
  }

  return (
    <div className="flex justify-between bg-skin-primary pt-7 pb-7">
      <div className='ml-10'>
        <button onClick={() => navMain()}>
          <img src={currentLogo} alt='' className="h-20 text-skin-a11y" />
        </button>
      </div>
      <div className="flex">
        <button onClick={() => navSettings()}><FontAwesomeIcon id="settingsIcon" className='mr-14 hover:animate-spin text-skin-a11y' icon={faGear} size="2x" /></button>
        <button><FontAwesomeIcon id="logoutIcon" className='mr-10 hover:animate-ping text-skin-a11y' icon={faSignOut} size="2x" /></button>
      </div>
    </div>
  )
}



