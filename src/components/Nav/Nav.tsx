import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Media from "react-media";
import { CgMenu } from "react-icons/cg";

import { menuLink } from "./data";
import PopupMenu from "../PopupMenu/PopupMenu";
import s from "./Nav.module.scss";

const Nav: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const openMenuHandler = () => {
    setShowModal(true);
    document.body.classList.add("no-scroll");
  };

  const closeMenuHandler = () => {
    setShowModal(false);
    document.body.classList.remove("no-scroll");
  };

  const menu = (
    <ul className={s.nav}>
      {menuLink.map((item) => {
        return (
          <li key={item.label}>
            <NavLink
              className={({ isActive }) => {
                return isActive ? s.active : "";
              }}
              to={item.path}
              onClick={closeMenuHandler}
            >
              {item.label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );

  return (
    <nav>
      <Media query="(max-width: 991px)">
        {(matches) => {
          return matches ? (
            <>
              {!showModal && (
                <button className={s.burger} onClick={openMenuHandler}>
                  <CgMenu />
                </button>
              )}

              {showModal && (
                <PopupMenu onClose={closeMenuHandler} children={menu} />
              )}
            </>
          ) : (
            menu
          );
        }}
      </Media>
    </nav>
  );
};

export default Nav;
