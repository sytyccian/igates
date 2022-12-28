import React from "react"
import { Box, Typography } from "@mui/material"
import MenuIcon from "../icon/MenuIcon"
import IgatesLogo from "../../images/Igates logo.png"

const Navbar = ({ toggleSidebar, showSidebar }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "80px",
        position: "static",
      }}
    >
      {/* Start of logo */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "200px",
        }}
      >
        <img src={IgatesLogo} alt='' style={{ width: "100%" }} />
      </Box>
      {/* End of Logo */}

      {/*  Start of Nav Icons */}
      <Box
        className='icon-box'
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          gap: "100px",
        }}
      >
        <a href='#about'>About</a>
        <a href='#clients'>Clients</a>
        <a href='#partners'>Partners</a>
        <a href='#services'>Services</a>
        <a href='#contact' id='contact-link'>
          Contact Us
        </a>
      </Box>
      {/* End of Nav Icons */}

      {/* Start of Toggle button */}
      <MenuIcon showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      {/* End of Toggle button */}
    </Box>
  )
}

export default Navbar
