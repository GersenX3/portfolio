import React from "react";
import { FadeInOnScroll } from "../FadeInOnScroll/FadeInOnScroll.jsx";
import { MAILTO } from "../../constants.js";
import "../Talk/Talk.css";

function Talk() {
  return (
    <>
      <FadeInOnScroll>
        <div className="marquee">
          <a
            href={MAILTO}
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
