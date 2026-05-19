import React from 'react'
import { AppContext } from "../context/appContext";
import "./about.css"
const About = () => {
  return (
    <div className='about-page'>
    <div className="about-container">
      <h1>About</h1>
      <p>This platform helps manage all your tech services in one place.</p>

      <div className="about-cards">
        <div className="about-card">Innovation</div>
        <div className="about-card">Technology</div>
        <div className="about-card">Growth</div>
      </div>
    </div>
    </div>
  );
}

export default About;