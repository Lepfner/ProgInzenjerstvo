import React, {useEffect} from 'react'
import Content from './Content'
import Header from './Header'
import { useNavigate } from "react-router-dom";
import { getRGBColor, getAccessibleColor } from "../dashboard/utils"

export default function MainMenu() {

    const navigate = useNavigate();

    function checkUserToken() {
        if (localStorage.getItem("isLoggedIn") === 'false') {
          return navigate('/login');
        }
    }

    useEffect(() => {
        checkUserToken();
    })
    
    const primaryColor = getRGBColor(localStorage.getItem("currentColor"), "primary")
    const a11yColor = getRGBColor(getAccessibleColor(localStorage.getItem("currentColor")), "a11y")
    const visibility= localStorage.getItem("vis")
    return (
        <div className='h-screen w-full'>
            <style>:root {`{${primaryColor} ${a11yColor}}`}</style>
            <Header primaryColor={primaryColor} a11yColor={a11yColor} visible={visibility}/>
            <div className='h-5/6 w-full flex justify-center'>
                <div className="h-full lg:w-full md: w-10/12">
                    <Content/>
                </div>
            </div>
        </div>
    )
}
