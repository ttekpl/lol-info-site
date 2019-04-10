import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../styles/App.css";
import Page from "./Page";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          work
          <Page />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
