// src/components/AboutMe.js

import React from 'react';
import './AboutMe.css'; // Import the CSS file for styling
import profilePhoto from './pfp.jpeg'
const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="container">
        <div className="header">
          <img src={profilePhoto} alt="Krish Shah" className="profile-photo" />
          <h1>Krish Shah</h1>
          <p className="subtitle">Aspiring Software Engineer and Quant</p>
        </div>
        <div className="content">
          <section className="about-section">
            <h2>About Me</h2>
            <p>Hello! I'm Krish Shah, and I'm currently pursuing a B.S. in Computer Science and B.A. in Applied Mathematics at the University of Connecticut. I'm set to graduate in May 2026.</p>
            <p>I have a passion for machine learning, finance, and software development. I'm constantly seeking to learn new technologies and improve my skills. I enjoy solving complex problems and am enthusiastic about the opportunities that technology brings to make the world a better place.</p>
            <p>When I'm not coding, you can find me lifting weights, training Muay Thai, or reading about the latest tech. Feel free to connect with me!</p>
          </section>
          <section className="experience-section">
            <h2>Experiences</h2>
            <div className="experience">
              <h3>Berkley Small Business Solutions</h3>
              <p class="italic"> Software Engineer Intern</p>
            </div>
            <div className="experience">
              <h3>Hillside Ventures</h3>
              <p class="italic">Portfolio Manager and SaaS Lead</p>
            </div>
            <div className="experience">
              <h3>El Gato Laboratory</h3>
              <p class="italic">Artificial Intelligence Research Assistant</p>
            </div>
            <div className="experience">
              <h3>UConn Information Technology Services</h3>
              <p class="italic">Software Technical Specialist</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
