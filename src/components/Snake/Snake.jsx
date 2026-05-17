import React from "react";
import { FadeInLeft } from "../FadeInLeft/FadeInLeft.jsx";
import "./Snake.css";

const TECH = ['JavaScript', 'HTML', 'CSS']
const REPO = '#'

function Snake() {
  return (
    <>
      <div className="snake" id="snake">
        <FadeInLeft>
          <ul className="tlist">
            <li>
              <span></span>
            </li>
            <li>
              <span>Snake Game</span>
            </li>
          </ul>
        </FadeInLeft>
        <div className="description">
          <FadeInLeft>
            <div>
              <img src="./snake.png" alt="Snake game screenshot" className="snakeImg" />
            </div>
          </FadeInLeft>
          <FadeInLeft>
            <div>
              <div className="text">
                <span>
                  A classic Snake game built with pure vanilla JavaScript.
                  Navigate your snake, collect food, and grow longer while
                  avoiding collisions. A nostalgic gaming experience showcasing
                  fundamental web development skills with clean, framework-free
                  code.
                  <br />
                  <br />
                </span>
              </div>
              <div className="tech-tags">
                {TECH.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              <div className="project-links">
                <a href="https://snake-cube.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <button className="buttonTry">Play it</button>
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

export { Snake };
