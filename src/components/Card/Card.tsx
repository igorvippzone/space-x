import React from "react";

import s from "./Card.module.scss";

interface IProps {
  topTxt: string;
  value: string;
  bottomTxt: string;
  className?: string;
  label?: string;
}

const Card: React.FC<IProps> = ({
  topTxt,
  value,
  bottomTxt,
  label,
  className,
}) => {
  return (
    <div className={`${className} ${s.card}`}>
      <p>{topTxt}</p>
      <h3 className={s.value}>
        {value}
        <span className={s.label}>{label}</span>
      </h3>
      <p>{bottomTxt}</p>
    </div>
  );
};

export default Card;
