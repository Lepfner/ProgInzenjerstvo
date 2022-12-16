import React from 'react'
import Content from './Content'
import Header from './Header'
import Sidebar from './Sidebar'
import Settings from './Settings'
import { getRGBColor, getAccessibleColor } from "../dashboard/utils"

export default function MainMenu({currentPage}) {
    
    const primaryColor = getRGBColor(localStorage.getItem("currentColor"), "primary")
    const a11yColor = getRGBColor(getAccessibleColor(localStorage.getItem("currentColor")), "a11y")

    return (
        <div className='h-screen w-full'>
            <style>:root {`{${primaryColor} ${a11yColor}}`}</style>
            <Header primaryColor={primaryColor} a11yColor={a11yColor}/>
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
