import React from "react"
import { Grid, Box, Typography } from "@mui/material"
import { projectsData } from "../../data/projectsData"

const SingleClients = () => {
  return (
    <Grid container spacing={2}>
      {projectsData.map((projects) => {
        const { id, img, name } = projects
        return (
          <Grid item md={6} sm={6} xs={12} key={id}>
            <Box
              sx={{ textAlign: "center", marginBottom: "10px" }}
              className={`reveal`}
            >
              <img
                src={img}
                alt=''
                style={{
                  width: "100%",
                }}
              />
              <Typography
                variant='subheading1'
                component='p'
                sx={{ fontSize: "14px", marginTop: "5px", fontWeight: "bold" }}
              >
                {name}
              </Typography>
            </Box>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default SingleClients
