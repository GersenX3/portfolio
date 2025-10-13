import React from "react";
import { FadeInLeft } from "../FadeInLeft/FadeInLeft.jsx";
import "./Snake.css";

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
              <img src="./snake.png" alt="" className="snakeImg" />
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
              <a href="https://snake-cube.netlify.app/" target="_blank">
                <button className="buttonTry">Play it</button>
              </a>
            </div>
          </FadeInLeft>
        </div>
      </div>
    </>
  );
}

export { Snake };
