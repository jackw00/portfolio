import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { skills } from "../../data";
import SkillCard from "./SkillCard/SkillCard";
import "./Skills.css";

export default function Skills() {

  const windowWidth = window.innerWidth;

  return (
    <section id="skills">
      <Box class="header-container">
        {windowWidth > 768 ? (
          <>
          <Typography variant="h2" gutterBottom>
            Skills
          </Typography>
          <Typography variant="h6">
            These are some of the skills and technologies I've learned so far from my coursework and personal projects. I'm excited to keep learning more!
          </Typography>
          </>
        ) : (
          <>
          <Typography variant="h4" gutterBottom>
            Skills
          </Typography>
          <Typography variant="h6">
            These are some of the skills and technologies I've learned so far from my coursework and personal projects. I'm excited to keep learning more!
          </Typography>
          </>
        )}
      </Box>
      <Grid container spacing={2} className="skills-grid">
        {skills.map((skill, index) => (
          <Grid key={index} item xs={6} sm={4} md={3}>
            <SkillCard className="skill-card" skill={skill} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
