import React from "react";
import {Link} from "react-router-dom"
import './Project.css'


function ProjectItem(props) {
  return (
    <div>
      <ul className="projects__item">
        <Link className="item_row projects__item__link" to={{pathname:props.path}} target="_blank">
          <div className="projects__item__pic-wrap">
            <img src={props.src} alt="Projects" className="projects__item__img"/>
            <div className="pic_label_bottom_right">{props.label}</div>
          </div>
        </Link>
        <h5 className="item_row projects__item__text">
          <div className="projects__item__info ">
            {props.text}
          </div>
        </h5>
        <Link className="item_row github__link" to={{pathname:props.github}} target="_blank">
          <img src={props.icon} alt="Projects" className="github__icon__img"/>
        </Link>
      </ul>
    </div>
  );
}

// An image of the deployed application (either a GIF or a screenshot)

// The title of the project

// A link to the deployed application

// A link to the corresponding GitHub repository

export default ProjectItem;
