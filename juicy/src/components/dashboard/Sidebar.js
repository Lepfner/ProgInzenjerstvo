import React from 'react'

export default function Sidebar() {
    return (
        <div className='bg-orange-500 absolute bottom-1/3 w-full h-1/2 grid items-center border-solid rounded-r-3xl'>
            <div>
                <p>Dashboard</p>
            </div>
            <div>
                <p>MyProfile</p>
            </div>
            <div>
                <p>Preferences</p>
            </div>
        </div>
    )
}
