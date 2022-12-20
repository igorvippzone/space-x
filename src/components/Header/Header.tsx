import React from "react";
import { Link } from "react-router-dom";

import logoImage from "../../assets/images/logo.png";
import Nav from "../Nav/Nav";

import s from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={`container ${s.headerWrapper}`}>
        <div className={s.logo}>
          <Link to="/">
            <img src={logoImage} alt="Логотип spaceX" />
            <span className={s.logoLeft}></span>
            <span className={s.logoRight}></span>
          </Link>
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
