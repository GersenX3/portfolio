import { FadeInLeft } from "../FadeInLeft/FadeInLeft.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { translations } from "../../translations/translations.js";
import "./Aegis.css";

const TECH = ["React", "JavaScript", "Astro"];

function Aegis() {
  const { lang } = useLanguage();
  const t = translations[lang].projects.aegis;

  return (
    <>
      <div className="aegis" id="aegis">
        <FadeInLeft>
          <ul className="tlist">
            <li><span></span></li>
            <li><span>Aegis</span></li>
          </ul>
        </FadeInLeft>
        <div className="description">
          <FadeInLeft>
            <div>
              <img src="./aegis.png" alt="Aegis cybersecurity landing page screenshot" className="aegisImg" />
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
                <a href="https://secureaegis.net/" target="_blank" rel="noopener noreferrer">
                  <button className="buttonTry">{t.btnTry}</button>
                </a>
              </div>
            </div>
          </FadeInLeft>
        </div>
      </div>
    </>
  );
}

export { Aegis };
