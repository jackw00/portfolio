import linkedInLogo from "../../img/linkedin.png";
import githubLogo from "../../img/github.png";
import aboutGraphic from "../../img/aboutgraphic.png";

export default function About() {
  return (
    <section id="about">
      <div>
        <div>
          <div>
            <h1>Let me introduce myself.</h1>
            <p>
              My name is Jack. I am a student at the University of Florida
              studying computer engineering. Checkout some of the projects I've
              been working on and my skills below. I am undegraduate researcher
              at the{" "}
              <a
                className="underline"
                target="_blank"
                href="https://smartdata.ece.ufl.edu/"
              >
                SmartData Lab
              </a>{" "}
              working on a project related to signal processing and
              non-destructive evaluation. Outside of my coursework, I am
              President of{" "}
              <a
                className="underline"
                target="_blank"
                href="https://www.honors.ufl.edu/student-life/student-orgs/honors-athletics/"
              >
                Honors Athletics
              </a>{" "}
              and a developer on the{" "}
              <a
                className="underline"
                target="_blank"
                href="https://www.ufdreamteameng.org/"
              >
                Dream Team Engineering
              </a>{" "}
              software division.
            </p>
          </div>
          <img src={aboutGraphic}></img>
        </div>
        <div>
          <a target="_blank" href="https://linkedin.com/in/jackwardlaw">
            <img src={linkedInLogo} alt="LinkedIn" />
          </a>
          <a href="#contact">Contact</a>
          <a href="#projects">Projects</a>
          <a target="_blank" href="https://github.com/jackw00">
            <img src={githubLogo} className="rounded" alt="GitHub" />
          </a>
        </div>
      </div>
    </section>
  );
}
