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
              <a href="#skills">
                <FaInfo />
                Skills
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

      <article id="skills">
        <div className="skillsWrap">
          <div>
            <h2>Q-{data[0].spells[0].name}</h2>
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/9.6.1/img/spell/${
                data[0].spells[0].id
              }.png`}
              alt=""
            />
            <p>{data[0].spells[0].description}</p>
            <h2>1 lvl cost :{data[0].spells[0].cost[0]}</h2>
            <h2>5 lvl cost :{data[0].spells[0].cost[4]}</h2>
            <h2>1 lvl cooldown :{data[0].spells[0].cooldown[0]}</h2>
            <h2>5 lvl cooldown :{data[0].spells[0].cooldown[4]}</h2>
          </div>

          <div>
            <h2>W-{data[0].spells[1].name}</h2>
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/9.6.1/img/spell/${
                data[0].spells[1].id
              }.png`}
              alt=""
            />
            <p>{data[0].spells[1].description}</p>
            <h2>1 lvl cost :{data[0].spells[1].cost[0]}</h2>
            <h2>5 lvl cost :{data[0].spells[1].cost[4]}</h2>
            <h2>1 lvl cooldown :{data[0].spells[1].cooldown[0]}</h2>
            <h2>5 lvl cooldown :{data[0].spells[1].cooldown[4]}</h2>
          </div>

          <div>
            <h2>E-{data[0].spells[2].name}</h2>
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/9.6.1/img/spell/${
                data[0].spells[2].id
              }.png`}
              alt=""
            />
            <p>{data[0].spells[2].description}</p>
            <h2>1 lvl cost :{data[0].spells[2].cost[0]}</h2>
            <h2>5 lvl cost :{data[0].spells[2].cost[4]}</h2>
            <h2>1 lvl cooldown :{data[0].spells[2].cooldown[0]}</h2>
            <h2>5 lvl cooldown :{data[0].spells[2].cooldown[4]}</h2>
          </div>

          <div>
            <h2>R-{data[0].spells[3].name}</h2>
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/9.6.1/img/spell/${
                data[0].spells[3].id
              }.png`}
              alt=""
            />
            <p>{data[0].spells[3].description}</p>
            <h2>1 lvl cost :{data[0].spells[3].cost[0]}</h2>
            <h2>5 lvl cost :{data[0].spells[3].cost[4]}</h2>
            <h2>1 lvl cooldown :{data[0].spells[3].cooldown[0]}</h2>
            <h2>5 lvl cooldown :{data[0].spells[3].cooldown[4]}</h2>
          </div>

          <div>
            <h2>Passive-{data[0].passive.name}</h2>

            <p>{data[0].passive.description}</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Hero;
