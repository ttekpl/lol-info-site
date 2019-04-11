import React from "react";
import "../styles/Hero.css";

const Hero = ({ data }) => {
  return (
    <>
      <article className="overview">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${
            data[0].id
          }_0.jpg`}
          alt=""
          className="splash"
        />
        {data[0].title}
      </article>
    </>
  );
};

export default Hero;
