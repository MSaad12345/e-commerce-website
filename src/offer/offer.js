import React from "react";
import "./offer.css";
import Exclusiveimg from '../assents/eclusiveimg.png'

export default function offer() {
  return (
    <div className="offer">
      <div className="offer-left">
        <h1> Exclusive</h1>
        <h1> Offer for You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offer-right">
        <img src={Exclusiveimg} alt=""></img>
      </div>
    </div>
  );
}
