import React from "react";
import "../styles/Player.css";
import { Spring } from "react-spring/renderprops";

const Player = ({
  show,
  icon,
  name,
  lvl,
  tier,
  rank,
  score,
  leagueName,
  trigger
}) => {
  console.log(show);
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: show ? 1 : 0 }}>
      {props => (
        <div style={props}>
          <div className="player">
            <h1 className="playerName">{name}</h1>
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/9.6.1/img/profileicon/${icon}.png`}
              alt="Player icon"
              onLoad={trigger}
            />
            <h2>LVL: {lvl}</h2>
            <h2>Tier: {tier}</h2>
            <h2>League: {rank}</h2>
            <h2>Score: {score}</h2>
            <h2>League name: {leagueName}</h2>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default Player;
