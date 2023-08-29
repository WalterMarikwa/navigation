import React from "react";
import { Link } from 'react-router-dom';
import "./styles/styles.css";

export default function Hero() {
    const navStyle = {
        color: 'black'
    };

  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1>Walter Marikwa</h1>
        <h2>Data Engineer</h2>
        <div className="wrapper">
          <div className="icon website">
            <div className="tooltip">Projects</div>
            <Link style={navStyle} to="/projects"> 
            <span> <i className="fa-solid fa-globe" /></span>
            </Link>
          </div>
          <div className="icon twitter">
            <div className="tooltip">Twitter</div>
            <Link style={navStyle} to="https://twitter.com/3KINGWALTER">
            <span>
              <i className="fab fa-twitter" />
            </span>
            </Link>
          </div>
          <div className="icon email">
            <div className="tooltip">Email</div>
            <Link style={navStyle} to="mailto:waltermarikwa02@gmail.com">
            <span>
              <i className="fa-regular fa-envelope" />
            </span>
            </Link>
          </div>
          <div className="icon github">
            <div className="tooltip">Github</div>
            <Link style={navStyle} to="https://github.com/WalterMarikwa">
            <span>
              <i className="fab fa-github" />
            </span>
            </Link>
          </div>
          <div className="icon linkedin">
            <div className="tooltip">LinkedIN</div>
            <Link style={navStyle} to="https://www.linkedin.com/in/walter-m-03b137175/">
            <span>
              <i className="fab fa-linkedin" />
            </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
