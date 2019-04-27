import React from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  withRoute
} from "react-router-dom";

import Hero from "../components/Hero";
import "../styles/Page.css";
import Home from "../pages/Home";
import HeroPage from "../pages/HeroPage";
import Menu from "./Menu";
import HeroLinks from "../pages/HeroLinks";
import Search from "../pages/Search";
import { FaCommentsDollar } from "react-icons/fa";

class Page extends React.Component {
  state = {
    isMenuVisible: null,
    shorter: false
  };

  onMenuItemClick = () => {
    this.setState({ isMenuVisible: null });
  };

  toggleMenu = () => {
    this.setState(prev => ({
      isMenuVisible: !prev.isMenuVisible
    }));
  };

  setShort = () => {
    this.setState(prev => ({
      shorter: true
    }));
  };

  delShort = () => {
    this.setState(prev => ({
      shorter: false
    }));
  };

  render = () => {
    return (
      <>
        <Menu
          toggle={this.toggleMenu}
          isMenuVisible={this.state.isMenuVisible}
          isShort={this.state.shorter}
          onMenuItemClick={this.onMenuItemClick}
        />
        <main
          className={` ${this.state.isMenuVisible ? "pushed" : ""}`}
          // style={{
          //   transform: `translateX(${this.state.isMenuVisible ? "60%" : "0%"})`
          // }}
          onClick={this.state.isMenuVisible ? this.toggleMenu : null}
        >
          <Switch>
            <Route
              path="/"
              exact
              render={props => (
                <Home
                  {...props}
                  set={this.setShort}
                  del={this.delShort}
                  isShort={this.state.shorter}
                  isMenuVisible={this.state.isMenuVisible}
                />
              )}
            />
            <Route
              path="/Search"
              render={props => (
                <Search
                  {...props}
                  set={this.setShort}
                  del={this.delShort}
                  isShort={this.state.shorter}
                  isMenuVisible={this.state.isMenuVisible}
                />
              )}
            />
            <Route
              path="/Heroes"
              render={props => (
                <HeroLinks
                  {...props}
                  isMenuVisible={this.state.isMenuVisible}
                  del={this.delShort}
                />
              )}
            />
            <Route
              path="/Hero/:id"
              render={props => (
                <HeroPage
                  {...props}
                  isMenuVisible={this.state.isMenuVisible}
                  del={this.delShort}
                />
              )}
            />
            {/* <Route component={error}></Route> */}
          </Switch>
        </main>
      </>
    );
  };
}

export default Page;
