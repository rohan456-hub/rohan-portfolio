import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-container">

        {/* Social Cards */}
        <div className="social-cards">

          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-card linkedin">
            <h3>LinkedIn</h3>
            <p>Connect professionally</p>
          </a>

          <a href="https://github.com" target="_blank" rel="noreferrer" className="social-card github">
            <h3>GitHub</h3>
            <p>View my projects</p>
          </a>

        </div>


        {/* Contact Info */}
        <div className="contact-info">

          <div className="info-box">
            <h4>Email</h4>
            <span>rohanmodi2169@gmail.com</span>
          </div>

          <div className="info-box">
            <h4>Phone</h4>
            <span>+91 7383593523 </span>
          </div>

          <div className="info-box">
            <h4>Location</h4>
            <span>Surat, Gujarat</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;