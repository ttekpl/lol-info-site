import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Hero from "../components/Hero";
import "../styles/Page.css";
import Home from "../pages/Home";
import HeroPage from "../pages/HeroPage";
import Menu from "./Menu";
import HeroLinks from "../pages/HeroLinks";

class Page extends React.Component {
  state = {};

  render = () => {
    return (
      <main>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Search" />
          <Route path="/Heroes" component={HeroLinks} />
          <Route path="/Hero/:id" component={HeroPage} />
          {/* <Route component={error}></Route> */}
        </Switch>
      </main>
    );
  };
}

export default Page;
