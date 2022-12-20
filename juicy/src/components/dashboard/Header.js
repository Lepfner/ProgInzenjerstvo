import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOut,
  faGear,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import JuicyLogo from "../images/logo.png";
import Filter from "./Filter";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function navSettings() {
    localStorage.setItem("current", "settings");
    window.location.reload(false);
  }

  function navMain() {
    localStorage.setItem("current", "main");
    window.location.reload(false);
  }

  return (
    <div className="flex justify-between bg-orange-500 pt-7 pb-7 ">
      <div className="md:ml-10 min-w-[50%]">
        <button onClick={() => navMain()}>
          <img src={JuicyLogo} alt="" className="h-20" />
        </button>
      </div>
      <div className="flex justify-between md:hidden">
        <button>
          <FontAwesomeIcon
            id="logoIcon"
            className="mr-10 hover:animate-pulse"
            icon={faBars}
            size="2x"
          />
        </button>
      </div>
      <div className="flex">
        {/* TODO: Find a better way to solve display issues here */}
        <button className="mr-14">
          <Filter />
        </button>
        <button>
          <FontAwesomeIcon
            id="logoIcon"
            className="hidden md:flex mr-14 hover:animate-pulse"
            icon={faUser}
            size="2x"
          />
        </button>
        <button onClick={() => navSettings()}>
          <FontAwesomeIcon
            id="settingsIcon"
            className="hidden md:flex mr-14 hover:animate-spin"
            icon={faGear}
            size="2x"
          />
        </button>
        <button onClick={() => navigate("/Login")}>
          <FontAwesomeIcon
            id="logoutIcon"
            className="hidden md:flex mr-10 hover:animate-ping"
            icon={faSignOut}
            size="2x"
          />
        </button>
      </div>
    </div>
  );
}
