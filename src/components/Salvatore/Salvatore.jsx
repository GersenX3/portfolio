import React from 'react'
import { FadeInLeft } from '../FadeInLeft/FadeInLeft.jsx'
import "./Salvatore.css"

const TECH = ['HTML', 'CSS', 'JavaScript']
const REPO = '#'

function Salvatore() {
  return (
    <div className='salvatore' id='salvatore-landing-page'>
    <FadeInLeft>
    <ul className='tlist'>
      <li>
        <span id='blackSpace'> Cat<br/> Soul</span>
      </li>
      <li>
        <span>
            Salvatore <br/>Landing page
        </span>
      </li>
    </ul>
    </FadeInLeft>
    <div className='description'>
    <FadeInLeft>
      <div>
        <img src="./salvatore.jpg" alt="Salvatore tattoo artist landing page screenshot" className='taskTuneImg'/>
      </div>
    </FadeInLeft>  
    <FadeInLeft>
      <div>
        <div className='text'>
          <span>I designed and developed Salvatore's landing page, a page that contains his most recent works, a video documentary of his career, as well as the contact information to schedule an appointment.<br/><br/></span>
        </div>
        <div className="tech-tags">
          {TECH.map(t => <span key={t} className="tech-tag">{t}</span>)}
        </div>
        <div className="project-links">
          <a href="https://salvatoretatuador.netlify.app/" target="_blank" rel="noopener noreferrer"><button className='buttonTry'>See page</button></a>
          <a href={REPO} target="_blank" rel="noopener noreferrer"><button className="buttonGithub">GitHub</button></a>
        </div>
      
      </div>
      </FadeInLeft>  
    </div>
  </div>
  )
}

export {Salvatore}