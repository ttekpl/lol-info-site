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
  };

  render() {
    console.log(this.props.prevPath);
    return (
      <div className="search">
        <form action="">
          <input
            type="text"
            value={this.state.value}
            onChange={this.onChange}
          />
          <h1 className="form_h1">Search for a player</h1>
        </form>
      </div>
    );
  }
}

export default Search;
