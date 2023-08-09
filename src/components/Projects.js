import { projects } from "../data";

export default function Projects() {
  return (
    <div id="projects" className="text-gray-400 bg-gray-900 container px-2 py-20 mb-20 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="font-mono sm:text-4xl text-3xl mb-5 text-white">
            Projects
          </h1>
          <p className="">
            Click on the pictures below to check out my recent projects!
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <div>
            {projects.map((project) => (
              <div className="flex items-center justify-center">
                <div className="w-1/2 p-4">
                  <a href={project.link} target="_blank"> 
                    <h1 className="font-mono text-lg text-white mb-3">
                      {project.title}
                    </h1>
                  </a>
                  <h2 className="text-green-400 text-sm mb-2">{project.subtitle}</h2>
                  <p className="">{project.description}</p>
                </div>
                <div className="w-1/2 p-4">
                  <a
                    href={project.link} target="_blank"
                    className="">
                      <img alt="alt text" className="w-100 h-50 object-fill" src={project.image}/>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}