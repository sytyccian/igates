import React from "react"
import { Box, Grid, Typography } from "@mui/material"
import { partnersData } from "../../data/partnersData"

const Partners = () => {
  return (
    <Box mt={15} pb={5}>
      <Typography
        className={`reveal`}
        variant='h2'
        component='h2'
        sx={{
          fontSize: { sm: "43px", xs: "30px" },
          fontWeight: "bold",
          marginBottom: "50px",
          textAlign: "center",
        }}
        id='partners'
      >
        Our Trusted Partners
      </Typography>
      <Grid container spacing={5}>
        {partnersData.map((partner) => {
          const { id, name, img } = partner
          return (
            <Grid
              className={`reveal`}
              item
              lg={3}
              md={4}
              sm={6}
              xs={12}
              key={id}
              sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Box>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  src={img}
                  alt={name}
                />
              </Box>
              <Typography variant='body1' sx={{ fontWeight: "bold" }}>
                {name}
              </Typography>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default Partners
