import React from "react";
import { FadeInLeft } from "../FadeInLeft/FadeInLeft.jsx";
import "./CatLicker.css";

function CatLicker() {
  return (
    <>
      <div className="cat-licker" id="cat-licker">
        <FadeInLeft>
          <ul className="tlist">
            <li>
              <span></span>
            </li>
            <li>
              <span>Cat Licker</span>
            </li>
          </ul>
        </FadeInLeft>
        <div className="description">
          <FadeInLeft>
            <div>
              <img src="./catLicker.png" alt="" className="catLickerImg" />
            </div>
          </FadeInLeft>
          <FadeInLeft>
            <div>
              <div className="text">
                <span>
                  Cat Licker is an idle clicker game where you help a cute cat
                  lick its way to happiness. Click to generate licks, unlock
                  upgrades, and watch your cat collection grow. A fun and
                  addictive experience that combines simple mechanics with
                  charming cat-themed progression.
                  <br />
                  <br />
                </span>
              </div>
              <a href="https://gersenx3.itch.io/cat-licker" target="_blank">
                <button className="buttonTry">Play it</button>
              </a>
            </div>
          </FadeInLeft>
        </div>
      </div>
    </>
  );
}

export { CatLicker };
