import React from "react";
import "../styles/Hero.css";

const Hero = ({ data }) => {
  const txt = data[0].blurb.replace(/(<([^>]+)>)/gi, "");

  return (
    <>
      <article className="overview">
        <div className="gridContainer">
          <h2 className="title">{data[0].title}</h2>
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${
              data[0].id
            }_0.jpg`}
            alt=""
            className="splash"
          />
          <h1 className="name">{data[0].name}</h1>
          <p className="lore">{txt}</p>
        </div>
      </article>
      <article className="abilities">Abilities</article>
    </>
  );
};

export default Hero;
