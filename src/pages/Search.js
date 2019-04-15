import React, { Component } from "react";
import "../styles/Search.css";
import { Spring } from "react-spring/renderprops";
import { FaSearch } from "react-icons/fa";
import Player from "../components/Player";

class Search extends Component {
  state = {
    value: "",
    loaded: false
  };

  onImgLoad = () => {
    console.log("loadedddd");
    this.setState({
      loaded: true
    });
  };

  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const KEY = "RGAPI-a68d7a68-c7e5-4c72-9e90-fe4a83451410";
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${
      this.state.value
    }?api_key=${KEY}
`;
    // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          lvl: data.summonerLevel,
          icon: data.profileIconId,
          name: data.name,
          id: data.id
        });
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://eun1.api.riotgames.com/lol/league/v4/positions/by-summoner/${
          data.id
        }?api_key=${KEY}
    `;
        fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
          .then(response => response.json())
          .then(([data]) => {
            console.log(data);
            this.setState({
              tier: data.tier,
              rank: data.rank,
              score: data.leaguePoints,
              leagueName: data.leagueName
            });
            console.log("working");
          })
          .catch(() =>
            console.log(
              "Can’t access " + url + " response. Blocked by browser?"
            )
          );
      })
      .catch(() =>
        console.log("Can’t access " + url + " response. Blocked by browser?")
      );
  };

  render() {
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => (
          <div style={props}>
            <div className="search">
              <form onSubmit={this.onSubmit}>
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  onSubmit={this.onSubmit}
                />
                <FaSearch />
                <h1 className="form_h1">Search for a player</h1>
              </form>
              {this.state.tier ? (
                <Player
                  lvl={this.state.lvl}
                  name={this.state.name}
                  icon={this.state.icon}
                  id={this.state.id}
                  tier={this.state.tier}
                  rank={this.state.rank}
                  score={this.state.score}
                  leagueName={this.state.leagueName}
                  trigger={this.onImgLoad}
                  show={this.state.loaded}
                />
              ) : null}
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default Search;
