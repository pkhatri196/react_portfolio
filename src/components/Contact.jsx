import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Stack,
  IconButton,
  Button,
  Container,
  Paper
} from "@mui/material";
import Textarea from '@mui/joy/Textarea';

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <Box sx={{ p: {md:"30px 20px" ,xs:"10px 20px" }}}>
      <Grid
        container
        spacing={1}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item aria-label="left-part" xs={12} md={5}>
          <Grid
            container
            spacing={4}
            direction="column"
            sx={{ alignItems: "center", textAlign: "center" }}
          >
            <Grid item>
              <Typography
                variant="h3"
                sx={{ color: "#ca1083", fontFamily: "Kalam" ,fontSize:{xs:"40px" , md:"50px"}}}
              >
                Let's Connect !
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body"  sx={{fontSize:{xs:"13px" , md:"16px"}}} >
                I'm currently looking for software devepoler role opportunities.<br></br>Feel free
                to connect if my profile and skillset stands to be a <br></br>
                good match for your need.
              </Typography>
            </Grid>
            <Grid item>
              <Stack direction="row">
                <a href="mailto:payal.khatri02@gmail.com" target="_blank">
                  <IconButton>
                    <EmailIcon fontSize="large" sx={{ color: "#ca1083" }} />
                  </IconButton>
                </a>
                <a href="https://www.linkedin.com/in/pk02/" target="_blank">
                  <IconButton>
                    <LinkedInIcon fontSize="large" sx={{ color: "#ca1083" }} />
                  </IconButton>
                </a>
                <a href="https://github.com/pkhatri196" target="_blank">
                  <IconButton aria-label="github">
                    <GitHubIcon fontSize="large" sx={{ color: "#ca1083" }} />
                  </IconButton>
                </a>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
