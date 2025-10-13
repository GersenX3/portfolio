import React from "react";
import { FadeInDown } from "../FadeInDown/FadeInDown.jsx";
import "../Header/Header.css";

function Header() {
  const getCurrentDate = () => {
    const date = new Date();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  return (
    <FadeInDown>
      <div className="header">
        <ul className="list">
          <li>
            <span>
              Gerson <br />
              Lopez
            </span>
          </li>
          <li>
            <p>
              Available for freelance <br />
              work from {getCurrentDate()}
            </p>
          </li>
          <li>
            <a href="#contact">
              <button className="contactButton">Contact</button>
            </a>
          </li>
        </ul>
      </div>
    </FadeInDown>
  );
}

export { Header };
