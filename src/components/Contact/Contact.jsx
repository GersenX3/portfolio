import React from 'react'
import { FadeInOnScroll } from '../FadeInOnScroll/FadeInOnScroll.jsx'
import './Contact.css';

const EMAIL = 'galdl1438@gmail.com'

function Contact() {
  return (
    <FadeInOnScroll>
      <div className='contact' id='contact'>
        <p>
          If you have a question, proposal, project or want to work on something together,
          just send me a message.
        </p>
        <a
          href={`mailto:${EMAIL}?subject=Consulta%20Importante&body=Hola%2C%20quisiera%20saber%20m%C3%A1s%20sobre%2E%2E%2E`}
          className='contact-email'
        >
          {EMAIL}
        </a>
      </div>
    </FadeInOnScroll>
  )
}

export { Contact }
