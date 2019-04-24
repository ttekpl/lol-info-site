import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
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
    isMenuVisible: false
  };

  // componentDidUpdate(nextProps) {
  //   if (nextProps.location !== this.props.location) {
  //     this.setState({ prevPath: this.props.location });
  //   }
  // }

  toggleMenu = () => {
    this.setState(prev => ({
      isMenuVisible: !prev.isMenuVisible
    }));
  };

  render = () => {
    console.log(this.props);
    return (
      <>
        <Menu
          toggle={this.toggleMenu}
          isMenuVisible={this.state.isMenuVisible}
        />
        <main
          style={{
            transform: `translateX(${this.state.isMenuVisible ? "60%" : "0%"})`
          }}
          onClick={this.state.isMenuVisible ? this.toggleMenu : null}
        >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/Search"
              component={() => (
                <Search
                  prevPath={this.state.prevPath ? this.state.prevPath : null}
                />
              )}
            />
            <Route path="/Heroes" component={HeroLinks} />
            <Route path="/Hero/:id" component={HeroPage} />
            {/* <Route component={error}></Route> */}
          </Switch>
        </main>
      </>
    );
  };
}

export default Page;
