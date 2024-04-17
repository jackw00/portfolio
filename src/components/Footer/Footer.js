import linkedInLogo from "../../img/linkedin.png";
import githubLogo from "../../img/github.png";
import React, { useRef, useState } from "react";
import axios from "axios";

export default function Contact() {
  const [joke, setJoke] = useState("");

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
    <div id="footer">
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
