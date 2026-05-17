import { Header } from "./components/Header/Header.jsx";
import "./App.css";
import { PresentacionSlide } from "./components/PresentacionSlide/PresentationSlide.jsx";
import { FadeInDown } from "./components/FadeInDown/FadeInDown.jsx";
import { FadeInOnScroll } from "./components/FadeInOnScroll/FadeInOnScroll.jsx";
import { FadeInUp } from "./components/FadeInUp/FadeInUp.jsx";
import { AboutMeSlide } from "./components/AboutMeSlide/AboutMeSlide.jsx";
import { LineToRight } from "./components/LineToRight/LineToRight.jsx";
import { LineToLeft } from "./components/LineToLeft/LineToLeft.jsx";
import { FadeInLeft } from "./components/FadeInLeft/FadeInLeft.jsx";
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
import { InteractivePortfolio } from "./components/InteractivePortfolio/InteractivePortfolio.jsx";

function App() {
  return (
    <>
      <div className="main-container">
        <Header />
        <br /><br />
        <LineToRight />
        <PresentacionSlide />
        <LineToLeft />
        <AboutMeSlide />
        <LineToRight />
        <FadeInOnScroll>
          <p id="featuredProjects">Featured Projects</p>
        </FadeInOnScroll>
        <LineToLeft />
        <CatLicker />
        <LineToRight />
        <Algorithms />
        <LineToLeft />
        <Kanban />
        <LineToRight />
        <Salvatore />
        <LineToLeft />
        <CatSoul />
        <LineToRight />
        <TaskTune />
        <LineToLeft />
        <TelegramBot />
        <LineToRight />
        <Snake />
        <LineToLeft />
        <Contact />
        <LineToRight />
        <Talk />
        <LineToLeft />
        <Footer />
      </div>
    </>
  );
}

export default App;
