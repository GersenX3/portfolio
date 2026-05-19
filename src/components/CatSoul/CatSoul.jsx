import { FadeInLeft } from "../FadeInLeft/FadeInLeft.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { translations } from "../../translations/translations.js";
import "./CatSoul.css";

const TECH = ["Godot", "GDScript", "Aseprite", "GdShader"];

function CatSoul() {
  const { lang } = useLanguage();
  const t = translations[lang].projects.catSoul;

  return (
    <>
      <div className="catSoul" id="cat-soul">
        <FadeInLeft>
          <ul className="tlist">
            <li><span id="blackSpace"> Cat<br /> Soul</span></li>
            <li><span>Cat Soul</span></li>
          </ul>
        </FadeInLeft>
        <div className="description">
          <FadeInLeft>
            <div>
              <img src="./catSoul.gif" alt="Cat Soul platformer game preview" className="taskTuneImg" />
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
                <a href="https://gersenx3.itch.io/" target="_blank" rel="noopener noreferrer">
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

export { CatSoul };
