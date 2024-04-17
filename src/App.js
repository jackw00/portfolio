import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from './theme/muiTheme';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import "./index.css";

export default function App() {

  return (
    <ThemeProvider theme={muiTheme}>
    <head>
     <link rel="icon" href="/favicon.png" />
    </head>
    <main className="main">
      <section className="bg-light-blue sticky-navbar">
        <Navbar />
      </section>
      <section className="background-section bg-dark-blue">
        <About /> 
      </section>
      <section className="background-section">
        <svg
          className="background-svg"
          viewBox="0 0 800 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <rect width="100%" height="200" fill="#31708E"></rect>
          <path
            d="M0 130L114 124L229 131L343 135L457 142L571 126L686 118L800 133L800 201L686 201L571 201L457 201L343 201L229 201L114 201L0 201Z"
            fill="#f7f9fb"
          ></path>
          <path
            d="M0 152L114 156L229 142L343 132L457 159L571 153L686 148L800 138L800 201L686 201L571 201L457 201L343 201L229 201L114 201L0 201Z"
            fill="#cdd8db"
          ></path>
          <path
            d="M0 145L114 167L229 164L343 162L457 148L571 149L686 147L800 156L800 201L686 201L571 201L457 201L343 201L229 201L114 201L0 201Z"
            fill="#a4b8b7"
          ></path>
          <path
            d="M0 178L114 176L229 173L343 178L457 173L571 165L686 175L800 168L800 201L686 201L571 201L457 201L343 201L229 201L114 201L0 201Z"
            fill="#82988f"
          ></path>
          <path
            d="M0 182L114 178L229 176L343 178L457 177L571 175L686 186L800 184L800 201L686 201L571 201L457 201L343 201L229 201L114 201L0 201Z"
            fill="#687865"
          ></path>
        </svg>
      </section>
      <section className="background-section-projects bg-green">
        <Projects />
      </section>
      {
        //should be green to middle blue (w/ white?)
      }
      <section className="background-section">
        <svg
          className="background-svg"
          viewBox="0 0 800 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <rect width="100%" height="200" fill="#31708E"></rect>
          <path
            d="M0 130L114 124L229 131L343 135L457 142L571 126L686 118L800 133L800 201L686 201L571 201L457 201L343 201L229 201L114 201L0 201Z"
            fill="#f7f9fb"
          ></path>
          <path
            d="M0 152L114 156L229 142L343 132L457 159L571 153L686 148L800 138L800 201L686 201L571 201L457 201L343 201L229 201L114 201L0 201Z"
            fill="#cdd8db"
          ></path>
          <path
            d="M0 145L114 167L229 164L343 162L457 148L571 149L686 147L800 156L800 201L686 201L571 201L457 201L343 201L229 201L114 201L0 201Z"
            fill="#a4b8b7"
          ></path>
          <path
            d="M0 178L114 176L229 173L343 178L457 173L571 165L686 175L800 168L800 201L686 201L571 201L457 201L343 201L229 201L114 201L0 201Z"
            fill="#82988f"
          ></path>
          <path
            d="M0 182L114 178L229 176L343 178L457 177L571 175L686 186L800 184L800 201L686 201L571 201L457 201L343 201L229 201L114 201L0 201Z"
            fill="#687865"
          ></path>
        </svg>
      </section>
      <section className="background-section-skils bg-blue">
        <Skills />        
      </section>
      {
        // should be normal blue to light (with green)
      }
      <section className="background-section bg-green">
        This will be contact
      </section>
    </main>
    </ThemeProvider>
  );
}
