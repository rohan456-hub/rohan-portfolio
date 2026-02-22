import React from "react";
import profileImg from "./Hero.jpeg";
import resume from "./rohanmodi.pdf";

import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Rohan Modi</h1>
          <h2>MERN Stack Developer</h2>
          <p>
            MCA Student | Passionate about building modern web applications
            with clean UI and powerful backend.
          </p>
          <a href="#contact" className="hero-btn">
            Contact Me
          </a>
          <a href={resume} download className="resume-btn">
            ⬇ Download Resume
          </a>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <img src={profileImg} alt="Rohan Modi" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

