import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Hero from "../components/Hero";
import "../styles/Page.css";

class Temporary extends React.Component {
  state = {
    champions: null,
    routs: null
  };

  componentDidMount = () => {
    const API = `http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json 
      `;
    fetch(API)
      .then(response => {
        if (response.ok) return response;
        return new Error("error occured");
      })
      .then(response => response.json())
      .then(({ data }) => {
        const champions = Object.values(data).map(hero => (
          <Link key={hero.id} to={`/${hero.id}`}>
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${
                hero.id
              }.png`}
              alt=""
            />
            <p>{hero.name}</p>
          </Link>
        ));

        const routs = Object.values(data).map(hero => (
          <Route
            path={`/${hero.id}`}
            exact
            key={hero.id}
            component={() => {
              return <Hero data={hero} />;
            }}
          />
        ));

        this.setState({
          champions,
          routs
        });
      })
      .catch(error => console.log(error));
  };

  render = () => {
    const { champions, routs } = this.state;
    return (
      <main>
        Heroes list
        <div className="links">{champions ? champions : null}</div>
        {routs ? routs : null}
      </main>
    );
  };
}

export default Temporary;
