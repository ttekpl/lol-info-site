import React, { Component } from "react";
import "../styles/Search.css";

class Search extends Component {
  state = {
    value: ""
  };

  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${
      this.state.value
    }?api_key=RGAPI-a68d7a68-c7e5-4c72-9e90-fe4a83451410
`;
    // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
      .then(response => response.json())
      .then(contents => console.log(contents))
      .catch(() =>
        console.log("Can’t access " + url + " response. Blocked by browser?")
      );

    // const xhr = new XMLHttpRequest();
    // xhr.open("GET", API, true);

    // xhr.setRequestHeader(
    //   "X-Riot-Token",
    //   "RGAPI-a68d7a68-c7e5-4c72-9e90-fe4a83451410"
    // );

    // xhr.setRequestHeader(
    //   "Accept-Language",
    //   "pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7"
    // );

    // xhr.setRequestHeader("Access-Control-Allow-Methdos", "GET");
    // xhr.setRequestHeader(
    //   "Access-Control-Allow-Headers",
    //   " Content-Type, Authorization"
    // );

    // xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");

    // xhr.onload = () => {
    //   console.log(xhr.status);
    //   console.log(xhr.response);
    //   if (xhr.status === 200) {
    //     this.setState({});
    //   }
    // };

    // xhr.send(null);
  };

  render() {
    console.log(this.props.prevPath);
    return (
      <div className="search">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
          />
          <h1 className="form_h1">Search for a player</h1>
        </form>
      </div>
    );
  }
}

export default Search;
