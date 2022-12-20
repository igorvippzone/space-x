import React from "react";
import Card from "../Card/Card";

import s from "./Advantages.module.scss";

const Advantages: React.FC = () => {
  return (
    <div className={s.advantages}>
      <Card topTxt="мы" bottomTxt="на рынке" value="1" className={s.bgDeg315} />
      <Card
        topTxt="гарантируем"
        bottomTxt="безопасность"
        value="50%"
        className={s.bgDeg45}
      />
      <Card
        topTxt="календарик за"
        bottomTxt="в подарок"
        value="2001"
        label="г."
        className={s.bgDeg225}
      />
      <Card
        topTxt="путешествие"
        bottomTxt="дней"
        value="597"
        className={s.bgDeg135}
      />
    </div>
  );
};

export default Advantages;
