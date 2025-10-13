import React from "react";
import { FadeInLeft } from "../FadeInLeft/FadeInLeft.jsx";
import "./Kanban.css";

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
              <img src="./kanban.png" alt="" className="kanbanImg" />
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
              <a href="http://kanban-react.ddns.net/" target="_blank">
                <button className="buttonTry">Try it</button>
              </a>
            </div>
          </FadeInLeft>
        </div>
      </div>
    </>
  );
}

export { Kanban };
