import { FadeInLeft } from "../FadeInLeft/FadeInLeft.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { translations } from "../../translations/translations.js";
import "./Salvatore.css";

const TECH = ["HTML", "CSS", "JavaScript", "React"];
const REPO = "https://github.com/GersenX3/salvatore";

function Salvatore() {
  const { lang } = useLanguage();
  const t = translations[lang].projects.salvatore;

  return (
    <div className="salvatore" id="salvatore-landing-page">
      <FadeInLeft>
        <ul className="tlist">
          <li><span id="blackSpace"> Cat<br /> Soul</span></li>
          <li><span>Salvatore <br />Landing page</span></li>
        </ul>
      </FadeInLeft>
      <div className="description">
        <FadeInLeft>
          <div>
            <img src="./salvatore.jpg" alt="Salvatore tattoo artist landing page screenshot" className="taskTuneImg" />
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
              <a href="https://salvatoretatuador.netlify.app/" target="_blank" rel="noopener noreferrer">
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
  );
}

export { Salvatore };
