import React from "react";

import s from "./Button.module.scss";

interface IProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

const Button: React.FC<IProps> = ({ children, className, onClick }) => {
  return (
    <button className={`${s.button} ${className}`}>
      {children}
      <span className={s.borderLine}></span>
      <span className={s.borderLine}></span>
      <span className={s.lighter}></span>
      <span className={s.lighter}></span>
    </button>
  );
};

export default Button;
