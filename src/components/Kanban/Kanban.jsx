import { FadeInLeft } from "../FadeInLeft/FadeInLeft.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { translations } from "../../translations/translations.js";
import "./Kanban.css";

const TECH = ["React", "JavaScript", "Node.js", "Docker", "Flask", "PostgreSQL"];
const REPO = "https://github.com/GersenX3/kanban-project";

function Kanban() {
  const { lang } = useLanguage();
  const t = translations[lang].projects.kanban;

  return (
    <>
      <div className="kanban" id="kanban">
        <FadeInLeft>
          <ul className="tlist">
            <li><span></span></li>
            <li><span>Kanban Board</span></li>
          </ul>
        </FadeInLeft>
        <div className="description">
          <FadeInLeft>
            <div>
              <img src="./kanban.png" alt="Kanban board app screenshot" className="kanbanImg" />
            </div>
          </FadeInLeft>
          <FadeInLeft>
            <div>
              <div className="text">
                <span>{t.description}<br /><br /></span>
              </div>
              <div className="tech-tags">
                {TECH.map((t) => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              <div className="project-links">
                <a href="https://kanban-ui-two.vercel.app/" target="_blank" rel="noopener noreferrer">
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

export { Kanban };
