import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Menu, SubMenu, Item } from "burger-menu";
import "burger-menu/lib/index.css";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon
          id="logoIcon"
          className="mr-10 hover:animate-pulse"
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
        <Item className="" itemKey={"profile"} text={"My Profile"}></Item>
        <Item itemKey={"settings"} text={"Settings"}></Item>
        <Item itemKey={"logout"} text={"Logout"}></Item>
      </Menu>
    </>
  );
};

export default Hamburger;
