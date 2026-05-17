import React from "react";
import { FadeInLeft } from "../FadeInLeft/FadeInLeft.jsx";
import "./Kanban.css";

const TECH = ['React', 'JavaScript', 'Node.js']
const REPO = '#'

function Kanban() {
  return (
    <>
      <div className="kanban" id="kanban">
        <FadeInLeft>
          <ul className="tlist">
            <li>
              <span></span>
            </li>
            <li>
              <span>Kanban Board</span>
            </li>
          </ul>
        </FadeInLeft>
        <div className="description">
          <FadeInLeft>
            <div>
              <img src="./kanban.png" alt="Kanban board app screenshot" className="kanbanImg" />
            </div>
          </FadeInLeft>
          <FadeInLeft>
            <div>
              <div className="text">
                <span>
                  A modern Kanban board application built with React for
                  efficient project management. Organize your tasks with
                  drag-and-drop functionality, create custom columns, and track
                  your workflow. A clean and intuitive interface designed to
                  boost productivity and team collaboration.
                  <br />
                  <br />
                </span>
              </div>
              <div className="tech-tags">
                {TECH.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              <div className="project-links">
                <a href="http://kanban-react.ddns.net/" target="_blank" rel="noopener noreferrer">
                  <button className="buttonTry">Try it</button>
                </a>
                <a href={REPO} target="_blank" rel="noopener noreferrer">
                  <button className="buttonGithub">GitHub</button>
                </a>
              </div>
            </div>
          </FadeInLeft>
        </div>
      </div>
    </>
  );
}

export { Kanban };
