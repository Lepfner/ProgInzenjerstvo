import React, {useState, useEffect} from 'react';
import ColorPicker from "../dashboard/colorPicker"
import { getRGBColor, getAccessibleColor } from "../dashboard/utils"



export default function Settings() {
  const [color, setColor] = useState("#6231af")
  const primaryColor = getRGBColor(color, "primary")
  const a11yColor = getRGBColor(getAccessibleColor(color), "a11y")

  const presetColors = [
    "#6231af",
    "#db2777",
    "#f59e0b",
    "#2dd4bf",
    "#06b6d4",
    "#10b981",
  ]

  
    return (
      <>
      
       
        <style>:root {`{${primaryColor} ${a11yColor}}`}</style>
      
          <div className='h-3/4 relative w-full flex justify-center items-center'>
            <div className='bg-skin-primary w-3/4 h-3/4'> SETTINGS
            <div className="absolute left-[calc(50vw-100px)] w-[200px] bottom-5 sm:bottom-14 rounded-xl bg-white p-3 text-center flex items-center space-x-4 shadow-xl">
          <ColorPicker
            color={color}
            onChange={setColor}
            presetColors={presetColors}
          /> <p className="text-sm font-medium text-gray-500">Custom Color</p></div>


            </div>
          </div>
      </>
    )
  }