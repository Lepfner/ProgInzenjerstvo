import React, {useState} from 'react';
import ColorPicker from "../dashboard/colorPicker"
import { getRGBColor, getAccessibleColor } from "../dashboard/utils"

export default function Settings() {
  const [color, setColor] = useState("#ef6c00")
  const primaryColor = getRGBColor(color, "primary")
  const a11yColor = getRGBColor(getAccessibleColor(color), "a11y")

  const presetColors = [
    "#ef6c00",
    "#6231af",
    "#db2777",
    "#2dd4bf",
    "#06b6d4",
    "#10b981",
  ]

  const [isOn, setIsOn] = React.useState(false);

    return (
      <>
      
       
        <style>:root {`{${primaryColor} ${a11yColor}}`}</style>
      
          <div className=' w-full flex justify-center items-center mt-10'>
            <div className='bg-skin-primary w-3/4  p-3 text-center flex items-center space-x-4 shadow-xl flex-col'>
            <div>
            <button className="lg:text-3xl mb-2 md: text-2xl sm: text-xl" onClick={() => setIsOn((prevState) => 
            !prevState)}>Notifications</button>
            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-black checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            checked={isOn}
            onClick={(e) => setIsOn(e.target.val)}/>
            </div>
                <div className="bg-skin-primary text-white m-10">REPORT:</div>
              <textarea
              className="block p-2.5 w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Feel free to let us know what is bothering you and write as many details as you like:"/>
              <button
              className="block bg-orange-500 px-4 rounded-md p-2 mt-4 text-white hover:bg-orange-600
                        lg:text-xl md:text-lg sm: text-lg flex justify-center">Send</button>
              <div className=" bottom-5 sm:bottom-14 rounded-xl bg-white p-3 text-center flex items-center space-x-4 shadow-xl m-10">
          <ColorPicker
            color={color}
            onChange={setColor}
            presetColors={presetColors}
          /> <p className="text-sm font-medium text-gray-500">Custom Color</p></div>
            <div className='m-10 flex-col relative w-full flex justify-center items-center bg-skin-primary text-white text-center'>
            <div>ABOUT US:</div>
                <div>
                Created by a team of several software developers and testers,
                 Juicy is an online dating website that allows you meet people around the globe with just a click of a button.
                  Meet new friends, partners & etc. using our fully responsive & simple to use design.
                   We hope you have a wonderful time using our website and be sure to let us know
                    if there are any problems or if something/someone is bothering you.

                  Our team is working around the clock to make sure your experience is smooth as possible.
                  You can contact us using email or using the website's report system.
                </div>
                <div>Meet the team:</div>
                Toni Grbić,
                Bruno Ivanković,
                Jozo Krstanović,
                Andrija Lerner,
                Mateo Papuga,
                Toni Radman
                </div>
                <div>Email: lerner.andi@gmail.com</div>
            </div>
            
          </div>
         
      </>
    )
  }