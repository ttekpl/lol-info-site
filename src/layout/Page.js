import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Hero from "../components/Hero";

const Page = () => {
  const API = `http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json 
    `;
  fetch(API).then(response => {
    if (response.ok) return response;
    return new Error("error occured");
  });

  return <main>heroes list </main>;
};

export default Page;
