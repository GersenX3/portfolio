import React from 'react'
import {FadeInOnScroll} from "../FadeInOnScroll/FadeInOnScroll.jsx"
import {FadeInLeft} from "../FadeInLeft/FadeInLeft.jsx"
import "./TaskTune.css"

const TECH = ['React', 'JavaScript', 'Spotify API']
const REPO = '#'

function TaskTune() {

  return (
    <>
      <div className='task-tune' id='task-tune'>
        <FadeInLeft>
        <ul className='tlist'>
          <li>
            <span></span>
          </li>
          <li>
            <span>
              Task Tune
            </span>
          </li>
        </ul>
        </FadeInLeft>
        <div className='description'>
        <FadeInLeft>
          <div>
            <img src="./taskTune.png" alt="TaskTune task manager with Spotify integration screenshot" className='taskTuneImg'/>
          </div>
          </FadeInLeft>  
        <FadeInLeft>
          <div>
            <div className='text'>
              <span>Task tune is a task manager that will recommend a song for the task you are performing. Underneath the text of your task you will see the song we recommend you to perform, the artist, the photo of their album and a direct link to that song on Spotify.<br/><br/></span>
            </div>
            <div className="tech-tags">
              {TECH.map(t => <span key={t} className="tech-tag">{t}</span>)}
            </div>
            <div className="project-links">
              <a href="https://tasktune.netlify.app/" target="_blank" rel="noopener noreferrer"><button className='buttonTry'>Try it</button></a>
              <a href={REPO} target="_blank" rel="noopener noreferrer"><button className="buttonGithub">GitHub</button></a>
            </div>
          
          </div>
          </FadeInLeft>
        </div>
      </div>
    </>
  )
}

export {TaskTune};