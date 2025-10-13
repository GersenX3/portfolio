import React from "react";
import { FadeInLeft } from "../FadeInLeft/FadeInLeft.jsx";
import "./InteractivePortfolio.css";

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
                alt=""
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
              <a href="https://gerson-portfolio.netlify.app/" target="_blank">
                <button className="buttonTry">Explore</button>
              </a>
            </div>
          </FadeInLeft>
        </div>
      </div>
    </>
  );
}

export { InteractivePortfolio };
