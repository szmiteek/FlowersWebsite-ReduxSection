import React from "react";
import "../styles/Header.css";
import header from "../images/header.png";

const Header = () => {
  return (
    <header>
      <img src={header} alt="logo" />
    </header>
  );
};
export default Header;
