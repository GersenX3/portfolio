import { FadeInUp } from "../FadeInUp/FadeInUp.jsx";
import { MAILTO } from "../../constants.js";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { translations } from "../../translations/translations.js";
import "../PresentacionSlide/PresentacionSlide.css";

function PresentacionSlide() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <>
      <FadeInUp time={200}>
        <div id="hero-name">
          <span className="words">
            <span className="letter">G</span>
            <span className="letter">E</span>
            <span className="letter">R</span>
            <span className="letter">S</span>
            <span className="letter">O</span>
            <span className="letter">N</span>
            <span className="letter">-</span>
          </span>
          <span className="words">
            <span className="letter">L</span>
            <span className="letter">O</span>
            <span className="letter">P</span>
            <span className="letter">E</span>
            <span className="letter">Z</span>
          </span>
        </div>
      </FadeInUp>
      <div className="first-slide">
        <FadeInUp time={500}>
          <span className="words">
            <span className="letter">F</span>
            <span className="letter">U</span>
            <span className="letter">L</span>
            <span className="letter">L</span>
          </span>
        </FadeInUp>
        <FadeInUp time={800}>
          <div id="guion"></div>
        </FadeInUp>
        <FadeInUp time={1100}>
          <span className="words">
            <span className="letter">S</span>
            <span className="letter">T</span>
            <span className="letter">A</span>
            <span className="letter">C</span>
            <span className="letter">K </span>
          </span>
        </FadeInUp>
        <FadeInUp time={1400}>
          <span className="words">
            <span className="letter">D</span>
            <span className="letter">E</span>
            <span className="letter">V</span>
            <span className="letter">E</span>
            <span className="letter">L</span>
            <span className="letter">O</span>
            <span className="letter">P</span>
            <span className="letter">E</span>
            <span className="letter">R</span>
          </span>
        </FadeInUp>
      </div>
      <FadeInUp time={1800}>
        <div id="contract">
          <a href={MAILTO} target="_blank">
            <button>{t.cta}</button>
          </a>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </FadeInUp>
    </>
  );
}

export { PresentacionSlide };
