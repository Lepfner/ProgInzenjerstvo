import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faGear, faUser, faTerminal } from "@fortawesome/free-solid-svg-icons";
import JuicyLogo from "../images/logo.png";
import BlackLogo from '../images/blackLogo.png';
import Filter from "./Filter";
import { useNavigate } from "react-router-dom";
import Hamburger from "./Hamburger";

export default function Header({ a11yColor, primaryColor }) {

  const [currentLogo, setCurrentLogo] = useState("");

  useEffect(() => {
    if (localStorage.getItem("logoCurrent") === "black") {
      setCurrentLogo(BlackLogo);
    }
    if (localStorage.getItem("logoCurrent") === "white") {
      setCurrentLogo(JuicyLogo);
    }
  }, [])

  const navigate = useNavigate();

  return (
    <div className="flex justify-between bg-skin-primary pt-7 pb-7 ">
      <div className="md:ml-10 min-w-[50%]">
        <button onClick={() => navigate("/Main")}>
          <img src={currentLogo} alt="" className="h-20 text-skin-a11y" />
        </button>
      </div>
      <div className="flex">
        <button className="text-skin-a11y">
        <FontAwesomeIcon onClick={() => navigate("/AdminPanel")}
            id="logoIcon"
            className="hidden md:flex mr-12 hover:animate-pulse text-skin-a11y"
            icon={faTerminal}
            size="2x"
          />
        </button>
        <button className="mr-14 text-skin-a11y">
          <Filter />
        </button>
        <button>
          <FontAwesomeIcon onClick={() => navigate("/MyProfile")}
            id="logoIcon"
            className="hidden md:flex mr-14 hover:animate-pulse text-skin-a11y"
            icon={faUser}
            size="2x"
          />
        </button>
        <button onClick={() => navigate("/Settings")}>
          <FontAwesomeIcon
            id="settingsIcon"
            className="hidden md:flex mr-14 hover:animate-spin text-skin-a11y"
            icon={faGear}
            size="2x"
          />
        </button>
        <button onClick={() => navigate("/Login")}>
          <FontAwesomeIcon
            id="logoutIcon"
            className="hidden md:flex mr-10 hover:animate-ping text-skin-a11y"
            icon={faSignOut}
            size="2x"
          />
        </button>
      </div>
      <div className="flex justify-between md:hidden">
        <button>
          <Hamburger />
        </button>
      </div>
    </div>
  );
}
