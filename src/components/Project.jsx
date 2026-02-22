import React from "react";
import "./Project.css"
const Projects = () => {
  return (
    <div className="section">
      <h2>Projects</h2>
   <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <p class="title">Travel Booking Website</p>
            <p>Full Stack MERN Project</p>
        </div>
        <div class="flip-card-back">
            <p class="title">Project Details</p>
            <p>Flight & Hotel Booking System</p>
            <p>React • Node • MongoDB</p>
            <p>Click to View Live</p>
        </div>
    </div>
</div>
<div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <p class="title">Animal Encyclopedia</p>
            <p>Interactive Animal Database</p>
        </div>
        <div class="flip-card-back">
            <p class="title">Project Details</p>
            <p>Animals Info + Images + Videos</p>
            <p>Search & Filter System</p>
            <p>Click to Explore</p>
        </div>
    </div>
</div>
<div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <p class="title">Article Website</p>
            <p>Content Publishing Platform</p>
        </div>
        <div class="flip-card-back">
            <p class="title">Project Details</p>
            <p>Create • Read • Manage Articles</p>
            <p>MERN Stack Project</p>
            <p>Click to Visit</p>
        </div>
    </div>
</div>
    </div>
  );
  
};

export default Projects;
