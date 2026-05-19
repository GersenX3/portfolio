import { FadeInOnScroll } from "../FadeInOnScroll/FadeInOnScroll.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { translations } from "../../translations/translations.js";
import "./AboutMeSlide.css";

const SKILLS = [
  "React", "JavaScript", "Node.js", "Express",
  "Python", "Django", "Docker", "AWS",
  "Unity", "Godot", "GDScript",
];

function AboutMeSlide() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <>
      <FadeInOnScroll>
        <div className="title" id="about-me">
          <span>{t.title}</span>
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <div className="aboutMeSlide">
          <div className="aboutMeContent">
            <span className="bio">{t.bio}</span>
            <div className="skills">
              {SKILLS.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="retrato">
            <img src="./Retrato.png" alt="Gerson Armando Lopez Duran" />
          </div>
        </div>
      </FadeInOnScroll>
    </>
  );
}

export { AboutMeSlide };
