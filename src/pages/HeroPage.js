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
    console.log(this.props);
    return (
      <section>
        {this.state.data ? <Hero data={this.state.data} /> : null}
        <div className="back">
          <Link to="/Heroes">Back</Link>
        </div>
      </section>
    );
  };
}

export default HeroPage;
