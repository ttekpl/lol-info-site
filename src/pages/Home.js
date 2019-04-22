import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <section className="home">
      <h1 className="home__title">Hello on the main page!</h1>
      <article className="home__article">
        <p className="home__description">
          On this site you can search for data about players and champions in
          League of legends.
        </p>
        <p className="home__description  home__description--mute">
          Note: The search supports only eune server. Work in progress.
        </p>
      </article>
    </section>
  );
};

export default Home;
