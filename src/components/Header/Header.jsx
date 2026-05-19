import { FadeInDown } from "../FadeInDown/FadeInDown.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { translations } from "../../translations/translations.js";
import "../Header/Header.css";

function Header() {
  const { lang, toggle } = useLanguage();
  const t = translations[lang].header;

  const getCurrentDate = () => {
    const date = new Date();
    const locale = lang === "es" ? "es-MX" : "en-US";
    const month = date.toLocaleString(locale, { month: "long" });
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  return (
    <FadeInDown>
      <div className="header">
        <div className="header-left">
          <span>
            Gerson <br />
            Lopez
          </span>
        </div>

        <div className="header-center">
          <p>
            {t.available} <br />
            {t.from} {getCurrentDate()}
          </p>
        </div>

        <div className="header-right">
          <button className="lang-toggle" onClick={toggle} aria-label="Toggle language">
            <span className={lang === "en" ? "lang-active" : ""}>EN</span>
            <span className="lang-divider">/</span>
            <span className={lang === "es" ? "lang-active" : ""}>ES</span>
          </button>
          <a href="#contact">
            <button className="contactButton">{t.contact}</button>
          </a>
        </div>
      </div>
    </FadeInDown>
  );
}

export { Header };
