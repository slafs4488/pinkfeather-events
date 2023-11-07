import React from "react";
import "./Hero.css";
import { Button } from "@mui/material";
import { HashLink as Link } from "react-router-hash-link";
import head_img from './../assets/hero.webp'

function Hero() {
  return (
    <div className="hero">
      <div className="hero-page">
        <div className="hero-content">
          <h1>Creating <br/> Unforgettable Moments</h1>
          <p>
          PinkFeather Events is a leading event planning and management company based in Jaipur, India. We specialize in crafting unique and bespoke experiences for our clients that leave a lasting impression.
          </p>
          <Link to="#services">
          <button className="border rounded hero-btn  p-3 mb-4">View All Services</button>
          </Link>
        </div>
        <div className="hero-image">
          <img
            src={head_img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
