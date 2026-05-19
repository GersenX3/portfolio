import { FadeInLeft } from "../FadeInLeft/FadeInLeft.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { translations } from "../../translations/translations.js";
import "./Snake.css";

const TECH = ["JavaScript", "HTML", "CSS"];
const REPO = "https://github.com/GersenX3/snake";

function Snake() {
  const { lang } = useLanguage();
  const t = translations[lang].projects.snake;

  return (
    <>
      <div className="snake" id="snake">
        <FadeInLeft>
          <ul className="tlist">
            <li><span></span></li>
            <li><span>Snake Game</span></li>
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
                <span>{t.description}<br /><br /></span>
              </div>
              <div className="tech-tags">
                {TECH.map((tech) => <span key={tech} className="tech-tag">{tech}</span>)}
              </div>
              <div className="project-links">
                <a href="https://snake-cube.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <button className="buttonTry">{t.btnTry}</button>
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
