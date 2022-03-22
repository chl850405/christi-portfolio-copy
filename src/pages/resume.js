import React from "react";
import { Link } from "react-router-dom";
import Pdf from "../assets/resume/Christi Marchetti.pdf";


function Resume() {
  return (
    <div className="resume" style={{ height: "100vh", width: "84%" }}>
      <p>Resume
Proficiencies
<br/>
Front End,
Git,
HTML,
Handlebars,
Reactjs,
CSS,
Bootstrap,
Material UI,
JavaScript,
JQuery,
Third Party APIs,
Server Side APIs,
Back End,
OOP,
MVC,
ORM,
Node,
Express,
MongoDB,
PWA
</p>
<Link to={Pdf} target="_blank" rel="noreferrer noopener" >
​Click Here to Download My Resume</Link>
    </div>
  );
}

export default Resume;
