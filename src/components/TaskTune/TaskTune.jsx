import { FadeInOnScroll } from "../FadeInOnScroll/FadeInOnScroll.jsx";
import { FadeInLeft } from "../FadeInLeft/FadeInLeft.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { translations } from "../../translations/translations.js";
import "./TaskTune.css";

const TECH = ["React", "JavaScript", "Spotify API"];
const REPO = "https://github.com/GersenX3/taskTune";

function TaskTune() {
  const { lang } = useLanguage();
  const t = translations[lang].projects.taskTune;

  return (
    <>
      <div className="task-tune" id="task-tune">
        <FadeInLeft>
          <ul className="tlist">
            <li><span></span></li>
            <li><span>Task Tune</span></li>
          </ul>
        </FadeInLeft>
        <div className="description">
          <FadeInLeft>
            <div>
              <img src="./taskTune.png" alt="TaskTune task manager with Spotify integration screenshot" className="taskTuneImg" />
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
                <a href="https://tasktune.netlify.app/" target="_blank" rel="noopener noreferrer">
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

export { TaskTune };
