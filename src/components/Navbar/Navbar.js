import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <span className="brand-container">
        <a href="#about">Jack Wardlaw</a>
      </span>
      <span className="list-container">
        <a href="#projects" className="">
          Projects
        </a>
        <a href="#skills" className="">
          Skills
        </a>
        <a href="#contact" className="">
          Contact Me
        </a>
      </span>
    </div>
  );
}
