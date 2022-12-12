import React from 'react'
import Content from './Content'
import Header from './Header'
import Sidebar from './Sidebar'
import Settings from './Settings'

export default function MainMenu({currentPage}) {

    return (
        <div className='h-screen w-full'>
            <Header />
            <div className='h-5/6 w-full flex'>
                <div className=" h-[45rem] flex flex-col justify-center lg:w-1/12 md: w-2/12">
                    <Sidebar/>
                </div>
                <div className="h-full lg:w-11/12 md: w-10/12">
                    {currentPage==="settings" ? <Settings/> : currentPage==="main" ? <Content/> : <Content/>}
                </div>
            </div>
        </div>
    )
}
