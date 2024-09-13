//mausam app ,news app,memory game,github clone,zomato landing page,

import React, { useState } from "react";
import { Box, Grid, Typography, Card, IconButton} from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import github from "../proj-img/github.png";
import memory from "../proj-img/memory-game.png";
import mausam from "../proj-img/mausam.png";
import news from "../proj-img/news.png";
import zomato from "../proj-img/zomato.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ReactCardFlip from "react-card-flip";


const projects = [
  {
    name: "My-Own-Github",
    description:
      "A GitHub-like application designed to search for different GitHub accounts, browse popular repositories based on various technologies, and like repositories,equipped with a login authentication feature.",
    tech: "MERN,Passport.js",
    gitUrl: "https://github.com/pkhatri196/github-clone",
    link: "",
    image: github,
  },
  {
    name: "Memory-Game",
    description:
      "A memory game is a card-matching game where players find and pair cards with matching images. The goal is to remember card positions and match pairs to win.Keeps treack of the times and moves taken by the player.",
    tech: "HTML,CSS,Javascript",
    gitUrl: "https://github.com/pkhatri196/memory-game",
    link: "https://pkhatri196.github.io/memory-game/",
    image: memory,
  },
  {
    name: "Mausam App",
    description:
      "A Mobile app that provides real-time weather data, including temperature, wind speed, and humidity. It offers up-to-date weather conditions to help users plan their activities effectively.",

    tech: "Flutter, Dart, API",
    gitUrl: "https://github.com/pkhatri196/mausam_app",
    link: "",
    image: mausam,
  },
  {
    name: "PK News App",
    description:
      "A Mobile app that provides real-time news organized by categories, featuring headlines with images, titles, and brief descriptions. Users can access full articles through an in-app web view functionality.",
    tech: "Flutter, Dart, API",
    gitUrl: "https://github.com/pkhatri196/newsapp",
    link: "",
    image: news,
  },
  {
    name: "Zomato Landing Page",
    description:
      "A Static and Responsive landing page of a food delivery website - Zomato",
    tech: "HTML ,CSS, Javascript",
    gitUrl: "https://github.com/pkhatri196/Mission",
    link: "https://pkhatri196.github.io/Mission/",
    image: zomato,
  },
];



const Projects = () => {

  const [isFlipped,setIsFlipped] =useState(Array(projects.length).fill(false))
  const handleMouseEnter = (index) => {
    // Create a new array where all values are false except the one at the current index
    const newFlippedState = [...isFlipped];
    newFlippedState[index]=true;
    setIsFlipped(newFlippedState);
  };

  // Handles resetting all flips (mouse leave)
  const handleMouseLeave = () => {
    // Set all values in the array to false (no cards flipped)
    const newFlippedState = isFlipped.map(() => false);
    setIsFlipped(newFlippedState);
  };
  return (
    <>
      <Box
        sx={{
          p: { md: "80px 100px 80px 100px", xs: "80px 30px 40px 30px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: "auto",
        }}
      >
        <Typography variant="h3" sx={{ color: "#ca1083", fontFamily: "Kalam" }}>
          Projects
        </Typography>
        <Grid
          container
          gap={7}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: "30px 0px",
          }}
        >
          {projects.map((project, index) => {
            return (
              <Grid
                item
                key={index}
                xs={12}
                sm={4}
                md={3}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <ReactCardFlip
                  isFlipped={isFlipped[index] || false}
                  flipDirection="horizontal"
                >
                  <Card
                    sx={{
                      height: "320px",
                      borderRadius: "10px",
                    }}
                  >
                    <CardHeader
                      title={project.name}
                      className="card-header"
                      sx={{
                        fontWeight: "800",
                        bgcolor: "#ca1083",
                        color: "white",
                      }}
                    />
                    <CardMedia
                      component="img"
                      height="194"
                      image={project.image}
                      alt="image"
                      sx={{ border: "2px solid white" }}
                    />
                    <CardContent>
                      <Typography
                        sx={{ fontSize: "15px", fontFamily: "Kalam" }}
                      >
                        Tech Used : {project.tech}
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      height: "320px",
                      width: "100%",
                      borderRadius: "10px",
                      p: "20px",
                      border: "1px solid #ca1083",
                    }}
                  >
                    <CardHeader
                      title={project.name}
                      sx={{
                        fontWeight: "800",
                        bgcolor: "#ca1083",
                        color: "white",
                      }}
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "black",
                          fontSize: { md: "15px", xs: "12px" },
                          fontFamily: "Kalam",
                        }}
                      >
                        {project.description}
                      </Typography>
                      {/* <Typography
                        sx={{ fontSize: "15px", fontFamily: "Kalam" }}
                      >
                        Tech Used : {project.tech}
                      </Typography> */}
                    </CardContent>
                    <CardActions disableSpacing sx={{ pb: 3 }}>
                      <a href={project.gitUrl} target="_blank">
                        <IconButton aria-label="github">
                          <GitHubIcon
                            fontSize="large"
                            sx={{ color: "#ca1083" }}
                          />
                        </IconButton>
                      </a>
                      {index != 2 && index != 3 && (
                        <a href={project.link} target="_blank">
                          <IconButton aria-label="link">
                            <OpenInNewIcon
                              fontSize="large"
                              sx={{ color: "#ca1083" }}
                            />
                          </IconButton>
                        </a>
                      )}
                    </CardActions>
                  </Card>
                </ReactCardFlip>
              </Grid>
            );
          })}

          {projects.map((project, index) => {
            return (
              <Grid
                item
                key={index}
                xs={12}
                sm={4}
                md={3}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <Card
                  sx={{
                    height: "470px",
                    borderRadius: "10px",
                  }}
                >
                  <CardHeader
                    title={project.name}
                    className="card-header"
                    sx={{
                      fontWeight: "800",
                      bgcolor: "#ca1083",
                      color: "white",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={project.image}
                    alt="image"
                    sx={{ border: "2px solid white" }}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "black",
                        fontSize: { md: "15px", xs: "12px" },
                        fontFamily: "Kalam",
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Typography sx={{ fontSize: "15px", fontFamily: "Kalam" }}>
                      Tech Used : {project.tech}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing sx={{pb:3 ,mt:0}}>
                    <a href={project.gitUrl} target="_blank">
                      <IconButton aria-label="github">
                        <GitHubIcon sx={{ color: "#ca1083" }} />
                      </IconButton>
                    </a>
                    {index != 2 && index != 3 && (
                      <a href={project.link} target="_blank">
                        <IconButton aria-label="link">
                          <OpenInNewIcon sx={{ color: "#ca1083" }} />
                        </IconButton>
                      </a>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Projects;
