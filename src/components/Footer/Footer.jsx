import "./Footer.css";
import { FadeInOnScroll } from '../FadeInOnScroll/FadeInOnScroll';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { translations } from '../../translations/translations.js';

function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <>
      <FadeInOnScroll>
        <div className='footer'>
          <div className='redes'>
            <ul>
              <li><a href="https://github.com/GersenX3" target="_blank"><button>GITHUB</button></a></li>
              <li><a href="https://www.linkedin.com/in/gersonarmandolopezduran/" target="_blank"><button>LINKEDIN</button></a></li>
            </ul>
          </div>
          <span id='copyright'>{t.rights}</span>
        </div>
      </FadeInOnScroll>
    </>
  );
}

export { Footer };
