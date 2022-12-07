import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function Filter() {

    const [filter, SetFilter] = useState(false);

    const ToggleFilter = () => {
        if(filter == false)
            SetFilter(true);
        else
            SetFilter(false);
    }

    return (
        <>
            <div>
                {filter && 
                <div className='absolute top-56 left-40 z-10 h-2/5 w-1/4 bg-white shadow-2xl border-8 border-orange-500 rounded-r-3xl'>
                    HELLO
                </div>}
                <button onClick={ToggleFilter}>
                    <FontAwesomeIcon id="logoIcon" className='hover:animate-pulse' icon={faSquareCaretDown} size="2x" />
                </button>
            </div>
        </>
    )
}