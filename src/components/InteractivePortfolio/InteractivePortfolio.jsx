import React from "react";
import { FadeInLeft } from "../FadeInLeft/FadeInLeft.jsx";
import "./InteractivePortfolio.css";

const TECH = ['JavaScript', 'Phaser']
const REPO = '#'

function InteractivePortfolio() {
  return (
    <>
      <div className="interactive-portfolio" id="interactive-portfolio">
        <FadeInLeft>
          <ul className="tlist">
            <li>
              <span></span>
            </li>
            <li>
              <span>Interactive Portfolio</span>
            </li>
          </ul>
        </FadeInLeft>
        <div className="description">
          <FadeInLeft>
            <div>
              <img
                src="./interactivePortfolio.png"
                alt="Interactive 2D platformer portfolio screenshot"
                className="interactivePortfolioImg"
              />
            </div>
          </FadeInLeft>
          <FadeInLeft>
            <div>
              <div className="text">
                <span>
                  An immersive 2D platformer web experience where you can
                  explore my work in a fun and interactive way. Jump, run, and
                  discover my projects through gameplay. A unique approach to
                  showcasing a portfolio that combines web development with game
                  design principles.
                  <br />
                  <br />
                </span>
              </div>
              <div className="tech-tags">
                {TECH.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              <div className="project-links">
                <a href="https://gerson-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <button className="buttonTry">Explore</button>
                </a>
                <a href={REPO} target="_blank" rel="noopener noreferrer">
                  <button className="buttonGithub">GitHub</button>
                </a>
              </div>
            </div>
          </FadeInLeft>
        </div>
      </div>
    </>
  );
}

export { InteractivePortfolio };
