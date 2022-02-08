import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import '../App.css'
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kqf84qu",
        "template_i5xplkl",
        e.target,
        "user_HxFKMlHEFrDRwR3g925np"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }


function Contact() {  
  const ref = useRef();

  const reset = () => {
    ref.current.value = "";
  };
  

  return (
    <section
      className="contact"
      style={{ height: "100vh", width: "100%" }}
      onSubmit={sendEmail}
    >
      <h1>Contact Me</h1>
      {/* <img className="selfie" src={require("../assets/images/head-shot.jpg")} alt="Christi Marchetti"/> */}
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" name="name" ref={ref}/>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input id="email" type="email" name="email" ref={ref}/>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" ref={ref}/>
        </div>
        <button type="submit" onClick={reset}>Submit</button>
      </form>
    </section>
  );
}

export default Contact;
