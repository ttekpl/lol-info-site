import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Hero from "../components/Hero";
import "../styles/HeroLinks.css";

class HeroLinks extends React.Component {
  state = {
    champions: null,
    routs: null
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
    const { champions, routs } = this.state;
    return (
      <section className="heroLinks">
        Heroes list
        <div className="links">{champions ? champions : null}</div>
        {routs ? routs : null}
      </section>
    );
  };
}

export default HeroLinks;
