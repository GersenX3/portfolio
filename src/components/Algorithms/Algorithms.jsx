import React from "react";
import { FadeInLeft } from "../FadeInLeft/FadeInLeft.jsx";
import "./Algorithms.css";

const TECH = ['React', 'JavaScript']
const REPO = 'https://github.com/GersenX3/Visual-Algorithms'

function Algorithms() {
  return (
    <>
      <div className="algorithms" id="algorithms">
        <FadeInLeft>
          <ul className="tlist">
            <li>
              <span></span>
            </li>
            <li>
              <span>Sorting Algorithms</span>
            </li>
          </ul>
        </FadeInLeft>
        <div className="description">
          <FadeInLeft>
            <div>
              <img src="./algorithms.png" alt="Sorting algorithms visualizer screenshot" className="algorithmsImg" />
            </div>
          </FadeInLeft>
          <FadeInLeft>
            <div>
              <div className="text">
                <span>
                  A visual sorting algorithms platform that demonstrates how
                  different sorting methods work in real-time. Watch bubble
                  sort, quick sort, merge sort, and other algorithms organize
                  data before your eyes. Perfect for learning and understanding
                  algorithm efficiency through interactive visualization.
                  <br />
                  <br />
                </span>
              </div>
              <div className="tech-tags">
                {TECH.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              <div className="project-links">
                <a href="https://algorithms-react.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <button className="buttonTry">Try it</button>
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

export { Algorithms };
