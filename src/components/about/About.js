import React from "react"
import { Box, Grid, Typography } from "@mui/material"

const About = () => {
  return (
    <Box mt={15} pb={5} id='about'>
      <Typography
        className={`reveal`}
        variant='h2'
        component='h2'
        sx={{
          fontSize: { md: "43px", xs: "30px" },
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        What We're About
      </Typography>
      <Grid container spacing={5} className={`reveal`}>
        {/* Beginning of About image */}
        <Grid item md={6} xs={12}>
          <Box className={`reveal`}>
            <img
              style={{
                width: "100%",
              }}
              src='https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?cs=srgb&dl=pexels-christina-morillo-1181622.jpg&fm=jpg&w=640&h=427&_gl=1*17usjr8*_ga*MTA2NTE3MzE2NC4xNjYwNjYzMTYw*_ga_8JE65Q40S6*MTY3MTYyMDA4NS40NS4xLjE2NzE2MjAxNjIuMC4wLjA.'
              alt=''
            />
          </Box>
        </Grid>
        {/* End of About Image */}

        {/* Beginning of About Write-up */}
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box className={`reveal`}>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                color: "darkslategray",
                lineHeight: "25px",
                marginBottom: "15px",
              }}
            >
              iGates Systems Limited is a Next Generation Technology Services
              Provider, specializing solutions development and general
              information communication and technology services.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                color: "darkslategray",
                lineHeight: "25px",
                marginBottom: "15px",
              }}
            >
              We provide bespoke solutions tailored to meet specific
              requirements of our clients.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  padding: "5px",
                  border: "1px solid orangered",
                  borderRadius: "5px",
                  textAlign: "center",
                  color: "orangered",
                  fontSize: { xs: "14px", sm: "16px" },
                }}
              >
                WE ARE PASIONATE
              </Typography>
              <Typography
                sx={{
                  padding: "5px",
                  border: "1px solid orangered",
                  borderRadius: "5px",
                  textAlign: "center",
                  color: "orangered",
                  fontSize: { xs: "14px", sm: "16px" },
                }}
              >
                HONEST & DEPENDABLE
              </Typography>
              <Typography
                sx={{
                  padding: "5px",
                  border: "1px solid orangered",
                  borderRadius: "5px",
                  textAlign: "center",
                  color: "orangered",
                  fontSize: { xs: "14px", sm: "16px" },
                }}
              >
                CONTINUOUS IMPROVEMENT
              </Typography>
            </Box>
          </Box>
        </Grid>
        {/* End of About Write-up */}
      </Grid>
    </Box>
  )
}

export default About
