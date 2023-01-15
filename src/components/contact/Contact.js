import React from "react"
import { Box, Grid, Typography } from "@mui/material"
import { Email, LocationSearching, Phone } from "@mui/icons-material"
import Form from "./Form"

const Contact = () => {
  return (
    <Box mt={15} pb={5} id='contact'>
      <Typography
        variant='h2'
        component='h2'
        sx={{
          fontSize: { md: "43px", xs: "30px" },
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "80px",
        }}
      >
        Let's Build Together
      </Typography>
      <Grid container className={`reveal`}>
        <Grid item md={6} xs={12}>
          {/* Start of Email */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "25px",
              marginBottom: "20px",
            }}
          >
            <Box
              sx={{
                background: { sm: "lightgray", sx: "tranparent" },
                display: "flex",
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                justifyContent: "center",
                alignItems: "center",
                color: "orangered",
              }}
            >
              <Email />
            </Box>
            <Typography
              variant='h6'
              component='p'
              sx={{ fontWeigh: "bold", fontSize: { xs: "16px", sm: "20px" } }}
            >
              c@igates.io
            </Typography>
          </Box>
          {/* End of Email */}

          {/* Start of Location */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "25px",
              marginBottom: "20px",
            }}
          >
            <Box
              sx={{
                background: { sm: "lightgray", sx: "tranparent" },
                display: "flex",
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                justifyContent: "center",
                alignItems: "center",
                color: "orangered",
              }}
            >
              <LocationSearching />
            </Box>
            <Typography
              variant='h6'
              component='p'
              sx={{ fontWeigh: "bold", fontSize: { xs: "16px", sm: "20px" } }}
            >
              Horizon 2 Ext, Lekki, Lagos
            </Typography>
          </Box>
          {/* End of Location */}

          {/* Start of Telephone */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "25px",
              marginBottom: "20px",
            }}
          >
            <Box
              sx={{
                background: { sm: "lightgray", sx: "tranparent" },
                display: "flex",
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                justifyContent: "center",
                alignItems: "center",
                color: "orangered",
              }}
            >
              <Phone />
            </Box>
            <Typography
              variant='h6'
              component='p'
              sx={{ fontWeigh: "bold", fontSize: { xs: "16px", sm: "20px" } }}
            >
              + 234 9093 542 599
            </Typography>
          </Box>
          {/* End of Telephone */}
        </Grid>

        {/* Start of form */}
        <Grid item md={6} xs={12}>
          <Form />
        </Grid>
        {/* End of form */}
      </Grid>
      <Box mt={5}>
        <Typography variant='h5' component='p' sx={{ fontWeight: "bold" }}>
          Get in Touch
        </Typography>
        <Typography
          variant='subtitle2'
          sx={{ color: "darkslategray", fontSize: "18px" }}
        >
          Let Seasoned Professionals bring your idea to life
        </Typography>
      </Box>
    </Box>
  )
}

export default Contact
