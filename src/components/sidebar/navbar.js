import React, { useState, useEffect, useRef } from "react";
import { TweenMax, Power3, gsap, TimelineLite } from "gsap";
import { NavLink } from "react-router-dom";

import "./navbar.style.scss";

export default function NavBar() {
  const tl = new TimelineLite();

  let sideNav = useRef(null);
  let menuIcon = useRef(null);
  let mainHeader = useRef(null);
  let logoItem =useRef(null)
  let first = useRef(null);
  let second = useRef(null);
  let third = useRef(null);
  let forth = useRef(null);
  let inner = useRef(null);

  let id ="hello"

  useEffect(() => {
    gsap.to(menuIcon, 0, { css: { visibility: "visible" } });

    gsap.to(mainHeader, 0, { css: { visibility: "visible" } });
    if (screenSize <= 500) {
      gsap.to(menuIcon, { rotation: 360, x: 15, duration: 1, delay: 0.5 });
    } else {
      gsap.to(menuIcon, { rotation: 180, x: 40, duration: 1, delay: 0.5 });
    }
  }, []);

  const [screenSize, setScreenSize] = useState(window.screen.width);

  window.onresize = resize;

  function resize() {
    setScreenSize(window.screen.width);
    console.log(screenSize);
  }

  function openNav() {
    document.body.style.overflowY ='hidden';
    gsap.to(sideNav, 0.2, {
      css: {
        width: "100%",
        borderTopRightRadius: "0%",
        borderBottomRightRadius: "0%",
      },
      delay: 0.2,
    });

    tl.to(first, 0.5, { width: "100%", ease: Power3.easeOut, delay: 0.5 })
      .to(second, 0.5, { width: "100%", ease: Power3.easeInOut, delay: -0.5 })
      .to(third, 0.5, { width: "100%", ease: Power3.easeInOut, delay: -0.3 })
      .to(forth, 0.5, { width: "100%", ease: Power3.easeInOut, delay: -0.3 })
      .to(inner, 0.5, { width: "100%", ease: Power3.easeOut, delay: -0.5 });

    document.getElementById("myOverlay").style.display = "block";
  }

  function closeNav() {
    document.body.style.overflowY ='auto';
    gsap.to(sideNav, 0.2, {
      css: {
        width: 0,
        borderTopRightRadius: "100%",
        borderBottomRightRadius: "100%",
      },

      ease: Power3.easeOut,
      delay: 1,
    });

    tl.to(inner, 0.2, { width: "0%" })
      .to(first, 0.5, { width: "0%", ease: Power3.easeOut, delay: -0.2 })
      .to(second, 0.5, { width: "0%", ease: Power3.easeInOut, delay: -0.5 })
      .to(third, 0.5, { width: "0%", ease: Power3.easeInOut, delay: -0.3 })
      .to(forth, 0.5, { width: "0%", ease: Power3.easeInOut, delay: -0.3 });

    document.getElementById("myOverlay").style.display = "none";
  }

  return (
    <header ref={(el) => (mainHeader = el)} className="main-header">
      <div
        ref={(el) => {
          sideNav = el;
        }}
        id="mySidenav"
        className="sidenav"
      >
        {/* side nav animation divs */}
        <div ref={(el) => (first = el)} className="red"></div>
        <div ref={(el) => (second = el)} className="blue"></div>
        <div ref={(el) => (third = el)} className="green"></div>
        <div ref={(el) => (forth = el)} className="yellow"></div>

        <div
          id="sidenavInner"
          className="sidenavinner"
          ref={(el) => (inner = el)}
        >
          <span className="closebtn" onClick={closeNav}></span>
          <NavLink
            to="/"
            exact
            activeStyle={{ fontWeight: "bold", color: "#14121c" }}
            onClick={closeNav}
          >
            <h3>Home</h3>
          </NavLink>
          <a href="#about-me" onClick={closeNav}><h3>About Me</h3></a>
          <a href="#projects" onClick={closeNav}><h3>My Projects</h3></a>
          
        </div>
      </div>

      <div id="myOverlay" className="overlay" onClick={closeNav}></div>
      <span
        ref={(el) => (menuIcon = el)}
        id="burgerMenu"
        style={{ fontSize: "60px", cursor: "pointer", height: "fit-content" }}
        onClick={openNav}
      ></span>
      <NavLink
        to="/"
        exact
        activeStyle={{ fontWeight: "bold", color: "#14121c" }}
        onClick={closeNav}
      >
        <span ref ={el => logoItem = el}className="logo"></span>
      </NavLink>

      
    </header>
  );
}

//background: #373a47;
