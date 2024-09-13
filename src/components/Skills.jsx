import React from 'react'
import {Grid,Box,Typography} from "@mui/material";
import html from "../icons/html-5.png"
import css from "../icons/css-3.png";
import js from "../icons/js.png";
import clang from "../icons/Clang.png";
import cpp from "../icons/c-.png";
import flutter from "../icons/flutter.png";
import dart from "../icons/dart.png";
import python from "../icons/python.png";
import tail from "../icons/tailwind.png";
import git from "../icons/git.png";
import mui from "../icons/material.png";
import bootstrap from "../icons/bootstrap.png";
import react from "../icons/react.png";
import linux from "../icons/linux.webp";

const images =[
    {
    id: 1,
    src:html,
},
 {
    id: 2,
    src:css,
},
 {
    id: 3,
    src:js,
},
 {
    id: 4,
    src:react,
},
 {
    id: 5,
    src:tail,
},
 {
    id: 6,
    src:mui,
},
 {
    id: 7,
    src:bootstrap,
},
 {
    id: 8,
    src:flutter,
},
 {
    id: 9,
    src:dart,
},
 {
    id: 10,
    src:clang,
},
 {
    id: 11,
    src:cpp,
},
 {
    id: 12,
    src:python,
},
 {
    id: 13,
    src:git
},

 {
    id: 14,
    src:linux,
}
 


]

const Skills = () => {

  return (
    <Box
      sx={{
        p: {md:"80px 100px 80px 100px", xs:"80px 20px 20px 20px"},
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "auto",
      }}
    >
      <Typography variant="h3" sx={{ color: "#ca1083", fontFamily: "Kalam" }}>
        Skills
      </Typography>
      <Grid
        container
      
        sx={{
        gap: {
          xs: 4,  // Gap for extra-small screens
          md: 0,  // No gap for medium screens and up
        },
          display: "flex",
          justifyContent: "center",
          alignItems: "center", 
          p: "30px 0px",
        }}
      >
        {images.map((img, index) => (
          <Grid item xs={3} sm={1} key={index}>
            <img key={index} src={img.src} alt={img.alt} width="70px" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Skills
