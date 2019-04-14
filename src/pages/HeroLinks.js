import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Hero from "../components/Hero";
import "../styles/HeroLinks.css";
import { Spring, Transition } from "react-spring/renderprops";
import { FaShopware } from "react-icons/fa";

class HeroLinks extends React.Component {
  state = {
    champions: null
  };

  componentDidMount = () => {
    const API = `http://ddragon.leagueoflegends.com/cdn/9.6.1/data/en_US/champion.json 
      `;
    fetch(API)
      .then(response => {
        if (response.ok) return response;
        return new Error("error occured");
      })
      .then(response => response.json())
      .then(({ data }) => {
        const champions = Object.values(data).map(hero => (
          <Link key={hero.id} to={`/Hero/${hero.id}`}>
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/9.6.1/img/champion/${
                hero.id
              }.png`}
              alt=""
            />
            <p>{hero.name}</p>
          </Link>
        ));

        this.setState({
          champions
        });
      })
      .catch(error => console.log(error));
  };

  render = () => {
    console.log(this.props);
    const { champions, routs } = this.state;
    const show = this.props.path === "/Heroes";
    return (
      <Transition
        items={FaShopware}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {show =>
          show &&
          (props => (
            <div style={props}>
              <section className="heroLinks">
                <h1 className="heroLink_H1">Heroes list</h1>
                <div className="links">{champions ? champions : null}</div>
              </section>
            </div>
          ))
        }
      </Transition>
    );
  };
}

export default HeroLinks;
