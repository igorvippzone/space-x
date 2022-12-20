import React from "react";
import Media from "react-media";

import planetImage from "../../assets/images/planet.png";
import { Advantages, Button } from "../../components";
import s from "./HomePage.module.scss";

const HomePage: React.FC = () => {
  return (
    <div className={s.home}>
      <div className={s.wrapperTitle}>
        <h1 className={s.title}>Путешествие</h1>
        <p className={s.titleBottom}>на красную планету</p>

        <Media query="(max-width: 767px)">
          {(matches) => {
            return (
              !matches && (
                <div className={s.planet}>
                  <img src={planetImage} />
                  <div className={s.line}>
                    <span></span>
                  </div>
                </div>
              )
            );
          }}
        </Media>

        <Button className={s.button}>Начать путешествие</Button>
      </div>

      <Advantages />
    </div>
  );
};

export default HomePage;
