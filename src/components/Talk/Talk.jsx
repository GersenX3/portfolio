import React from "react";
import { FadeInOnScroll } from "../FadeInOnScroll/FadeInOnScroll.jsx";
import "../Talk/Talk.css";

function Talk() {
  return (
    <>
      <FadeInOnScroll>
        <div className="marquee">
          <a
            href="mailto:galdl1438@gmail.com?subject=Consulta%20Importante&body=Hola%2C%20quisiera%20saber%20m%C3%A1s%20sobre%2E%2E%2E"
            target="_blank"
            className="marquee__wrap"
          >
            <div className="marquee__inner">
              <span className="inner-span slide-up">
                SEND ME A TEXT - FEEL FREE TO REACH OUT - GET IN TOUCH -
                INITIATE A CHAT -{" "}
              </span>
              <span className="inner-span slide-up">
                SEND ME A TEXT - FEEL FREE TO REACH OUT - GET IN TOUCH -
                INITIATE A CHAT -{" "}
              </span>
            </div>
          </a>
        </div>
      </FadeInOnScroll>
    </>
  );
}
export { Talk };
