import React from "react";
import '../App.css'

function About() {

  return (
    <div className="about-me" style={{ height: "100vh", width: "100%" }}>
      <h1 id="about">My Beaten Path</h1>
      <img className="selfie" src={require("../assets/images/head-shot.JPG")} alt="Christi Marchetti"/>
        <div className="bio">
          <p className="p1">
            I’ve always sought out opportunities and challenges that are
            meaningful to me. Although my professional path has taken many
            twists and turns — from Cosmetologist, to Barber, to Massage
            Therapist, to small business owner — I've never stopped engaging my
            passion to help others and solve problems.
          </p>
          <p className="p2">
          I am excited to integrate my creativity, attention to detail, problem solving, communication and collaborative skills from my past background in the beauty industry and customer service. This postions me to provide a unique perspective in creating user-friendly websites.
          </p>
        </div>
    </div>
  );
}

export default About;
