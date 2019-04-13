import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import "../styles/Page.css";

class HeroPage extends React.Component {
  state = {
    hero: ","
  };

  componentDidMount = () => {
    const API = `http://ddragon.leagueoflegends.com/cdn/9.6.1/data/en_US/champion/${
      this.props.match.params.id
    }.json`;
    fetch(API)
      .then(response => {
        if (response.ok) return response;
        return new Error("error occured");
      })
      .then(response => response.json())
      .then(({ data }) => {
        const info = Object.values(data);

        this.setState({
          data: info
        });
      })
      .catch(error => console.log(error));
  };

  render = () => {
    const { data } = this.state;
    console.log(this.props);
    return (
      <section>
        {this.state.data ? (
          <Hero
            blurb={data[0].blurb.replace(/(<([^>]+)>)/gi, "")}
            lore={data[0].lore.replace(/(<([^>]+)>)/gi, "")}
            title={data[0].title}
            id={data[0].id}
            name={data[0].name}
            attack={data[0].info.attack}
            defense={data[0].info.defense}
            magic={data[0].info.magic}
            difficulty={data[0].info.difficulty}
            spells={data[0].spells}
            passiveName={data[0].passive.name}
            passiveDescription={data[0].passive.description}
          />
        ) : null}
      </section>
    );
  };
}

export default HeroPage;
