import React, { useState } from 'react'
import {Box,Grid ,Typography,Stack,Button} from '@mui/material'
import girl from '../assets/laptopGirl.avif'



const HeroSection = () => {
  return (
    <Box sx={{ p: { md: "110px 80px", xs: "30px 20px" } }}>
      <Grid
        container
        sx={{
          gap: {
            xs: 8, // Gap for extra-small screens
            sm: 2, // No gap for medium screens and up
          },
          display: "flex",
          flexDirection: {sm:"row", xs:"column-reverse"},
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={7} aria-label="left-side">
          <Grid
            container
            spacing={1}
            sx={{ display: "flex", flexDirection: "column", alignItems:{sm:"flex-start" ,xs:"center"}, }}
          >
            <Grid item>
              <Typography
                variant="h3"
                component="span"
                sx={{
                  fontSize: {
                    xs: "30px",
                    md: "40px",
                  },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Hi! I am
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h3"
                component="span"
                sx={{
                  fontWeight: "600",
                  color: "#ca1083",
                  fontFamily: "Kalam",
                  fontSize: { xs: "30px", md: "60px" },
                  textAlign:{xs:"center" ,md:"left"}
                }}
              >
                Payal Khatri
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "20px", md: "30px" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Software Developer
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h5"
                sx={{
                  fontSize: {
                    xs: "18px",
                    md: "25px",
                  },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                "Transforming ideas into reality through code,<br></br>driving
                innovation and shaping the digital world"
              </Typography>
            </Grid>
            <Grid item>
              <br></br>
              <Stack direction="row" spacing={2}>
                <a href="mailto:payal.khatri02@gmail.com" target="_blank">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#ca1083",
                      borderRadius: "20px",
                      fontSize: "20px",
                      textTransform: "none",
                      fontSize: { md: "20px", xs: "15px" },
                    }}
                  >
                    Hire Me!
                  </Button>
                </a>
                <a
                  href="/public/Payal_Khatri_Resume.pdf"
                  download="Payal_Khatri_Resume.pdf"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#ca1083",
                      border: "solid 2px #ca1083",
                      borderRadius: "15px",
                      textTransform: "none",
                      fontSize: { md: "20px", xs: "15px" },
                    }}
                  >
                    Download CV
                  </Button>
                </a>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          aria-label="right-side"
          xs={12}
          sm={3}
          sx={{
            display: "flex",
            flexDirection: "flex-end",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <img
              alt="Girl"
              src={girl}
              width="100%"
              style={{ borderRadius: "200px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeroSection
