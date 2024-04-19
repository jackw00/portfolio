import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from './theme/muiTheme';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
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
      <section className="bg-dark-blue">
        <About /> 
      </section>
      <section className="background-section">
        <svg id="visual" viewBox="0 0 2000 200" width="2000" height="200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="2000" height="200" fill="#31708E"></rect><path d="M0 30L222 83L444 14L667 51L889 75L1111 105L1333 63L1556 60L1778 59L2000 98L2000 201L1778 201L1556 201L1333 201L1111 201L889 201L667 201L444 201L222 201L0 201Z" fill="#f7f9fb"></path><path d="M0 60L222 87L444 57L667 118L889 99L1111 108L1333 52L1556 134L1778 96L2000 122L2000 201L1778 201L1556 201L1333 201L1111 201L889 201L667 201L444 201L222 201L0 201Z" fill="#bfcdd0"></path><path d="M0 140L222 92L444 98L667 133L889 94L1111 132L1333 96L1556 153L1778 154L2000 117L2000 201L1778 201L1556 201L1333 201L1111 201L889 201L667 201L444 201L222 201L0 201Z" fill="#8ca39c"></path><path d="M0 135L222 151L444 180L667 151L889 162L1111 178L1333 137L1556 160L1778 146L2000 145L2000 201L1778 201L1556 201L1333 201L1111 201L889 201L667 201L444 201L222 201L0 201Z" fill="#687865"></path></svg>
      </section>
      <section className="bg-green">
        <Projects />
      </section>
      <section className="background-section">
        <svg id="visual" viewBox="0 0 2000 200" width="2000" height="200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="2000" height="200" fill="#687865"></rect><path d="M0 85L222 22L444 36L667 108L889 104L1111 48L1333 74L1556 60L1778 23L2000 19L2000 201L1778 201L1556 201L1333 201L1111 201L889 201L667 201L444 201L222 201L0 201Z" fill="#f7f9fb"></path><path d="M0 137L222 53L444 71L667 60L889 136L1111 108L1333 132L1556 95L1778 58L2000 97L2000 201L1778 201L1556 201L1333 201L1111 201L889 201L667 201L444 201L222 201L0 201Z" fill="#c1d1de"></path><path d="M0 120L222 154L444 138L667 158L889 143L1111 150L1333 129L1556 114L1778 116L2000 153L2000 201L1778 201L1556 201L1333 201L1111 201L889 201L667 201L444 201L222 201L0 201Z" fill="#8baac2"></path><path d="M0 168L222 156L444 188L667 159L889 142L1111 128L1333 142L1556 167L1778 131L2000 158L2000 201L1778 201L1556 201L1333 201L1111 201L889 201L667 201L444 201L222 201L0 201Z" fill="#5085a5"></path></svg>
      </section>
      <section className="bg-blue">
        <Skills />       
      </section>
      <section className="background-section">
        <svg id="visual" viewBox="0 0 2000 200" width="2000" height="200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="2000" height="200" fill="#5085A5"></rect><path d="M0 90L222 82L444 82L667 95L889 36L1111 82L1333 12L1556 60L1778 98L2000 77L2000 201L1778 201L1556 201L1333 201L1111 201L889 201L667 201L444 201L222 201L0 201Z" fill="#f7f9fb"></path><path d="M0 112L222 54L444 114L667 126L889 122L1111 50L1333 107L1556 106L1778 99L2000 100L2000 201L1778 201L1556 201L1333 201L1111 201L889 201L667 201L444 201L222 201L0 201Z" fill="#bfcdd0"></path><path d="M0 135L222 109L444 145L667 145L889 157L1111 128L1333 109L1556 91L1778 156L2000 102L2000 201L1778 201L1556 201L1333 201L1111 201L889 201L667 201L444 201L222 201L0 201Z" fill="#8ca39c"></path><path d="M0 146L222 147L444 175L667 159L889 140L1111 183L1333 184L1556 150L1778 189L2000 176L2000 201L1778 201L1556 201L1333 201L1111 201L889 201L667 201L444 201L222 201L0 201Z" fill="#687865"></path></svg>
      </section>
      <section className="bg-green">
        <Contact/>
      </section>
      <section className="background-section">
        <svg id="visual" viewBox="0 0 2000 200" width="2000" height="200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="2000" height="200" fill="#687865"></rect><path d="M0 45L222 33L444 43L667 104L889 54L1111 80L1333 57L1556 99L1778 67L2000 18L2000 201L1778 201L1556 201L1333 201L1111 201L889 201L667 201L444 201L222 201L0 201Z" fill="#5085a5"></path><path d="M0 106L222 112L444 138L667 73L889 87L1111 80L1333 63L1556 67L1778 64L2000 127L2000 201L1778 201L1556 201L1333 201L1111 201L889 201L667 201L444 201L222 201L0 201Z" fill="#6598ba"></path><path d="M0 111L222 93L444 116L667 133L889 119L1111 158L1333 157L1556 154L1778 159L2000 152L2000 201L1778 201L1556 201L1333 201L1111 201L889 201L667 201L444 201L222 201L0 201Z" fill="#7aacce"></path><path d="M0 131L222 139L444 183L667 150L889 154L1111 169L1333 141L1556 141L1778 139L2000 170L2000 201L1778 201L1556 201L1333 201L1111 201L889 201L667 201L444 201L222 201L0 201Z" fill="#8fc1e3"></path></svg>      </section>
      <section className="bg-light-blue">
        <Footer/>
      </section>
    </main>
    </ThemeProvider>
  );
}
