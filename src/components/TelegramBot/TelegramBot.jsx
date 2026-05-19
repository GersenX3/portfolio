import { FadeInLeft } from "../FadeInLeft/FadeInLeft.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { translations } from "../../translations/translations.js";
import "./TelegramBot.css";

const TECH = ["Python", "Telegram API", "Gemini AI"];
const REPO = "https://github.com/GersenX3/bot_telegram_LLMs";

function TelegramBot() {
  const { lang } = useLanguage();
  const t = translations[lang].projects.telegramBot;

  return (
    <>
      <div className="telegram-bot" id="telegram-bot">
        <FadeInLeft>
          <ul className="tlist">
            <li><span></span></li>
            <li><span>Gemini Bot</span></li>
          </ul>
        </FadeInLeft>
        <div className="description">
          <FadeInLeft>
            <div>
              <img src="./telegramBot.png" alt="Gemini AI Telegram bot screenshot" className="telegramBotImg" />
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
                <a href="https://t.me/Gemini_GersenX3_bot" target="_blank" rel="noopener noreferrer">
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

export { TelegramBot };
