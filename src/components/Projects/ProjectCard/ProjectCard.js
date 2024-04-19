import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import "./ProjectCard.css";

const ProjectCard = ({ title, subtitle, description, image, link }) => {
  return (
    <Card className="project-card" elevation={10}>
      <CardContent>
        <Typography className="project-title" variant="h5">{title}</Typography>
        <Typography className="project-subtitle" variant="subtitle1">{subtitle}</Typography>
        <Typography className="project-description" variant="body1" >{description}</Typography>
      </CardContent>
      <div className="image-container">
        <a href={link}>
        <CardMedia component="img" src={image} alt="Project Image" className="project-image" />
        </a>
      </div>
    </Card>
  );
};

export default ProjectCard;
