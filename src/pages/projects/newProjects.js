import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./newProject.scss";
import projectInfo from "../../components/projectInfo";



export default function NewProject() {
  const [project, setProject] = useState(projectInfo);

  let sectionItem = useRef(null)
  let currentPixel = window.pageXOffset;

  const looper = function () {
    const newPixel = window.pageYOffset;
    const diff = newPixel - currentPixel;
    const speed = diff * 0.25;

    sectionItem.style.transform = "skewX(" + speed + "deg)";

    currentPixel = newPixel;
    console.log(currentPixel)
    requestAnimationFrame(looper);
  };

  useEffect(() => {
    
      looper();
  })
  

  return (
    <div>
      <div className="new-project" style={{overflowX:'scroll'}}>

      <div className="project-item" ref={el => sectionItem = el}>
          <div
            className="project-first-section"
            style={{
              backgroundImage: `linear-gradient(to bottom right, hsla(31, 90%, 76%, 1) 0%, hsla(302, 82%, 76%, 1) 100%)`,
            }}
          >
            <h1>{project[0].title}</h1>
            <h1>App</h1>
          </div>
          <div className="project-second-section">
            <div className="project-details-section">
              <p>{project[0].description}</p>
              <div>
                <h3> Skills: </h3>
                <div className="skill-holder">
                  {project[0].skills.map((skill) => (
                    <p className="skill">{skill}</p>
                  ))}
                </div>
              </div>
              <div style={{display: 'flex'}}>
                <Link className="links" to={project[0].github_link}>
                  GitHub Link
                </Link>
                <Link className="links" to={project[0].live_link}>
                  Visit Site
                </Link>
              </div>
            </div>
          </div>
        </div>
    
        <div className="project-item">
          <div
            className="project-first-section"
            style={{
              backgroundImage: `linear-gradient(to bottom right, hsla(31, 90%, 76%, 1) 0%, hsla(302, 82%, 76%, 1) 100%)`,
            }}
          >
            <h1>{project[0].title}</h1>
            <h1>App</h1>
          </div>
          <div className="project-second-section">
            <div className="project-details-section">
              <p>{project[0].description}</p>
              <div>
                <h3> Skills: </h3>
                <div className="skill-holder">
                  {project[0].skills.map((skill) => (
                    <p className="skill">{skill}</p>
                  ))}
                </div>
              </div>
              <div style={{display: 'flex'}}>
                <Link className="links" to={project[0].github_link}>
                  GitHub Link
                </Link>
                <Link className="links" to={project[0].live_link}>
                  Visit Site
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item">
          <div
            className="project-first-section"
            style={{
              backgroundImage: `linear-gradient(to bottom right, hsla(31, 90%, 76%, 1) 0%, hsla(302, 82%, 76%, 1) 100%)`,
            }}
          >
            <h1>{project[0].title}</h1>
            <h1>App</h1>
          </div>
          <div className="project-second-section">
            <div className="project-details-section">
              <p>{project[0].description}</p>
              <div>
                <h3> Skills: </h3>
                <div className="skill-holder">
                  {project[0].skills.map((skill) => (
                    <p className="skill">{skill}</p>
                  ))}
                </div>
              </div>
              <div style={{display: 'flex'}}>
                <Link className="links" to={project[0].github_link}>
                  GitHub Link
                </Link>
                <Link className="links" to={project[0].live_link}>
                  Visit Site
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
