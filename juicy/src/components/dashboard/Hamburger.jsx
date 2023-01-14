import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "burger-menu";
import "burger-menu/lib/index.css";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon
          id="logoIcon"
          className="mr-10 hover:animate-pulse text-skin-a11y"
          icon={faBars}
          size="2x"
        />
      </div>
      <Menu
        className="burger-menu"
        isOpen={isOpen}
        selectedKey={"entry"}
        onClose={() => setIsOpen(false)}
      >
        <div className="flex flex-col">
        <a href="/MyProfile" className="mb-10">My Profile</a>
        <a href="/Settings" className="mb-10">Settings</a>
        <a href="/Login" className="mb-10">Logout</a>
        </div>
      </Menu>
    </>
  );
};

export default Hamburger;
