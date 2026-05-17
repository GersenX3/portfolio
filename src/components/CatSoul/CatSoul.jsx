import React from 'react'
import { FadeInLeft } from '../FadeInLeft/FadeInLeft.jsx'
import "./CatSoul.css"

const TECH = ['GameMaker 2', 'GDScript']
const REPO = '#'

function CatSoul() {

  return (
    <>
      <div className='catSoul' id='cat-soul'>
        <FadeInLeft>
        <ul className='tlist'>
          <li>
            <span id='blackSpace'> Cat<br/> Soul</span>
          </li>
          <li>
            <span>
                Cat Soul
            </span>
          </li>
        </ul>
        </FadeInLeft>
        <div className='description'>
        <FadeInLeft>
          <div>
            <img src="./catSoul.gif" alt="Cat Soul platformer game preview" className='taskTuneImg'/>
          </div>
        </FadeInLeft>  
        <FadeInLeft>
          <div>
            <div className='text'>
              <span>Cat soul is a platform game that is being developed with GameMaker 2.
An adventure that will explore the lives of three kitten brothers who share a sad past which they do not yet know.
The release date for Nintento Switch and PC will be confirmed in the near future.<br/><br/></span>
            </div>
            <div className="tech-tags">
              {TECH.map(t => <span key={t} className="tech-tag">{t}</span>)}
            </div>
            <div className="project-links">
              <a href="https://www.youtube.com/watch?v=-TBrfFGcDgY&t=5s" target="_blank" rel="noopener noreferrer"><button className='buttonTry'>See more</button></a>
              <a href={REPO} target="_blank" rel="noopener noreferrer"><button className="buttonGithub">GitHub</button></a>
            </div>
          
          </div>
          </FadeInLeft>  
        </div>
      </div>
    </>
  )
}

export {CatSoul};