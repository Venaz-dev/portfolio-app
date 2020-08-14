import React from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";

import Home from "./pages/home";
import About from "./pages/about";
import Project from "./pages/projects/project"
import NavBar from "./components/sidebar/navbar";
import ImageSlider from "./components/imageSlider"
import NotFound from "./pages/notFound"
import NewProject from "./pages/projects/newProjects"

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/projects", name: "Projects", Component: Project },
  { path: "/projects/slider/:id", name: "ImageSlider", Component: ImageSlider },
  { name: "404", Component: NotFound }
];

function App() {
  const onEnter = (node) => {
    gsap.from([node.children[0].firstElementChild], 0.6, {
      y: 30,
      delay: 1,
      ease: "power3.InOut",
      opacity: 0,
      stagger: {
        amount: 0.6,
      },
    });
  };

  const onExit = (node) => {
    gsap.to([node.children[0].firstElementChild], 0.6, {
      y: 60,
      ease: "power3.InOut",
      stagger: {
        amount: 0.6,
      },
    });
  };

  return (
    <>
      <div className="main-container">
        <Switch>
        {routes.map(({ path, Component }) => (
          <Route key="name" path={path} exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1200}
                classNames="page"
                unmountOnExit
                onEnter={onEnter}
                onExit={onExit}
              >
                <div className="page">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
        </Switch>
        
        
      </div>
      <NavBar />
    </>
  );
}

export default App;
