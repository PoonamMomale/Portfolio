import React from "react";
import { Button } from "./Button";
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="https://cdn.pixabay.com/video/2024/04/05/207007_large.mp4" autoPlay loop muted />
      <h1>Poonam Momale</h1>
      <p>Frontend Developer</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
            Get Started
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
            Watch Trailer <i className="fa-solid fa-play"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
