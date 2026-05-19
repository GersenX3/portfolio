import { FadeInLeft } from "../FadeInLeft/FadeInLeft.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { translations } from "../../translations/translations.js";
import "./KittyUp.css";

const TECH = ["Godot", "GDScript", "Aseprite", "Android"];
const STORE = "https://play.google.com/store/apps/details?id=com.gerson.kittyup";

function KittyUp() {
  const { lang } = useLanguage();
  const t = translations[lang].projects.kittyUp;

  return (
    <>
      <div className="kitty-up" id="kitty-up">
        <FadeInLeft>
          <ul className="tlist">
            <li><span></span></li>
            <li><span>Kitty Up! (Android)</span></li>
          </ul>
        </FadeInLeft>
        <div className="description">
          <FadeInLeft>
            <div>
              <img src="./kittyup.png" alt="Kitty Up! vertical platformer Android game screenshot" className="kittyUpImg" />
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
                <a href={STORE} target="_blank" rel="noopener noreferrer">
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

export { KittyUp };
