import React from 'react'
import Content from './Content'
import Header from './Header'
import Sidebar from './Sidebar'

export default function MainMenu() {
    return (
        <div>
            <Header />
            <div className='h-full w-full'>
                <div className="float-left w-1/12 h-screen relative">
                    <Sidebar/>
                </div>
                <div className="float-right w-11/12 h-screen">
                    <Content/>
                </div>
            </div>
        </div>
    )
}
