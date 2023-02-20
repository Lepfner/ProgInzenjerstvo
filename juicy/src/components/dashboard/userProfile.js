import React, { useState, useEffect, useRef } from "react";
import { getRGBColor, getAccessibleColor } from "../dashboard/utils";
import Location from "../images/Location.png";
import Header from "../dashboard/Header";
import empty_avatar from "../images/empty_avatar.png";
import { useNavigate, useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import axios from "../../api/axios";
import { calculateAge } from "./utils/calculateAge";
import { Chip } from "@mui/material";
import { toast } from "react-hot-toast"
import Talk from 'talkjs';
import useAuth from "../../hooks/useAuth";

const UserProfile = () => {
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);
  const { id } = useParams();
  const chatboxEl = useRef();
  const { auth } = useAuth();
  const primaryColor = getRGBColor(localStorage.getItem("currentColor"), "primary");
  const a11yColor = getRGBColor(getAccessibleColor(localStorage.getItem("currentColor")), "a11y");
  const [user, setUser] = useState({});
  const [talkLoaded, setTalkLoaded] = useState(false);
  const navigate = useNavigate();

  function checkUserToken() {
    if (localStorage.getItem("isLoggedIn") === "false") {
      return navigate("/login");
    }
  }

  useEffect(() => {
    checkUserToken();
    const fetch = async () => {
      try {
        const result = await axios(`users/${id}`);
        setUser({ ...result.data, likes: likes, dislikes: dislikes });
        const likesRes = await axios(`likes/${id}`);
        const dislikesRes = await axios(`dislikes/${id}`);
        setLikes(likesRes.data)
        setDislikes(dislikesRes.data)
      } catch (error) {
        console.log(error.message || error)
      }
    };
    fetch();

    const timeout = setTimeout(() => {
      
    Talk.ready.then(() => setTalkLoaded(true));

    if (talkLoaded) {

      const otherUser = new Talk.User({
        id: `${auth.id}`,
        name: `You`,
        email: 'youremail@gmail.com',
        photoUrl: 'user',
        welcomeMessage: 'Hello!',
        role: 'default',
      });

      const currentUser = new Talk.User({
        id: `${id}`,
        name: `${user.name}`,
        email: `${user.email}`,
        photoUrl: 'user',
        welcomeMessage: 'Hello2!',
        role: 'default',
      });

      const session = new Talk.Session({
        appId: 'tzA3WwVo',
        me: otherUser,
      });

      const conversationId = Talk.oneOnOneId(otherUser, currentUser);
      const conversation = session.getOrCreateConversation(conversationId);
      conversation.setParticipant(currentUser);
      conversation.setParticipant(otherUser);

      const chatbox = session.createChatbox();
      chatbox.select(conversation);
      chatbox.mount(chatboxEl.current);
      return () => session.destroy();
    }
    }, 1000)

    return () => clearTimeout(timeout)
  }, [talkLoaded]);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_btrio0p', 'template_1n7duvu', form.current, 'xnjBvyWRO-Ew4a6Qz')
      .then((result) => {
        toast.success("User reported!");
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
            <div className="w-full min-h-[18rem] flex gap-4 mx-4 mt-8">
              <section className="min-h-[17rem] w-[90%] h-full bg-slate-300 rounded-xl flex justify-start py-4 max-sm:flex-col max-sm:items-center">
                <div className="w-[36%] flex flex-col items-center ml-8 pr-4 border-r-2 border-skin-primary max-sm:border-b-2 max-sm:border-none max-sm:w-[90%] max-sm:mb-4">
                  <div className=" mt-4 mb-2 rounded-full flex justify-center h-[8rem] w-[8rem] overflow-hidden mx-4 bg-slate-200 ">
                    <img
                      src={user.profileimg || empty_avatar}
                      className="object-cover h-[8rem]"
                      alt=""
                    />
                  </div>
                  <p className="">
                    {user.name} {user.surname}
                  </p>

                  <p>
                    <img
                      src={Location}
                      className="w-8 h-8 inline-block mix-blend-color-burn"
                      alt=""
                    />
                    {user.location}
                  </p>
                  <p className="">Age: {calculateAge(user.date_of_birth)}</p>
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
                    <span className="font-bold">Nationality:</span>{" "}
                    {user.nationality}
                  </h3>
                  <h3>
                    <span className="font-bold">Status:</span> {user.status}
                  </h3>
                  <h3>
                    <span className="font-bold">Religion:</span> {user.religion}
                  </h3>
                  <h3>
                    <span className="font-bold">Work:</span> {user.work}
                  </h3>
                  <h3>
                    <span className="font-bold">Education:</span>{" "}
                    {user.education}
                  </h3>
                  <form
                    className=" mt-2 flex flex-row sm:flex-col md:flex-row"
                    ref={form}
                    onSubmit={sendEmail}
                  >
                    <button
                      className="w-20 p-2.5 h-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="submit"
                    >
                      REPORT
                    </button>
                    <input
                      type="text"
                      name="user"
                      readOnly
                      value={`${user.name} ${user.surname}`}
                      className="invisible"
                    ></input>
                  </form>
                </div>
              </section>
            </div>
            <section className="w-[90%] min-h-[13rem] bg-slate-300 mx-4 rounded-xl py-4 px-8">
              <h2 className="text-center text-2xl">About</h2>
              <p className="text-lg">{user.about}</p>
            </section>
            <section className="w-[90%] min-h-[13rem] bg-slate-300 mx-4 rounded-xl px-8 py-4">
              <h2 className="text-center text-2xl">Likes & Dislikes</h2>
              <h3 className="text-lg">Likes:</h3>
              {likes?.map((like, index) => {

                return (
                  <Chip
                    className="font-bold m-[0.15rem]"
                    variant="filled"
                    label={like.thing}
                    key={index}
                  />
                );
              })}
              <h3 className="text-lg">Dislikes:</h3>
              {dislikes?.map((dislike, index) => {

                return (
                  <Chip
                    className="font-bold m-[0.15rem]"
                    variant="filled"
                    label={dislike.thing}
                    key={index}
                  />
                );
              })}
            </section>
            <section className="w-[90%] min-h-[32rem] bg-slate-300 mx-4 rounded-xl px-8 py-4">
              <div className='h-full' ref={chatboxEl} />
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile;
