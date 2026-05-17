import React from "react";
import { FadeInLeft } from "../FadeInLeft/FadeInLeft.jsx";
import "./CatLicker.css";

const TECH = ['Godot', 'Gdscript', 'Aseprite', 'GitHub']
const REPO = 'https://github.com/GersenX3/cat-licker'

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
              <span>Cat Licker (Web)</span>
            </li>
          </ul>
        </FadeInLeft>
        <div className="description">
          <FadeInLeft>
            <div>
              <img src="./catLicker.png" alt="Cat Licker idle clicker game screenshot" className="catLickerImg" />
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
              <div className="tech-tags">
                {TECH.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              <div className="project-links">
                <a href="https://gersenx3.itch.io/cat-licker" target="_blank" rel="noopener noreferrer">
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

export { CatLicker };
