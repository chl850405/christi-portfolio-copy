import React from "react";
import { Link } from "react-router-dom";
import Pdf from "../assets/resume/Christi Marchetti.pdf";


function Resume() {
  return (
    <div className="resume" style={{ height: "100vh", width: "84%" }}>
      <Link to={Pdf} target="_blank" rel="noreferrer noopener" >Click Here to Download My Resume</Link>
    </div>
  );
}

export default Resume;
