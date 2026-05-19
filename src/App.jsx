import { useState } from "react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext.jsx";
import { translations } from "./translations/translations.js";
import { Header } from "./components/Header/Header.jsx";
import "./App.css";
import { PresentacionSlide } from "./components/PresentacionSlide/PresentationSlide.jsx";
import { FadeInOnScroll } from "./components/FadeInOnScroll/FadeInOnScroll.jsx";
import { AboutMeSlide } from "./components/AboutMeSlide/AboutMeSlide.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
import { Education } from "./components/Education/Education.jsx";
import { LineToRight } from "./components/LineToRight/LineToRight.jsx";
import { LineToLeft } from "./components/LineToLeft/LineToLeft.jsx";
import { TaskTune } from "./components/TaskTune/TaskTune.jsx";
import { CatSoul } from "./components/CatSoul/CatSoul.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import { Talk } from "./components/Talk/Talk.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Salvatore } from "./components/Salvatore/Salvatore.jsx";
import { CatLicker } from "./components/CatLicker/CatLicker.jsx";
import { Algorithms } from "./components/Algorithms/Algorithms.jsx";
import { Kanban } from "./components/Kanban/Kanban.jsx";
import { TelegramBot } from "./components/TelegramBot/TelegramBot.jsx";
import { Snake } from "./components/Snake/Snake.jsx";
import { Aegis } from "./components/Aegis/Aegis.jsx";
import { KittyUp } from "./components/KittyUp/KittyUp.jsx";

function AppContent() {
  const [activeTab, setActiveTab] = useState("web");
  const [projectsOpen, setProjectsOpen] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  return (
    <div className="main-container">
      <Header />
      <br />
      <br />
      <br />

      <LineToRight />
      <PresentacionSlide />
      <LineToLeft />
      <AboutMeSlide />
      <LineToRight />
      <Experience />
      <LineToLeft />
      <Education />
      <LineToRight />

      <FadeInOnScroll>
        <button
          className="section-toggle"
          id="featuredProjects"
          onClick={() => setProjectsOpen((p) => !p)}
          aria-expanded={projectsOpen}
        >
          <span>{t.title}</span>
          <span className={`expand-arrow ${projectsOpen ? "open" : ""}`}>
            ▸
          </span>
        </button>
      </FadeInOnScroll>

      <div className={`expand-body ${projectsOpen ? "open" : ""}`}>
        <div className="expand-inner">
          <div className="project-tabs">
            <button
              className={`tab-btn ${activeTab === "web" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("web")}
            >
              {t.tabs.web}
            </button>
            <button
              className={`tab-btn ${activeTab === "games" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("games")}
            >
              {t.tabs.games}
            </button>
          </div>

          {activeTab === "web" && (
            <>
              <LineToLeft />
              <Kanban />
              <LineToRight />
              <TaskTune />
              <LineToLeft />
              <TelegramBot />
              <LineToRight />
              <Aegis />
              <LineToLeft />
              <Salvatore />
              <LineToRight />
              <Algorithms />
              <LineToLeft />
              <Snake />
            </>
          )}

          {activeTab === "games" && (
            <>
              <LineToLeft />
              <KittyUp />
              <LineToRight />
              <CatLicker />
              <LineToLeft />
              <CatSoul />
            </>
          )}
        </div>
      </div>

      <LineToRight />
      <Contact />
      <LineToRight />
      <Talk />
      <LineToLeft />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
