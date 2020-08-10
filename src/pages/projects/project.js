import React, { useRef } from "react";
import "./project.style.css";
import Tilt from "react-tilt";

export default function Project() {
  let container = useRef(null);

  let bg = require("../../assets/portfolio.png")

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div className="projects-fullwidth">
        <div className="project-container">
          <Tilt
            options={{ max: 25, scale: 1 }}
            style={{ height: "inherit", width: "inherit" }}
          >
            <div
              ref={(element) => (container = element)}
              className="project-holder"
            >
              <div
                className="project"
                style={{
                  backgroundImage: `linear-gradient(to left bottom, rgba(40, 40, 40, 0.78), rgba(0, 0, 0, 5.93))`,
                }}
              >
                <img src={bg} alt="test"></img>
              </div>
            </div>
          </Tilt>
        </div>
        <div className="project-container">
          <Tilt
            className="Tilt"
            options={{ max: 25, scale: 1 }}
            style={{ height: "inherit", width: "inherit" }}
          >
            <div
              ref={(element) => (container = element)}
              className="project-holder"
            >
              <div className="project"> </div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}
