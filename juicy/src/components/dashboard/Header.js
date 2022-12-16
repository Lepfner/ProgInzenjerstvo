import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut, faGear } from '@fortawesome/free-solid-svg-icons'
import JuicyLogo from '../images/logo.png';
import BlackLogo from '../images/blackLogo.png'

export default function Header({a11yColor, primaryColor}) {


    
    function navSettings(){
        localStorage.setItem("current", "settings");
        window.location.reload(false);
    }

    function navMain(){
        localStorage.setItem("current", "main");
        window.location.reload(false);
    }

    return (
        <div className="flex justify-between bg-skin-primary pt-7 pb-7">
            <div className='ml-10'>
                <button onClick={() => navMain()}>
                {(() => {
        if (a11yColor==="--color-a11y: 255, 255, 255;") {
          return (
            <img src={JuicyLogo} alt='' className="h-20"/>
          )
        } else {
          return (
            <img src={BlackLogo} alt='' className="h-20"/>
          )
        }
      })()}
                    
                    
                    
                    
                    </button>
            </div>
            <div className="flex">
                <button onClick={() => navSettings()}><FontAwesomeIcon id="settingsIcon" className='mr-14 hover:animate-spin text-skin-a11y' icon={faGear} size="2x"/></button>
                <button><FontAwesomeIcon id="logoutIcon" className='mr-10 hover:animate-ping text-skin-a11y' icon={faSignOut} size="2x"/></button>
            </div>
        </div>
    )
}



