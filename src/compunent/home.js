import React from "react";
import "./style.css";
import Hero from "../hero/hero";
import Popular from "./popular/popular";
import Offer from "../offer/offer";
import Newcollection from "./Newcollection/Newcollection";
import NewsLetter from "./NewsLetter/NewsLetter";

function home() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <Newcollection />
      <NewsLetter />
    </div>
  );
}

export default home;
