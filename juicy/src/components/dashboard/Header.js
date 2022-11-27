import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut, faGear, faPeopleArrows } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <div className="flex justify-between bg-orange-500 pt-7 pb-7">
            <div className='ml-16'>
                <FontAwesomeIcon id="logoIcon" className='mr-10 hover:animate-bounce' icon={faPeopleArrows} size="2x"/>
            </div>
            <div className="flex">
                <FontAwesomeIcon id="settingsIcon" className='mr-14 hover:animate-spin' icon={faGear} size="2x"/>
                <FontAwesomeIcon id="logoutIcon" className='mr-10 hover:animate-ping' icon={faSignOut} size="2x"/>
            </div>
        </div>
    )
}
