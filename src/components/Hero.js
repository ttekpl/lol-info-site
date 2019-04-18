import React from "react";
import "../styles/Hero.css";
import { FaInfo, FaBook, FaChartBar, FaPlay } from "react-icons/fa";
import { Spring, Transition } from "react-spring/renderprops";

const Hero = ({
  blurb,
  lore,
  title,
  id,
  name,
  attack,
  defense,
  magic,
  difficulty,
  spells,
  passiveName,
  passiveDescription,
  trigger,
  show
}) => {
  return (
    <>
      <Transition
        items={!show}
        from={{ opacity: 1 }}
        to={{ opacity: 1 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {show =>
          show &&
          (props => (
            <div style={props}>
              <div className="lds-dual-ring" />
            </div>
          ))
        }
      </Transition>
      <Spring from={{ opacity: 0 }} to={{ opacity: show ? 1 : 0 }}>
        {props => (
          <div style={props}>
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
                <h2 className="title">{title}</h2>
                <img
                  src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}
                  alt=""
                  className="splash"
                  onLoad={trigger}
                />
                <h1 className="name">{name}</h1>
                <p className="blurb">{blurb}</p>
              </div>
            </article>
            <article id="roles">
              <h1 className="role">Roles</h1>
              <div className="wrapRoles">
                <div
                  className="bar"
                  style={{
                    width: `calc( ${attack} * 6vw)`
                  }}
                >
                  attack: {attack}
                </div>

                <div
                  className="bar"
                  style={{
                    width: `calc( ${defense} * 6vw)`
                  }}
                >
                  defense: {defense}
                </div>

                <div
                  className="bar"
                  style={{
                    width: `calc( ${magic} * 6vw)`
                  }}
                >
                  magic: {magic}
                </div>

                <div
                  className="bar"
                  style={{
                    width: `calc( ${difficulty} * 6vw)`
                  }}
                >
                  difficulty: {difficulty}
                </div>
              </div>
            </article>

            <article id="story">
              <div className="story">
                <h1 className="story">Lore of {name}</h1>
                <p className="story">{lore}</p>
              </div>
            </article>

            <article id="skills">
              <div className="skillsWrap">
                <div>
                  <h2>Q-{spells[0].name}</h2>
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/9.6.1/img/spell/${
                      spells[0].id
                    }.png`}
                    alt=""
                  />
                  <p>{spells[0].description}</p>
                  <h2>1 lvl cost :{spells[0].cost[0]}</h2>
                  <h2>max lvl cost :{[...spells[0].cost].reverse()[0]}</h2>
                  <h2>1 lvl cooldown :{spells[0].cooldown[0]}</h2>
                  <h2>
                    max lvl cooldown :{[...spells[0].cooldown].reverse()[0]}
                  </h2>
                </div>

                <div>
                  <h2>W-{spells[1].name}</h2>
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/9.6.1/img/spell/${
                      spells[1].id
                    }.png`}
                    alt=""
                  />
                  <p>{spells[1].description}</p>
                  <h2>1 lvl cost :{spells[1].cost[0]}</h2>
                  <h2>max lvl cost :{[...spells[1].cost].reverse()[0]}</h2>
                  <h2>1 lvl cooldown :{spells[1].cooldown[0]}</h2>
                  <h2>
                    max lvl cooldown :{[...spells[1].cooldown].reverse()[0]}
                  </h2>
                </div>

                <div>
                  <h2>E-{spells[2].name}</h2>
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/9.6.1/img/spell/${
                      spells[2].id
                    }.png`}
                    alt=""
                  />
                  <p>{spells[2].description}</p>
                  <h2>1 lvl cost :{spells[2].cost[0]}</h2>
                  <h2>max lvl cost :{[...spells[2].cost].reverse()[0]}</h2>
                  <h2>1 lvl cooldown :{spells[2].cooldown[0]}</h2>
                  <h2>
                    max lvl cooldown :{[...spells[2].cooldown].reverse()[0]}
                  </h2>
                </div>

                <div>
                  <h2>R-{spells[3].name}</h2>
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/9.6.1/img/spell/${
                      spells[3].id
                    }.png`}
                    alt=""
                  />
                  <p>{spells[3].description}</p>
                  <h2>1 lvl cost :{spells[3].cost[0]}</h2>
                  <h2>max lvl cost :{[...spells[3].cost].reverse()[0]}</h2>
                  <h2>1 lvl cooldown :{spells[3].cooldown[0]}</h2>
                  <h2>
                    max lvl cooldown :{[...spells[3].cooldown].reverse()[0]}
                  </h2>
                  {/* <h2>5 lvl cooldown :{spells[3].cooldown[4]}</h2> */}
                </div>

                <div>
                  <h2>Passive-{passiveName}</h2>

                  <p>{passiveDescription}</p>
                </div>
              </div>
            </article>
          </div>
        )}
      </Spring>
    </>
  );
};

export default Hero;
