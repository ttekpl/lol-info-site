import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">work</div>
      </BrowserRouter>
    );
  }
}

export default App;
