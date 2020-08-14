import React, { useRef, useEffect, useState } from "react";
import "./about.style.css";
import { gsap, Power2, TimelineLite } from "gsap";

import MarkDown from "../components/markDown_CV";

export default function About() {
  const tl = new TimelineLite();

  let aboutPage = useRef(null);
 

  
  
  useEffect(() => {
    tl.to(aboutPage, 0, { css: { visibility: "visible" } });
    
  });


  return (
    <div id="about-page" className="about">
      <div ref={(el) => (aboutPage = el)} className="about-container">
      <section>
        <h1 className="base-title">About me</h1>

        <div className="code-cv">
          <MarkDown />
        </div>
        
          
        </section>
      </div>
    </div>
  );
}
