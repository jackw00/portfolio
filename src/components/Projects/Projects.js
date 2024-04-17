import React from "react";
import { Box, Typography } from "@mui/material";
import { projects } from "../../data";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Projects.css";

export default function Projects() {

  const windowWidth = window.innerWidth;

  return (
    <section id="projects">
      <Box class="header-container">
        {windowWidth > 768 ? (
          <>
          <Typography variant="h2" gutterBottom>
            Projects
          </Typography>
          <Typography variant="h6">
            Click on the pictures below to check out my recent projects!
          </Typography>
          </>
        ) : (
          <>
          <Typography variant="h4" gutterBottom>
            Projects
          </Typography>
          <Typography variant="h6">
            Click on the pictures below to check out my recent projects!
          </Typography>
          </>
        )}
      </Box>
      <Box className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </Box>
    </section>
  );
}
