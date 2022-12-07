import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars, faSquareCaretDown } from '@fortawesome/free-solid-svg-icons'
import Filter from './Filter'

export default function Sidebar() {
    return (
        <div className='bg-orange-500 w-full h-1/2 flex min-h-[2rem] flex-col justify-around items-center border-solid rounded-r-3xl'>
            <div>
            <FontAwesomeIcon id="logoIcon" className='hover:animate-pulse' icon={faBars} size="2x"/>
            </div>
            <div>
            <FontAwesomeIcon id="logoIcon" className='hover:animate-pulse' icon={faUser} size="2x"/>
            </div>
            <Filter></Filter>
        </div>
    )
}
