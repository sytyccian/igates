import React from "react"
import { Grid, Typography, Box } from "@mui/material"
import { productsData } from "../../data/productsData"

const Services = () => {
  return (
    <Box id='services' mt={15} pb={5}>
      <Typography
        className={`reveal`}
        sx={{
          fontSize: { md: "43px", xs: "30px" },
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "80px",
        }}
      >
        Our Services
      </Typography>
      <Grid container spacing={2}>
        {productsData.map((projects) => {
          const { id, name, info, img } = projects
          return (
            <Grid item md={4} sm={6} xs={12} key={id}>
              <Box sx={{ position: "relative" }} className={`reveal`}>
                <img
                  src={img}
                  alt={name}
                  style={{
                    width: "100%",
                    filter: "brightness(60%)",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                    color: "white",
                  }}
                >
                  <Typography
                    variant='subtitle1'
                    component='h6'
                    sx={{ fontWeight: "bold" }}
                  >
                    {name}
                  </Typography>
                  <Typography
                    variant='body1'
                    component='p'
                    sx={{ fontWeight: "bold", fontSize: "13px" }}
                  >
                    {info}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default Services
