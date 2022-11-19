import React from 'react'

export default function Header() {
    return (
        <div className="flex justify-between bg-orange-500 pt-8 pb-8">
            <div className='ml-10'>
                <p>Logo</p>
            </div>
            <div className="flex">
                <p className='mr-10'>Settings</p>
                <p className='mr-10'>Logout</p>
            </div>
        </div>
    )
}
