import React from "react";
import { FadeInLeft } from "../FadeInLeft/FadeInLeft.jsx";
import "./Algorithms.css";

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
              <img src="./algorithms.png" alt="" className="algorithmsImg" />
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
              <a href="https://algorithms-react.netlify.app/" target="_blank">
                <button className="buttonTry">Try it</button>
              </a>
            </div>
          </FadeInLeft>
        </div>
      </div>
    </>
  );
}

export { Algorithms };
