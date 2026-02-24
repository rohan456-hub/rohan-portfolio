import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about section">
      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-left">
          <h2 className="section-title">About Me</h2>

          <p>
            I'm <strong>Rohan Modi</strong>, a passionate MCA student and MERN Stack Developer.
            I love building modern, responsive, and performance-driven web applications.
          </p>

          <p>
            I enjoy solving real-world problems using JavaScript, React, Node.js,
            and MongoDB. My goal is to become a skilled full-stack developer
            and work with top tech companies.
          </p>

          <div className="about-info">

            <div className="info-box">
              <h3>🎓 Education</h3>
              <span>MCA – Poornima University</span>
            </div>

            <div className="info-box">
              <h3>📍 Location</h3>
              <span>Surat, Gujarat</span>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="about-right">
          <div className="about-card">
            <h3>💻 What I Do</h3>
            <ul>
              <li>Full Stack Web Development</li>
              <li>REST API Development</li>
              <li>Responsive UI Design</li>
              <li>MongoDB Database Handling</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;