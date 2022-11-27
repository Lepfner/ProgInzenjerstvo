import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars, faSquareCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
    return (
        <div className='bg-orange-500 absolute bottom-1/3 w-full h-1/2 grid items-center border-solid rounded-r-3xl'>
            <div>
            <FontAwesomeIcon id="logoIcon" className='hover:animate-pulse' icon={faBars} size="2x"/>
            </div>
            <div>
            <FontAwesomeIcon id="logoIcon" className='hover:animate-pulse' icon={faUser} size="2x"/>
            </div>
            <div>
            <FontAwesomeIcon id="logoIcon" className='hover:animate-pulse' icon={faSquareCaretDown} size="2x"/>
            </div>
        </div>
    )
}
