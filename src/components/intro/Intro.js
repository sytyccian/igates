import React from "react"
import { Box, Grid, Typography } from "@mui/material"
import IntroBg from "../../images/intro-bg-removebg-preview.png"

const Intro = () => {
  return (
    <Grid container mt={15} pb={5} spacing={5} id='home'>
      {/* Start of About Write-up */}
      <Grid item md={6} xs={12} mb={5}>
        <Box>
          <Typography
            variant='h2'
            component='h2'
            sx={{
              fontSize: { md: "43px", xs: "30px" },
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Let Seasoned Professionals bring your Idea to Life
          </Typography>
        </Box>
        <Typography
          variant='body1'
          sx={{
            fontSize: "18px",
            color: "darkslategray",
            marginBottom: "50px",
          }}
        >
          We're a team of passionate, dependable, and ever improving
          individuals. IGates got the best technical hands money can buy.
        </Typography>
        <Box>
          <a href='#clients' className='icons'>
            View Projects
          </a>
        </Box>
      </Grid>
      {/* End of About Write-up */}
      <Grid
        item
        md={6}
        xs={12}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box>
          <img
            style={{
              width: "100%",
              borderRadius: "10px",
            }}
            src={IntroBg}
            alt=''
          />
        </Box>
      </Grid>
    </Grid>
  )
}

export default Intro
