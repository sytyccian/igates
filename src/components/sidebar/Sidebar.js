import React from "react"
import { Box, Typography } from "@mui/material"
import IgatesLogo from "../../images/Igates logo.png"

const Sidebar = ({ showSidebar, removeSidebar }) => {
  return (
    <Box
      sx={{
        display: { md: "none", sx: "block" },
        width: { sm: "500px", xs: "80%" },
      }}
      className={`sidebar ${showSidebar && "show-sidebar"}`}
    >
      {/* Start of logo */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "20px",
          paddingLeft: "10px",
          width: "200px",
        }}
      >
        <img src={IgatesLogo} alt='' style={{ width: "100%" }} />
      </Box>
      {/* End of Logo */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          marginTop: "50px",
          gap: "5px",
        }}
      >
        <a href='#home' onClick={removeSidebar}>
          Home
        </a>
        <a href='#about' onClick={removeSidebar}>
          About
        </a>
        <a href='#clients' onClick={removeSidebar}>
          Clients
        </a>
        <a href='#partners' onClick={removeSidebar}>
          Partners
        </a>
        <a href='#services' onClick={removeSidebar}>
          Services
        </a>
        <a href='#contact' onClick={removeSidebar}>
          Contact
        </a>
      </Box>
    </Box>
  )
}

export default Sidebar
