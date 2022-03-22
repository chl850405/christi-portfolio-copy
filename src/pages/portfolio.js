import React from "react";
import ProjectItem from "../components/Project/Project";
import icon from "../assets/images/github.png";
import "../App.css";

function Projects() {
  return (
    <div className="projects" style={{ width: "99.5%" }}>
      <div className="projects__container">
        <div className="projects__wrapper">
          <ul className="projects__items">
            <div className="project_item">
              <ProjectItem
                src={require("../assets/images/password-generator.png")}
                text="Generates a random password based on selected criteria."
                label="Password Generator test"
                icon={icon}
                github="https://github.com/chl850405/Password-Generator"
                path="https://chl850405.github.io/Password-Generator/"
              />
            </div>
            <div className="project_item">
              <ProjectItem
                src={require("../assets/images/weather.png")}
                text="Search a city's current weather and five day forecast."
                label="Weather Dashboard"
                icon={icon}
                github="https://github.com/chl850405/real-time-weather"
                path="https://chl850405.github.io/real-time-weather/"
              />
            </div>
            <div className="project_item">
              <ProjectItem
                src={require("../assets/images/top-score.png")}
                text="Build a NBA fantasy team."
                label="Top Score"
                icon={icon}
                github="https://github.com/chl850405/top-score"
                path="https://chl850405.github.io/top-score"
              />
            </div>
            <div className="project_item">
              <ProjectItem
                src={require("../assets/images/notes.png")}
                text="Write and save notes."
                label="Note Taker"
                icon={icon}
                github="https://github.com/chl850405/note-taker"
                path="https://n0t3-t4k3r.herokuapp.com/notes"
              />
            </div>
            <div className="project_item">
              <ProjectItem
                src={require("../assets/gif/ecommerce.gif")}
                text="The back end created for the E-Commerce site."
                label="E-Commerece"
                icon={icon}
                github="https://github.com/chl850405/Password-Generator"
                path="https://drive.google.com/file/d/1Em_LQH1I-NgwqmKpxgeBkXy71hx4clSp/view"
              />
            </div>
            <div className="project_item">
              <ProjectItem
                src={require("../assets/images/budget.png")}
                text="Keep track of your budget online or offline."
                label="Budget Tracker"
                icon={icon}
                github="https://github.com/chl850405/budget-tracker"
                path="https://budgettr4k3r.herokuapp.com/"
              />
            </div>
            <div className="project_item">
              <ProjectItem
                src={require("../assets/images/pd.png")}
                text="Store your COVID Vaccination card in your virtual wallet."
                label="Plague Docs"
                icon={icon}
                github="https://github.com/chl850405/plague-docs-copy"
                path="https://plague-docs.herokuapp.com"
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
