import React, { useState, useEffect, useRef } from 'react';
import ColorPicker from "../dashboard/colorPicker"
import { getRGBColor, getAccessibleColor } from "../dashboard/utils"
import Header from '../dashboard/Header';
import emailjs from '@emailjs/browser';

export default function Settings() {
  const [color, setColor] = useState(localStorage.getItem("currentColor"));
  const [isOn, setIsOn] = useState(false);
  const primaryColor = getRGBColor(color, "primary");
  const a11yColor = getRGBColor(getAccessibleColor(color), "a11y");

  const presetColors = ["#ef6c00", "#6231af", "#db2777", "#2dd4bf", "#06b6d4", "#10b981"];

  useEffect(() => {
    localStorage.setItem("currentColor", color);
  })

    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_l72z64l', 'template_mu6s50h', form.current, 'M-karua9jmM9OyLKr')
        .then((result) => {
          // show the user a success message
        }, (error) => {
          console.log(error);
        });
    };

  return (
    <>
      <style>:root {`{${primaryColor} ${a11yColor}}`}</style>
      <Header primaryColor={primaryColor} a11yColor={a11yColor} />
      <div className=' w-full flex justify-center items-center mt-10'>
        <div className='bg-skin-primary w-3/4 p-3 rounded-2xl text-center flex items-center space-x-4 shadow-xl flex-col md:flex-row'>
          <div className='md:w-5/12 w-full flex flex-col justify-center items-center sm:items-baseline md:border-r border-0 text-skin-a11y'>
            <div className='mt-8'>
              <h1 className="inline lg:text-3xl mb-2 md:text-2xl sm:text-xl">Notifications:</h1>
              <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-black transition duration-200 cursor-pointer ml-4"
                type="checkbox"
                checked={isOn}
                onChange={(e) => setIsOn(e.target.val)} />
            </div>
            <h1 className="bg-skin-primary text-3xl mt-10 mb-4">Report a problem:</h1>
            <form ref={form} onSubmit={sendEmail} className='w-full'>
              <input type='text' name="user" placeholder='Write your username'
              className="resize-none focus:outline-none block p-2.5 w-5/6 h-10 mb-6 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              </input>
              <textarea
                name="message"
                className="resize-none focus:outline-none block p-2.5 w-5/6 h-32 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Feel free to let us know what is bothering you and write as many details as you like:" />
              <button
                type="submit"
                className="block bg-gray-700 px-4 w-32 rounded-md p-2 mt-4 text-white hover:text-skin-a11y lg:text-xl md:text-lg sm: text-lg flex justify-center">
                Send
              </button>
            </form>
            <h1 className="bg-skin-primary text-3xl mt-8">Page Color:</h1>
            <div className=" bottom-5 sm:bottom-14 rounded-xl bg-white p-3 text-center flex items-center space-x-4 shadow-xl m-10">
              <ColorPicker
                color={color}
                onChange={setColor}
                presetColors={presetColors}
              />
              <p className="text-sm font-medium text-gray-500">Custom Color</p>
            </div>
          </div>
          <div className='sm:m-10 m-0 sm:w-2/3 w-full flex flex-col justify-center bg-skin-primary text-skin-a11y text-center'>
            <div className='text-3xl'>ABOUT US:</div>
            <div className='text-lg'>
              Created by a team of several software developers and testers,<br />
              Juicy is an online dating website that allows you meet people around the globe<br />
              with just a click of a button. Meet new friends, partners & etc. using our fully responsive<br />
              & simple to use design. We hope you have a wonderful time using our website and be sure<br />
              to let us know
              if there are any problems or if something/someone is bothering you.<br />
              Our team is working around the clock to make sure your experience is smooth as possible.<br />
              You can contact us using email or using the website's report system.
            </div>
            <div className='mt-12 text-lg'>Meet the team:<br />
              Toni Grbić,<br />
              Bruno Ivanković,<br />
              Jozo Krstanović,<br />
              Andrija Lerner,<br />
              Mateo Papuga,<br />
              Toni Radman<br /></div>
            <div className='mt-4'>Email contact: lerner.andi@gmail.com</div>
          </div>
        </div>
      </div>
    </>
  )
}