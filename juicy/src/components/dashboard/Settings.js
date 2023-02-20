import React, { useState, useEffect, useRef } from 'react';
import ColorPicker from "../dashboard/colorPicker"
import { getRGBColor, getAccessibleColor } from "../dashboard/utils"
import Header from '../dashboard/Header';
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

export default function Settings() {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState(localStorage.getItem("currentColor"));
  const primaryColor = getRGBColor(color, "primary");
  const a11yColor = getRGBColor(getAccessibleColor(color), "a11y");

  const navigate = useNavigate();

  const presetColors = ["#ef6c00", "#6231af", "#db2777", "#2dd4bf", "#06b6d4", "#10b981"];

  const onInputUser = (e) => setUser(e.target.value);
  const onInputMessage = (e) => setMessage(e.target.value);

  function checkUserToken() {
    if (localStorage.getItem("isLoggedIn") === 'false') {
      return navigate('/login');
    }
  }

  useEffect(() => {
    checkUserToken();
    localStorage.setItem("currentColor", color);
  })

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_btrio0p', 'template_1n7duvu', form.current, 'xnjBvyWRO-Ew4a6Qz')
      .then((result) => {
        toast.success("Report sent!");
        setUser("");
        setMessage("");
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
          <div className='md:w-5/12 w-full flex flex-col justify-center items-center md:border-r border-0 text-skin-a11y'>
            <h1 className="bg-skin-primary text-3xl mt-10 mb-4">Report a problem:</h1>
            <form ref={form} onSubmit={sendEmail} className='w-full'>
              <input type='text' name="user" value={user} onInput={onInputUser} placeholder='Write your username'
                className="resize-none focus:outline-none p-2.5 w-5/6 h-10 mb-6 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              </input>
              <textarea
                name="message"
                value={message}
                onInput={onInputMessage}
                className="resize-none focus:outline-none p-2.5 w-5/6 h-32 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Feel free to let us know what is bothering you and write as many details as you like:" />
              <button
                type="submit"
                className=" bg-gray-700 px-4 w-32 rounded-md p-2 mt-4 text-white hover:text-skin-a11y lg:text-xl md:text-lg sm: text-lg">
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