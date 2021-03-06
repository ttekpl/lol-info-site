import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import { Spring } from "react-spring/renderprops";
import { FaCommentDollar } from "react-icons/fa";

class HeroPage extends React.Component {
  state = {
    hero: ",",
    show: false
  };

  onImgLoad = () => {
    this.setState({
      show: true
    });
  };

  componentDidMount = () => {
    this.props.del();
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

    return (
      <Spring
        from={{ opacity: this.props.isMenuVisible === null ? 0 : 1 }}
        to={{ opacity: 1 }}
        delay={500}
        config={{ duration: 800 }}
      >
        {props => (
          <div style={props}>
            {this.state.data ? (
              <Hero
                show={this.state.show}
                trigger={this.onImgLoad}
                blurb={
                  data[0].blurb.replace(/(<([^>]+)>)/gi, "").slice(0, 180) +
                  "..."
                }
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
                passiveDescription={data[0].passive.description.replace(
                  /(<([^>]+)>)/gi,
                  ""
                )}
              />
            ) : null}
          </div>
        )}
      </Spring>
    );
  };
}

export default HeroPage;
