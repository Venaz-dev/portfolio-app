import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom'
import "./project.style.css";
import Tilt from "react-tilt";
import projectInfo from "../../components/projectInfo";

export default function Project() {
  let container = useRef(null);

  const [project, setProject] = useState(projectInfo);

  let bg = require("../../assets/portfolio.png");

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div className="projects-fullwidth">
        {project.map((pro) => (
          <Link to={`/projects/slider/${pro.title}`}>
            <div className="project-container">
              <Tilt
                options={{ max: 100, scale: 1 }}
                style={{ height: "inherit", width: "inherit" }}
              >
                <div
                  ref={(element) => (container = element)}
                  className="project-holder"
                >
                  <div className="project">
                    <img src={pro.backgroundImage} alt="test"></img>
                  </div>
                  <h1>{`${pro.title}`}</h1>
                </div>
              </Tilt>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
