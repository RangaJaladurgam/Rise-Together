import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="title">About Me</h1>
      <p className="description">
        Hello! I am a passionate developer eager to create impactful and innovative web applications. 
        Welcome to my personal space where you can learn more about me and connect with me on social media!
      </p>

      <div className="social-media">
        <h2 className="section-title">Connect with Me</h2>
        <ul className="social-links">
          <li>
            <a href="https://github.com/RangaJaladurgam" target="_blank" rel="noopener noreferrer">
              GitHub <i class="fa-brands fa-square-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ranga-jaladurgam" target="_blank" rel="noopener noreferrer">
              LinkedIn <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://x.com/RangaJaladurgam" target="_blank" rel="noopener noreferrer">
              X - Twitter <i class="fa-brands fa-x-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer">
              Instagram <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="contact">
        <h2 className="section-title">Get in Touch</h2>
        <p>
          Feel free to <a href="mailto:com.risetogether@example.com">email me</a> for collaboration, project ideas, or just to say hello!
        </p>
      </div>
    </div>
  );
};

export default About;
