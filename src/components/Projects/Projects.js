import { projects } from "../../data";

export default function Projects() {
  return (
    <div id="projects">
      <div>
        <h1>Projects</h1>
        <p>Click on the pictures below to check out my recent projects!</p>
      </div>
      <div>
        <div>
          {projects.map((project) => (
            <div>
              <div className="w-1/2 p-4">
                <a href={project.link} target="_blank">
                  <h1>{project.title}</h1>
                </a>
                <h2>{project.subtitle}</h2>
                <p>{project.description}</p>
              </div>
              <div>
                <a href={project.link} target="_blank">
                  <img alt="alt text" src={project.image} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
