import React from "react";
import "./hero.css";
import hand_img from '../assents/hero-hand.png'
import img from '../assents/hero-img.png'

export default function hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
      
      <div>
      <div className="hand-icon">
        <p>new</p>
        <img src={hand_img} alt=""/>
      </div>
      <p>collections</p>
      <p>for every one</p>
      </div>
      <div className="hero-latest-btn">
       <div>Latest Collection</div>
       {/* <img src="" alt=""/> */}
      </div>
      </div>
      <div className="hero-right">
       <img src={img} alt="hero"/>
      </div>
    </div>
  );
}
