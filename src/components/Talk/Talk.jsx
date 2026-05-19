import { FadeInOnScroll } from "../FadeInOnScroll/FadeInOnScroll.jsx";
import { MAILTO } from "../../constants.js";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { translations } from "../../translations/translations.js";
import "../Talk/Talk.css";

function Talk() {
  const { lang } = useLanguage();
  const t = translations[lang].talk;

  return (
    <>
      <FadeInOnScroll>
        <div className="marquee">
          <a href={MAILTO} target="_blank" className="marquee__wrap">
            <div className="marquee__inner">
              <span className="inner-span slide-up">{t.text} </span>
              <span className="inner-span slide-up">{t.text} </span>
            </div>
          </a>
        </div>
      </FadeInOnScroll>
    </>
  );
}

export { Talk };
