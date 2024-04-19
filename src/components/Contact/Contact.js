import React, { useRef, useState } from "react";
import { Box, Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import emailjs from "@emailjs/browser";
import './Contact.css'

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [resMsg, setResMsg] = useState("");
  const [sendAttempt, setSendAttempt] = useState(false);
  const windowWidth = window.innerWidth;

  const sendEmail = (e) => {
    e.preventDefault();
    const body = {name: name, email: email, message: msg};
    try {
      emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        body,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setResMsg("Email sent!");
        },
        (error) => {
          setResMsg("Error. Sorry about that, contact me directly at jackwardlaw0@gmail.com");
        }
      );
    } catch (error) {
      setResMsg("Error. Sorry about that, contact me directly at jackwardlaw0@gmail.com");
    }
    setName("");
    setEmail("");
    setMsg("");
    setSendAttempt(true)
  };

  return (
    <section id="contact">
      <Box className="header-container">
        {windowWidth > 768 ? (
          <>
          <Typography variant="h2" gutterBottom>
            Contact Me
          </Typography>
          <Typography variant="h6">
            Let's get in touch! Send me an email below.
          </Typography>
          </>
        ) : (
          <>
          <Typography variant="h4" gutterBottom>
            Contact Me
          </Typography>
          <Typography variant="h6">
            Let's get in touch! Send me an email below.
          </Typography>
          </>
        )}
      </Box>
      <Box className="form-container">
        <form onSubmit={sendEmail}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              name="name"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              name="email"
              label="Your Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="message"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              value={msg}
              onChange={(event) => setMsg(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            {!sendAttempt ? (
              <Button variant="contained" type="submit">
                Send
              </Button>
            ) : (
              <Typography variant="body1">{resMsg}</Typography>
            )}
          </Grid>
        </Grid>
      </form>
      </Box>
    </section>
  );
}
