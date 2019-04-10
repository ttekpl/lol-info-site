import React from "react";

const Hero = props => {
  return (
    <section
      style={{
        backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${
          props.data.id
        }_0.jpg)`,
        height: "50vh"
      }}
    >
      {props.data.name}
    </section>
  );
};

export default Hero;
