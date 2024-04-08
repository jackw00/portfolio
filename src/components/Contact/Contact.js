import linkedInLogo from "../../img/linkedin.png";
import githubLogo from "../../img/github.png";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const form = useRef();
  const [joke, setJoke] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Message sent!");
        },
        (error) => {
          alert(
            "Error. Please try again or contact me directly at jackwardlaw0@gmail.com"
          );
        }
      );

    setName("");
    setEmail("");
    setMsg("");
  };

  const getJoke = () => {
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log(response.data.joke);
        setJoke('"' + response.data.joke + '"');
      });
  };

  return (
    <div id="contact">
      <h1>Contact</h1>
      <p>You can send me an email with this form below!</p>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label>Message</label>
          <textarea
            name="message"
            value={msg}
            placeholder="Hi there!"
            onChange={(event) => setMsg(event.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>

      <div>
        <button onClick={getJoke}>Click here for a joke</button>
        <span> (from icanhazdadjoke.com)</span>
        <p>{joke}</p>
      </div>

      <div>
        <p>
          <a href="mailto:jackwardlaw0@gmail.com">jackwardlaw0@gmail.com</a>
        </p>
        <a target="_blank" href="https://linkedin.com/in/jackwardlaw">
          <img src={linkedInLogo} alt="LinkedIn" />
        </a>
        <a target="_blank" href="https://github.com/jackw00">
          <img src={githubLogo} className="rounded" alt="GitHub" />
        </a>
        <a href="#">Home</a>
      </div>
    </div>
  );
}
