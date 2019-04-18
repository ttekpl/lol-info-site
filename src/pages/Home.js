import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <section className="homePage">
      <article>
        <h1 className="homeTitle">Hello on the main page!</h1>
        <p className="homeDescription">
          On this site you can search for data about player and champions in
          League of legends.
        </p>
        <p className="homeDescription">
          Note: The search supports only eune server. Work in progress.
        </p>
      </article>
    </section>
  );
};

export default Home;
