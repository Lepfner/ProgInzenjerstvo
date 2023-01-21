import React, { useState, useEffect, useRef } from 'react';
import { getRGBColor, getAccessibleColor } from "../dashboard/utils"
import Location from "../images/Location.png";
import Header from '../dashboard/Header';
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import axios from '../../api/axios';

const UserProfile = () => {
    const primaryColor = getRGBColor(localStorage.getItem("currentColor"), "primary")
    const a11yColor = getRGBColor(getAccessibleColor(localStorage.getItem("currentColor")), "a11y")
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    function checkUserToken() {
        if (localStorage.getItem("isLoggedIn") === 'false') {
            return navigate('/login');
        }
    }

    useEffect(() => {
        checkUserToken();
        const fetch = async () => {
            const currentUrl = window.location.href.slice(30, 43);
            const result = await axios(`users/${currentUrl}`);
            setUser(result.data);
        }
        fetch()
    }, []);

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l72z64l', 'template_wfsozpb', form.current, 'M-karua9jmM9OyLKr')
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
            <div className="w-full h-full  flex justify-center mt-4">
                <div className="min-h-[47rem] max-w-[910px] w-[80%] max-sm:w-[90%] shadow-2xl bg-skin-primary rounded-r-[5rem] flex justify-start items-center">
                    <div className="h-[96%] mx-4 my-2 pb-4 w-[94%] shadow-2xl bg-slate-200 rounded-r-[4rem] flex flex-col gap-4 max-sm:w-[90%]">
                        <div className="w-full min-h-[13rem] flex gap-4 mx-4 mt-8">
                            <section className="w-[90%] h-full bg-slate-300 rounded-xl flex justify-start py-4 max-sm:flex-col max-sm:items-center">
                                <div className="w-[36%] flex flex-col items-center ml-8 pr-4 border-r-2 border-skin-primary max-sm:border-b-2 max-sm:border-none max-sm:w-[90%] max-sm:mb-4">
                                    <div className=" mt-4 mb-2 rounded-full flex justify-center h-[8rem] w-[8rem] overflow-hidden mx-4 bg-slate-200 ">
                                        <img
                                            src={user.image}
                                            className="object-cover h-[8rem]"
                                            alt=''
                                        />
                                    </div>
                                    <p className=""> {user.name} {user.surname}
                                    </p>

                                    <p>
                                        <img
                                            src={Location}
                                            className="w-8 h-8 inline-block mix-blend-color-burn"
                                            alt=''
                                        />
                                    </p>
                                </div>
                                <div className="w-[63%] pl-8 pt-2 pb-4 text-lg max-sm:border-t-2 max-sm:border-skin-primary max-sm:w-[90%]">
                                    <h3>
                                        <span className="font-bold">Date of Birth:</span>
                                        <span className="inline-block"> {user.date_of_birth}</span>
                                    </h3>
                                    <h3>
                                        <span className="font-bold">Gender:</span> {user.gender}
                                    </h3>
                                    <h3>
                                        <span className="font-bold">Nationality:</span> {user.nationality}
                                    </h3>
                                    <h3>
                                        <span className="font-bold">Status:</span> {user.status}
                                    </h3>
                                    <h3>
                                        <span className="font-bold">Religion:</span> {user.religion}
                                    </h3>
                                    <form className='mt-4' ref={form} onSubmit={sendEmail}>
                                    <input type='text' name="user" readOnly value={`${user.name} ${user.surname}`}
                                        className="focus:outline-none p-2.5 sm:w-1/4 w-1/2 h-10 mb-6 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    </input>
                                    <button className="p-2.5 sm:block sm:w-1/4 w-1/2 h-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type='submit'>
                                        REPORT
                                    </button>
                                    </form>
                                </div>
                            </section>
                        </div>
                        <section className="w-[90%] min-h-[13rem] bg-slate-300 mx-4 rounded-xl py-4 px-8">
                            <h2 className="text-center text-2xl">About</h2>
                            <p className="text-lg">
                                {user.about}
                            </p>
                        </section>
                        <section className="w-[90%] min-h-[13rem] bg-slate-300 mx-4 rounded-xl px-8 py-4">
                            <h2 className="text-center text-2xl">Likes & Dislikes</h2>
                            {/*
                            <h3 className="text-lg">Likes:</h3>
                            {likes.map((like, index) => {
                                return (
                                    <Chip
                                        className="font-bold m-[0.15rem]"
                                        variant="filled"
                                        label={like}
                                        key={index}
                                    />
                                );
                            })}
                            <h3 className="text-lg">Dislikes:</h3>
                            {dislikes.map((dislike, index) => {
                                return (
                                    <Chip
                                        className="font-bold m-[0.15rem]"
                                        variant="filled"
                                        label={dislike}
                                        key={index}
                                    />
                                );
                            })}
                        */}
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile;