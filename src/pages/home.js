import React, { useRef, useEffect } from "react";
import NavBar from "../components/sidebar/navbar";
import { gsap, Power3 } from "gsap";
import Typical from "react-typical";
import Profile from "../assets/profile2.png";
import "./home.css";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";

function Home() {
  const tl = new TimelineLite();

  let nameItem = useRef(null);
  let statusItem = useRef(null);
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");
  
  useEffect(() => {
    tl.to(container, 0, { css: { visibility: "visible" } }).to(
      imageReveal,
      1.4,
      { width: "0%", ease: Power2.easeInOut }
    ).to(image, 1.4, {scale: 1.3, ease: Power2.easeInOut, delay: -1.4})

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
            Hi, I'm Chibuzo <br/> Madumere
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
        </div>
      </header>
    </div>
  );
}

export default Home;
