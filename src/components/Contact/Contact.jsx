import React from 'react'
import { FadeInOnScroll } from '../FadeInOnScroll/FadeInOnScroll.jsx'
import { EMAIL, MAILTO } from '../../constants.js';
import './Contact.css';

function Contact() {
  return (
    <FadeInOnScroll>
      <div className='contact' id='contact'>
        <p>
          If you have a question, proposal, project or want to work on something together,
          just send me a message.
        </p>
        <a
          href={MAILTO}
          className='contact-email'
        >
          {EMAIL}
        </a>
      </div>
    </FadeInOnScroll>
  )
}

export { Contact }
