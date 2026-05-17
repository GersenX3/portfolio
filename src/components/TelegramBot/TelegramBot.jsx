import React from "react";
import { FadeInLeft } from "../FadeInLeft/FadeInLeft.jsx";
import "./TelegramBot.css";

const TECH = ['Python', 'Telegram API', 'Gemini AI']
const REPO = '#'

function TelegramBot() {
  return (
    <>
      <div className="telegram-bot" id="telegram-bot">
        <FadeInLeft>
          <ul className="tlist">
            <li>
              <span></span>
            </li>
            <li>
              <span>Gemini Bot</span>
            </li>
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
                <span>
                  An intelligent Telegram bot powered by Google's Gemini AI.
                  Chat naturally, ask questions, and get helpful responses
                  directly in your Telegram conversations. The bot leverages
                  advanced language models to provide accurate and contextual
                  answers to your queries.
                  <br />
                  <br />
                </span>
              </div>
              <div className="tech-tags">
                {TECH.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              <div className="project-links">
                <a href="https://t.me/example_gemini_bot" target="_blank" rel="noopener noreferrer">
                  <button className="buttonTry">Try it</button>
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
