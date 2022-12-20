import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import s from "./PopupMenu.module.scss";

interface IModal {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<IModal> = ({ onClose, children }) => {
  return (
    <>
      <div className={s.backdrop} onClick={onClose}></div>
      <div className={s.modal}>
        <div className={s.content}>{children}</div>
      </div>
    </>
  );
};

const portalElement = document.getElementById("modal") as HTMLElement;

const PopupMenu: React.FC<IModal> = ({ onClose, children }) => {
  return portalElement
    ? ReactDOM.createPortal(
        <Modal onClose={onClose}> {children}</Modal>,
        portalElement
      )
    : null;
};

export default PopupMenu;
