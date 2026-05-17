import React from 'react'
import { FadeInOnScroll } from "../FadeInOnScroll/FadeInOnScroll.jsx"
import "./AboutMeSlide.css"

const SKILLS = [
  'React', 'JavaScript', 'Node.js', 'Express',
  'Python', 'Django', 'Docker', 'AWS',
  'Unity', 'Godot', 'GDScript',
]

function AboutMeSlide() {
  return (
    <>
      <FadeInOnScroll>
        <div className='title' id='about-me'><span>About me</span></div>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <div className='aboutMeSlide'>
          <div className='aboutMeContent'>
            <span className='bio'>
              I'm a full stack developer based in Guadalajara, Mexico with 2+ years of experience
              building web applications and indie video games. I work across the entire stack —
              React and Node.js on the web side, Python and Django for backend APIs, Docker for
              containerization, and AWS for cloud deployment. Outside of web dev, I create indie
              games with Unity and Godot, which keeps me thinking about systems design and
              interactive experiences from a completely different angle.
            </span>
            <div className='skills'>
              {SKILLS.map(skill => (
                <span key={skill} className='skill-tag'>{skill}</span>
              ))}
            </div>
          </div>
          <div className='retrato'>
            <img src="./Retrato.png" alt="Gerson Armando Lopez Duran" />
          </div>
        </div>
      </FadeInOnScroll>
    </>
  )
}

export { AboutMeSlide };
