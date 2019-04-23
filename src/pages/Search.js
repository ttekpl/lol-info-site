import React, { Component } from "react";
import "../styles/Search.css";
import { Spring } from "react-spring/renderprops";
import { FaSearch } from "react-icons/fa";
import Player from "../components/Player";

class Search extends Component {
  state = {
    value: "",
    loaded: true
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
    const KEY = "RGAPI-3cfe99f3-4078-42ce-bb9e-e07c2b2ccefe";
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${
      this.state.value
    }?api_key=${KEY}
`;
    // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
      .then(response => {
        console.log(response.status);
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("error");
        }
      })
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
          .catch(() => {
            console.log(
              "Can’t access " + url + " response. Blocked by browser?"
            );
            this.setState({
              tier: "nothing founded",
              rank: "nothing founded",
              score: "nothing founded",
              leagueName: "nothing founded"
            });
          });
      })
      .catch(() => {
        console.log("Can’t access " + url + " response. Blocked by browser?");

        this.setState({
          lvl: "nothing founded",
          score: "nothing founded",
          name: "nothing founded",
          id: "nothing founded"
        });
      });
  };

  render() {
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => (
          <div style={props}>
            <div className="search">
              <form onSubmit={this.onSubmit} className="search__form">
                <h1 className="form__h1">Search for a player</h1>
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  onSubmit={this.onSubmit}
                  placeholder="type here"
                />
                <button onClick={this.onSubmit} className="form__button">
                  Search
                </button>
              </form>
              {this.state.lvl !== "nothing founded" && this.state.lvl ? (
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
              ) : this.state.name === "nothing founded" ? (
                <h1 className="search__instruction">
                  We did not find data for such a player!
                </h1>
              ) : (
                <h1 className="search__instruction">Data will appear here</h1>
              )}
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default Search;
