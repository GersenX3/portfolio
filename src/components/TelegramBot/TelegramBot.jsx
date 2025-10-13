import React from "react";
import { FadeInLeft } from "../FadeInLeft/FadeInLeft.jsx";
import "./TelegramBot.css";

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
              <img src="./telegramBot.png" alt="" className="telegramBotImg" />
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
              <a href="https://t.me/example_gemini_bot" target="_blank">
                <button className="buttonTry">Try it</button>
              </a>
            </div>
          </FadeInLeft>
        </div>
      </div>
    </>
  );
}

export { TelegramBot };
