import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/sidebar/navbar";
import { gsap, Power3 } from "gsap";
import Typical from "react-typical";

import Profile from "../assets/profile2.png";

import "./home.scss";

import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";

import About from "./about";
import Project from "./projects/project";

function Home() {
  let sectionItem = useRef(null);

  const tl = new TimelineLite();

  let nameItem = useRef(null);
  let statusItem = useRef(null);
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  // socials animation

  useEffect(() => {
    let currentPixel = window.pageYOffset;

    //looper keeps running and keeps track of where the new pixel is
    const looper = function () {
      const newPixel = window.pageYOffset;
      const diff = newPixel - currentPixel;
      const speed = diff * 0.1;

      if(sectionItem != null){
      sectionItem.style.transform = "skewY(" + speed + "deg)";
    }
      currentPixel = newPixel;
      console.log(speed);
      requestAnimationFrame(looper);
    };

    looper();

    tl.to(container, 0, { css: { visibility: "visible" } })
      .to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut })
      .to(image, 1.4, { scale: 1.3, ease: Power2.easeInOut, delay: -1.4 });

    gsap.to(nameItem, 0.8, { opacity: 1, y: -5, ease: Power3.easeInOut });
    gsap.to(statusItem, 0.8, {
      opacity: 1,
      y: -10,
      ease: Power3.easeIn,
      delay: 0.8,
    });
  }, []);

  return (
    <div className="home-page">
      <div className="social-links">
        <a href="http://github.com/venaz-dev">
          <img
            src={require("../assets/github-icon.png")}
            height={50}
            width={50}
          />
        </a>
        <a href="https://twitter.com/venazdev">
          <img
            src={require("../assets/twitter-icon.png")}
            height={50}
            width={50}
          />
        </a>
        <a href="www.linkedin.com/in/chibuzo-madumere-venaz104">
          <img
            src={require("../assets/linkedin-icon.png")}
            height={50}
            width={50}
          />
        </a>
      </div>
      <div className="skew" ref={(el) => (sectionItem = el)}>
        <div>
          <header className="App-header">
            <div className="app-container">
              <div ref={(el) => (container = el)} className="container">
                <div className="img-container">
                  <img ref={(el) => (image = el)} src={Profile} />
                </div>
              </div>
            </div>
            <div className="text-container">
              <h2 ref={(el) => (nameItem = el)}>
                Hi, I'm Chibuzo <br /> Madumere
              </h2>
              <h3 ref={(el) => (statusItem = el)}>
                {" "}
                I am a{" "}
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    "Front-End Developer",
                    3000,
                    "Gamer",
                    3000,
                    "Tech Enthusiat",
                    3000,
                  ]}
                />
              </h3>
              <div className="home-links">
                <a className="link" href="#about">
                  More About Me
                </a>
                <a className="link" href="#projects">
                  My Projects
                </a>
              </div>
            </div>
          </header>
        </div>
        <div id="about-me">
          <About />
        </div>
        <div id="projects">
          <Project />
        </div>
      </div>
    </div>
  );
}

export default Home;
