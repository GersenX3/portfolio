import { useState } from "react";
import { FadeInOnScroll } from "../FadeInOnScroll/FadeInOnScroll.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { translations } from "../../translations/translations.js";
import "./Education.css";

function Education() {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang].education;

  return (
    <>
      <FadeInOnScroll>
        <button
          className="section-toggle"
          id="education"
          onClick={() => setOpen((p) => !p)}
          aria-expanded={open}
        >
          <span>{t.title}</span>
          <span className={`expand-arrow ${open ? "open" : ""}`}>▸</span>
        </button>
      </FadeInOnScroll>

      <div className={`expand-body ${open ? "open" : ""}`}>
        <div className="education-wrapper expand-inner">

          <div className="education-entry">
            <div className="education-header">
              <div className="education-header-left">
                <span className="education-school">{t.school}</span>
                <span className="education-location"> — {t.location}</span>
              </div>
              <span className="education-date">{t.period}</span>
            </div>
            <div className="education-degree-body">
              <span className="education-degree-title">{t.degreeTitle}</span>
              <span className="education-degree-subtitle">{t.degreeSubtitle}</span>
            </div>
          </div>

          <div className="education-entry">
            <div className="education-header">
              <span className="education-school">{t.certsLabel}</span>
              <span className="education-location"> — {t.certs.length} {t.issued}</span>
            </div>
            <ul className="certs-list">
              {t.certs.map((c) => (
                <li key={c.name} className="cert-item">
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-meta">
                    <span>{c.issuer}</span>
                    <span className="cert-date">{c.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}

export { Education };
