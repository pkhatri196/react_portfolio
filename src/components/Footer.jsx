import React from 'react'
import { Typography,Grid } from '@mui/material'

const Footer = () => {
  return (
    <>
      <hr></hr>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row", // Adjust to 'row' if you want items side by side
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center", // Optional: to center text content
          padding: 1, // Optional: for adding some padding around the items
        }}
      >
        <Grid item sx={{ color: "text.secondary" }}>
          <Typography sx={{ fontSize: {sm:"12px",xs:"10px"} }}>
            Designed and Developed By Payal Khatri
          </Typography>
          <Typography component="span" sx={{ fontSize: {sm:"12px",xs:"10px"} }} >
            Copyright &copy; 2024 |{" "}
          </Typography>
          <Typography component="span" sx={{ fontSize: {sm:"12px",xs:"10px"} }}>
            All rights reserved
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer
