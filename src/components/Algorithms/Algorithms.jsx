import { FadeInLeft } from "../FadeInLeft/FadeInLeft.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { translations } from "../../translations/translations.js";
import "./Algorithms.css";

const TECH = ["React", "JavaScript"];
const REPO = "https://github.com/GersenX3/Visual-Algorithms";

function Algorithms() {
  const { lang } = useLanguage();
  const t = translations[lang].projects.algorithms;

  return (
    <>
      <div className="algorithms" id="algorithms">
        <FadeInLeft>
          <ul className="tlist">
            <li><span></span></li>
            <li><span>{t.title}</span></li>
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
                <span>{t.description}<br /><br /></span>
              </div>
              <div className="tech-tags">
                {TECH.map((tech) => <span key={tech} className="tech-tag">{tech}</span>)}
              </div>
              <div className="project-links">
                <a href="https://algorithms-react.netlify.app/" target="_blank" rel="noopener noreferrer">
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

export { Algorithms };
