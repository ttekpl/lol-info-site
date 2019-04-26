import React from "react";
import "../styles/Home.css";
import { Spring, Transition } from "react-spring/renderprops";

class Home extends React.Component {
  componentDidMount() {
    this.props.set();
  }

  render = () => (
    <Spring
      from={{ opacity: this.props.isMenuVisible === null ? 0 : 1 }}
      to={{ opacity: 1 }}
    >
      {props => (
        <div style={props}>
          <section className="home">
            <h1 className="home__title">Hello on the main page!</h1>
            <article className="home__article">
              <p className="home__description">
                On this site you can search for data about players and champions
                in League of legends.
              </p>
              <p className="home__description  home__description--mute">
                Note: The search supports only eune server and we provide data
                from patch 9.6.1 . Work in progress.
              </p>
            </article>
          </section>
        </div>
      )}
    </Spring>
  );
}

export default Home;
