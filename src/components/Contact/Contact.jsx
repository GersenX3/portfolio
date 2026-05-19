import { FadeInOnScroll } from '../FadeInOnScroll/FadeInOnScroll.jsx';
import { EMAIL, MAILTO } from '../../constants.js';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { translations } from '../../translations/translations.js';
import './Contact.css';

function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  return (
    <FadeInOnScroll>
      <div className='contact' id='contact'>
        <p>{t.text}</p>
        <a href={MAILTO} className='contact-email'>{EMAIL}</a>
      </div>
    </FadeInOnScroll>
  );
}

export { Contact };
