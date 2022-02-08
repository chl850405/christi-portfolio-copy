import React from "react";
import gh from "../../assets/images/github.png";
import li from "../../assets/images/linkedin.png";
import sof from "../../assets/images/stackOF.png"
import "./Footer.css";

function Footer() {
  const clickGithub = () => {
    window.open("https://github.com/chl850405");
  };
  const clickLinkedIn = () => {
    window.open("https://www.linkedin.com/in/christi-marie-27867170/");
  };
  const clickStackOF = () => {
    window.open("https://stackoverflow.com/users/16523815/user16523815");
  };
  return (
    <div className="footer-container">
        <img
          className="gh"
          src={gh}
          alt="github"
          onClick={clickGithub}
          target="_blank"
          rel="noreferrer noopener"
        />
        <img
          className="li"
          src={li}
          alt="linkin"
          onClick={clickLinkedIn}
          target="_blank"
          rel="noreferrer noopener"
        />
        <img
          className="li"
          src={sof}
          alt="stack overflow"
          onClick={clickStackOF}
          target="_blank"
          rel="noreferrer noopener"
        />
    </div>
  );
}

export default Footer;
