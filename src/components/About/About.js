import React, {useEffect, useState} from 'react';
import {Box, Button, Typography} from '@mui/material';
import linkedInLogo from "../../img/linkedin.png";
import githubLogo from "../../img/github.png";
import './About.css';

export default function About() {
  const [typedText, setTypedText] = useState('J');
  const textToType = "Jack Wardlaw";
  const typingSpeed = 50; // Adjust speeds as needed
  const deleteSpeed = 100;
  const animationLimit = 5; // Total number of typing animations
  const windowWidth = window.innerWidth;

  const downloadResume = () => {
    window.location.href = "./resume.pdf";
  };

  useEffect(() => {
    let animationCount = 0;
    const typeText = () => {
      let index = 1;
      const interval = setInterval(() => {
          if (index < textToType.length) {
              setTypedText(prevText => prevText + textToType.charAt(index));
              index++;
          } else {
              clearInterval(interval);
              animationCount++;
              if (animationCount < animationLimit) {
                  setTimeout(() => {
                      deleteText(); // Start deletion after typing
                  }, 1000); // Wait for 1 second before starting deletion
              }
          }
      }, typingSpeed);

      return () => clearInterval(interval);
    };

    const deleteText = () => {
      let index = textToType.length;
      const interval = setInterval(() => {
          if (index > 1) {
              setTypedText(prevText => prevText.slice(0, -1)); // Delete one character
              index--;
          } else {
              clearInterval(interval);
              typeText(); // Re-type text after deletion
          }
      }, deleteSpeed);
    };

    typeText();

  }, []);

  return (
    <section id="about">
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '5vh', minHeight: '100vh'}}
      >
        <Box sx={{ textAlign: 'center', maxWidth: 800, p: 3 }}>
          {windowWidth > 768 ? (
            <Typography variant="h2" gutterBottom>
              {typedText}
            </Typography>
          ) : (
            <Typography variant="h4" gutterBottom>
              {typedText}
            </Typography>
          )}
          
          <Typography variant="h6" className="about-paragraph">
          Hello! My name is Jack. I am an undergraduate student at the University of Florida (UF) studying computer engineering. I have also started UF's combined BS/MS program in electrical and computer engineering. Checkout some of the projects I've been working on and my skills below. Outside of my coursework, I have held roles as a researcher {" ("}
            <a
              target="_blank"
              href="https://smartdata.ece.ufl.edu/"
            >
              SmartData Lab
            </a>{"), "}
            teaching assistant for EEL3701C and EEL4744C, and developer on the {" "}
            <a
              target="_blank"
              href="https://www.ufdreamteameng.org/"
            >
              Dream Team Engineering
            </a>{" "}
            software division. I am also President of {" "}
            <a
              target="_blank"
              href="https://www.honors.ufl.edu/student-life/student-orgs/honors-athletics/"
            >
              Honors Athletics
            </a>{" "}
            in the UF Honors Program. A recent accomplishment that I am proud of is a software engineering / digital signal processing internship at {" "}
            <a
              target="_blank"
              href="https://mrsl.com"
            >
              MRSL
            </a>{" "}
            , where I gained experience creating software for DSP and communications applications.
          </Typography>
        </Box>
        <Box
          className="button-bar"
          sx={{ display: 'flex', justifyContent: 'space-between', width: '100vw', maxWidth: 500, mt: 3, background: "#8FC1E3", borderRadius: 10}}
        >
          <Button
            className="logo-button"
            href="https://github.com/jackw00"
            target="_blank"
          >
            <img src={githubLogo} alt="GitHub Logo" style={{ width: '60%' }} />
          </Button>
          <Button
            className="text-button"
            href="#projects"
          >
            Projects
          </Button>
          <Button
            className="text-button"
            href="#contacts"
          >
            Contacts
          </Button>
          <Button
            className="logo-button"
            href="https://www.linkedin.com/in/jackwardlaw"
            target="_blank"
          >
            <img src={linkedInLogo} alt="LinkedIn Logo" style={{ width: '100%' }} />
          </Button>
        </Box>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', width: '100vw', maxWidth: 200, mt: 3, background: "#8FC1E3", borderRadius: 10}}
        >
        <button onClick={downloadResume}>
          View Resume
        </button>
        </Box>
      </Box>
    </section>
  );
}
