import { useState } from "react";
import { FadeInOnScroll } from "../FadeInOnScroll/FadeInOnScroll.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { translations } from "../../translations/translations.js";
import "./Experience.css";

function Experience() {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang].experience;

  return (
    <>
      <FadeInOnScroll>
        <button
          className="section-toggle"
          id="experience"
          onClick={() => setOpen((p) => !p)}
          aria-expanded={open}
        >
          <span>{t.title}</span>
          <span className={`expand-arrow ${open ? "open" : ""}`}>▸</span>
        </button>
      </FadeInOnScroll>

      <div className={`expand-body ${open ? "open" : ""}`}>
        <div className="experience-list expand-inner">
          {t.jobs.map((job) => (
            <div key={job.company} className="experience-entry">
              <div className="experience-header">
                <div className="experience-header-left">
                  <span className="experience-company">{job.company}</span>
                  <span className="experience-location"> — {job.location}</span>
                  <span className="experience-role">{job.role}</span>
                </div>
                <span className="experience-date">{job.period}</span>
              </div>
              <ul className="experience-bullets">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export { Experience };
