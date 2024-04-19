import React, { useState } from "react";
import axios from "axios";
import { Button, Typography, Link, Grid } from "@mui/material";
import LinkedInLogo from "../../img/linkedin.png";
import GitHubLogo from "../../img/github.png";
import "./Footer.css";

export default function Footer() {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log(response.data.joke);
        setJoke('"' + response.data.joke + '"');
      });
  };

  const downloadResume = () => {
    window.location.href = "./resume.pdf";
  };

  return (
    <div id="footer">
      <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
        <Grid item xs={12} sm={6} md={8}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <button variant="contained" onClick={getJoke}>
                Click here for a joke
              </button>
            </Grid>
            <Grid item>
              <Typography variant="caption">(from icanhazdadjoke.com)</Typography>
            </Grid>
            <Grid item>
              <Typography>{joke}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Grid container spacing={2} alignItems="center" justifyContent="flex-end">
            <Grid item>
              <Typography>
                <Link href="mailto:jackwardlaw0@gmail.com" color="inherit">
                  jackwardlaw0@gmail.com
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Link href="https://linkedin.com/in/jackwardlaw" target="_blank">
                <img src={LinkedInLogo} alt="LinkedIn" className="footer-icon" />
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://github.com/jackw00" target="_blank">
                <img src={GitHubLogo} alt="GitHub" className="footer-icon" />
              </Link>
            </Grid>
            <Grid item>
              <a href="/">Home</a>
            </Grid>
            <Grid item>
              <button onClick={downloadResume}>
                View Resume
              </button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}