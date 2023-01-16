import React from "react"
import { projectsData } from "../../data/projectsData"
import { Grid, Box, Typography } from "@mui/material"
import SingleClients from "./SingleClients"

const Clients = () => {
  return (
    <Box mt={15} pb={5} id='clients'>
      <Typography
        className={`reveal`}
        variant='h2'
        component='h2'
        sx={{
          fontSize: { md: "43px", xs: "25px" },
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "80px",
        }}
      >
        Who We've Worked For
      </Typography>
      <Grid container spacing={5} className={`reveal`}>
        <Grid item md={6} xs={12}>
          {projectsData.map((project) => {
            const { id, name, avatar, info } = project
            return (
              <Box
                key={id}
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                  gap: "20px",
                  marginBottom: "20px",
                }}
              >
                <Box className={`reveal`}>
                  <img
                    src={avatar}
                    alt={name}
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "10px",
                      boxShadow: "0 0 3px black",
                    }}
                  />
                </Box>
                <Box className={`reveal`}>
                  <Typography
                    variant='subheading2'
                    component='h5'
                    sx={{
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {name}
                  </Typography>
                  <Typography
                    variant='body2'
                    component='p'
                    color='darkslategray'
                  >
                    {info}
                  </Typography>
                </Box>
              </Box>
            )
          })}
        </Grid>
        <Grid item md={6} xs={12}>
          <SingleClients />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Clients
