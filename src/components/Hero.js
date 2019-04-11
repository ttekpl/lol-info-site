import React from "react";
import "../styles/Hero.css";
import { FaInfo, FaBook, FaChartBar, FaPlay } from "react-icons/fa";

const Hero = ({ data }) => {
  const txt = data[0].blurb.replace(/(<([^>]+)>)/gi, "");
  const lore = data[0].lore.replace(/(<([^>]+)>)/gi, "");

  return (
    <>
      <article className="overview" id="overview">
        <nav className="heroMenu">
          <ul>
            <li>
              <a href="#overview">
                <FaPlay />
                Start
              </a>
            </li>
            <li>
              <a href="#roles">
                <FaChartBar />
                Roles
              </a>
            </li>
            <li>
              <a href="#story">
                <FaBook /> Story
              </a>
            </li>
            <li>
              <a href="#stats">
                <FaInfo />
                Stats
              </a>
            </li>
          </ul>
        </nav>
        <div className="wrapOverview">
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
      <article id="roles">
        <h1 className="role">Roles</h1>
        <div className="wrapRoles">
          <div
            className="bar"
            style={{
              width: `calc( ${data[0].info.attack} * 7vw)`
            }}
          >
            attack: {data[0].info.attack}
          </div>

          <div
            className="bar"
            style={{
              width: `calc( ${data[0].info.defense} * 7vw)`
            }}
          >
            defense: {data[0].info.defense}
          </div>

          <div
            className="bar"
            style={{
              width: `calc( ${data[0].info.magic} * 7vw)`
            }}
          >
            magic: {data[0].info.magic}
          </div>

          <div
            className="bar"
            style={{
              width: `calc( ${data[0].info.difficulty} * 7vw)`
            }}
          >
            difficulty: {data[0].info.difficulty}
          </div>
        </div>
      </article>

      <article id="story">
        <div className="story">
          <h1 className="story">Lore of {data[0].name}</h1>
          <p className="story">{lore}</p>
        </div>
      </article>
    </>
  );
};

export default Hero;
