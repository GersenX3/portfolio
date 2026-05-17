import React from 'react'
import "./Footer.css"
import { FadeInOnScroll } from '../FadeInOnScroll/FadeInOnScroll'
import { EMAIL } from '../../constants.js'

function Footer() {
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
        <span id='copyright'>All rights reserved. Gerson Armando Lopez Duran.</span>
    </div>
    </FadeInOnScroll>
    </>
  )
}

export { Footer}